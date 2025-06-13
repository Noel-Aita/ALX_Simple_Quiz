// Wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", function () {
    // Get the submit button and feedback element
    const submitButton = document.getElementById("submit-answer");
    const feedback = document.getElementById("feedback");

    // Add click event listener to the button
    submitButton.addEventListener("click", function () {
        // Get all radio buttons with name="quiz"
        const options = document.getElementsByName("quiz");
        let selectedAnswer = null;

        // Loop through options to find the checked one
        for (let option of options) {
            if (option.checked) {
                selectedAnswer = option.value;
                break;
            }
        }

        // If no option was selected
        if (selectedAnswer === null) {
            feedback.textContent = "Please select an answer before submitting.";
            feedback.style.color = "orange";
            return;
        }

        // Check if the selected answer is correct
        if (selectedAnswer === "4") {
            feedback.textContent = "Correct! 🎉";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Incorrect. Try again!";
            feedback.style.color = "red";
        }
    });
});
