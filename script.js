// script.js
function showForm() {
    const role = document.getElementById("role").value;
    const roleSelectionForm = document.getElementById("role-selection-form");
    const customerForm = document.getElementById("customer-signup-form");
    const employeeForm = document.getElementById("employee-signup-form");
  
    if (role === "customer") {
      roleSelectionForm.classList.add("hidden");
      customerForm.classList.remove("hidden");
    } else if (role === "employee") {
      roleSelectionForm.classList.add("hidden");
      employeeForm.classList.remove("hidden");
    }
  }
  
  function resetForm() {
    document.getElementById("role-selection-form").classList.remove("hidden");
    document.getElementById("customer-signup-form").classList.add("hidden");
    document.getElementById("employee-signup-form").classList.add("hidden");
    document.getElementById("role").value = ""; // Reset role selection
  }
  