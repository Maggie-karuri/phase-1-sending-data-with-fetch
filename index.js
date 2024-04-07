function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => response.json())
      .then(data => {
        // Append new id to the DOM
        const newId = document.createElement('p');
        newId.textContent = `New ID: ${data.id}`;
        document.body.appendChild(newId);
      })
      .catch(error => {
        // Append error message to the DOM
        const errorMessage = document.createElement('p');
        errorMessage.textContent = error.message;
        document.body.appendChild(errorMessage);
      });
  }
  
  // Test the submitData function
  document.addEventListener('DOMContentLoaded', () => {
    submitData("John Doe", "john@example.com");
  });
  