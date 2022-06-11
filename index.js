const employee = {
    name: "Aaron Fowlkes",
    streetAddress: "21 Gladbrook Rd"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let a = {...employee};
    a[key] = value;
    return a;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    let b = {...employee};
    delete b[key];
    return b;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}