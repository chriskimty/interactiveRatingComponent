// DOM elements
const ratings = document.querySelectorAll("input");
const submit = document.querySelector("button")
const tySection = document.querySelector(".thankYou");
const rateSection = document.querySelector(".rating");

// ratings.required = true;
// Your users should be able to:
    // Select and submit a number rating
let ratingVal;
ratings.forEach(rating => {
    rating.addEventListener("click", () => {
        // When the user clicks the rating, save that value to a variable
        ratingVal = rating.value;
        // To prevent submit to be pressed without user choosing a value
        submit.disabled = false;
    })
})

submit.addEventListener("click", (e) => {
    e.preventDefault();
    // User clicks the submit button, then pass that saved variable and display within span on TY 
    const numberDisplay = document.querySelector("span");
    numberDisplay.innerHTML = ratingVal + " ";
    // See the "Thank you" card state after submitting a rating & remove rateSection
    tySection.style.display = 'block';
    rateSection.style.display = 'none';
    // Return back to original state
    submit.disabled = true;
})




// See hover and focus states for all interactive elements on the page

// Always consider revisions:
    // Remove console.logs
    // Instead of querySelecting an entire element, considering that this might be a small feature of a larger app, change to id and getElementById so that it doesn't run into bugs later on