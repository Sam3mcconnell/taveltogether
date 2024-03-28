function loadNavigation() {
    fetch('../pages/navigation.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading navigation:', error));
}