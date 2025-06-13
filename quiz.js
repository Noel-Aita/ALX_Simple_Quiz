document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-answer");
    const feedback = document.getElementById("feedback");

    submitButton.addEventListener("click", checkAnswer);

    function checkAnswer() {
        const options = document.getElementsByName("quiz");
        let correctAnswer = null;  /* selectedValue*/ 

        for (let option of options) {
            if (option.checked) {
                correctAnswer = option.value;
                break;
            }
        }

        if (correctAnswer === null) {
            feedback.textContent = "Please select an answer before submitting.";
            feedback.style.color = "orange";
            return;
        }

        if (correctAnswer === "4") {
            feedback.textContent = "Correct! 🎉";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Incorrect. Try again!";
            feedback.style.color = "red";
        }
    }
});
