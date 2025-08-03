let employee = {
  empName: "Aishwarya",
  empAge: 28,
  position: "Manager",
  showDetails: function() {
    console.log("Employee Name: " + this.empName);
    console.log("Employee Age: " + this.empAge);
    console.log("Position: " + this.position);
  }
};

employee.showDetails();

employee.empAge = 29;
employee.position = "Senior Manager";

console.log("Updated Age: " + employee.empAge);
console.log("Updated Position: " + employee.position);

console.log("Name: " + employee.empName);
console.log("Position: " + employee["position"]);

employee.company = "TCS";

employee.showCompany = function() {
  console.log("Company: " + this.company);
};

employee.showCompany();