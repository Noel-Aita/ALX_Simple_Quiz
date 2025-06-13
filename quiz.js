document.addEventListener("DOMContentLoaded", function  {
    const submitButton = document.getElementById("submit-answer");
    const userAnswer = document.getElementById("feedback");

    submitButton.addEventListener("click", checkAnswer);

    const checkAnswer = document.querySelector('input[name="quiz"]:checked');

    function checkAnswer() {
        const options = document.getElementsByName("quiz");
        let correctAnswer = null;  /* selectedValue*/ 

        for (let option of options) {
            if (option.checked) {
                correctAnswer = option.value;
                break;
            }
        }

        if (checkAnswer === correctAnswer) {
           userAnswer.textContent = "Please select an answer before submitting.";
           userAnswer.style.color = "orange";
            return;
        }

        if (correctAnswer === "4") {
            userAnswer.textContent = "Correct! 🎉";
            userAnswer.style.color = "green";
        } else {
            userAnswer.textContent = "Incorrect. Try again!";
            userAnswer.style.color = "red";
        }
    }
});
