window.onload = () => {
  fetch("http://localhost:3000/api/test")
    .then((response) => response.json())
    .then((data) => {
      const messageElement = document.getElementById("testScript");
      messageElement.textContent = data.message;
    })  
    .catch((error) => console.error(error));
};