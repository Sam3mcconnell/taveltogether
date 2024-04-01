import { postItineraryData } from "./apiCalls.js";
window.onload = function() {
    loadNavigation();
    document.getElementById('add').addEventListener('click', addActivityForm);
    document.getElementById('submit').addEventListener('click', submitItinerary);
};

function addActivityForm() {
    console.log("add activity")
    const activitiesContainer = document.getElementById('activities-container');

    const activityForm = document.createElement('div');
    activityForm.innerHTML = `
        <form class="activity-form">
            <label for="activity-name">Activity Name:</label>
            <input type="text" name="activity-name" required>

            <label for="activity-location">Location:</label>
            <input type="text" name="activity-location" required>

            <label for="activity-description">Description:</label>
            <textarea name="activity-description" rows="3" required></textarea>
        </form>
    `;

    activitiesContainer.appendChild(activityForm);
}

function submitItinerary() {
    const uid = sessionStorage.getItem('uid');
    if(uid === undefined || uid === null){
        console.log("Error uid not found");
        //TODO: Display something?
        return;
    }
    // Gather data from the form
    const itineraryName = document.getElementById('itinerary-name').value;
    const backgroundColor = document.getElementById('background-color').value;
    const city = document.getElementById('city').value;

    const activities = [];
    const activityForms = document.querySelectorAll('.activity-form');
    activityForms.forEach(form => {
        const activityName = form.querySelector('input[name="activity-name"]').value;
        const activityLocation = form.querySelector('input[name="activity-location"]').value;
        const activityDescription = form.querySelector('textarea[name="activity-description"]').value;

        // Construct activity object
        const activity = {
            name: activityName,
            location: activityLocation,
            description: activityDescription
        };

        activities.push(activity);
    });

    // Construct itinerary object
    
    const itinerary = {
        userInfo: uid,
        title: itineraryName,
        backgroundColor: backgroundColor,
        city: city,
        activities: activities
    };

    // Send the itinerary data to the backend
    console.log(itinerary)
    postItineraryData(itinerary)
}
// Update color text based on color selection
const colorSelector = document.getElementById('background-color');
const colorText = document.getElementById('color-text');

colorSelector.addEventListener('input', function() {
    colorText.textContent = colorSelector.value;
});