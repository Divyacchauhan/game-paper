let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice); //user ke choice ke liye ye variable defind kre
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id")
        
    });
});