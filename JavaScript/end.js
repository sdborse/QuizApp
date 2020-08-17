const username = document.getElementById('username');
const saveBtn = document.getElementById('saveButton');
const finalScore=document.getElementById('finalScore');

const highScores = JSON.parse(localStorage.getItem('highestScore')) || [];

const mostRecentScore=localStorage.getItem('mostRecentScore');


finalScore.innerText=mostRecentScore;

username.addEventListener("keyup",()=>{
	saveBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highestScore', JSON.stringify(highScores));
	window.location.assign("./index.html");
}