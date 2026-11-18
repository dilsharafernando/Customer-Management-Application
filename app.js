const customerList = [];

function addCustomer() {
    let customerID = document.getElementById("txtID").value;
    let customerName = document.getElementById("txtName").value;
    let customerAge = document.getElementById("txtAge").value;
    let customerAddress = document.getElementById("txtAddress").value;
    let customerSalary = document.getElementById("txtSalary").value;

    const customer = {
        id: customerID,
        name: customerName,
        address: customerAddress,
        age: customerAge,
        salary: customerSalary
    };

    customerList.push(customer);
    console.log(customerList);
    loadCustomertable();
}

function loadCustomertable() {
    let body = `<tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Salary</th>
                    </tr>`

    for (let customer of customerList) {

        body += `<tr>
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${customer.age}</td>
                <td>${customer.address}</td>
                <td>${customer.salary}</td>
            </tr>
            `
    }
    document.getElementById("tblCustomer").innerHTML = body;
}
