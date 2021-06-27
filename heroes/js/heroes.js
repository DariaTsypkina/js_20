document.addEventListener("DOMContentLoaded", function(event) {
    generateCards();
});

function generateCards() {
    fetch("assets/json/heroes.json")
    .then(response => response.json())
    .then(response => {
        let heroes = response.members;

        document.getElementById("gallery").innerHTML = "";

        for (let hero of heroes) {
            document.getElementById("gallery").innerHTML += 
            `<div class="gallery__card card" id="card">
            <div class="img-container">
                <img class="card__img" src="${hero.imgSRC}" alt="">
            </div>
            <div class="card__info">
                    <h2 class="card__title">${hero.name}</h2>
                    <ul class="card__list">
                        <li class="card__item"><span class="bold">Возраст: </span>${hero.age}</li>
                        <li class="card__item"><span class="bold">Имя: </span>${hero.alterEgo}</li>
                        <li class="card__item"><span class="bold">Суперсилы: </span>${hero.powers.join(", ")}</li>
                        <li class="card__item"><span class="bold">Род деятельности: </span>${hero.activities.join(", ")}</li>
                        <li class="card__item"><span class="bold">Друзья: </span>${hero.friends.join(", ")}</li>
                        <li class="card__item"><span class="bold">Подробнее: </span>${hero.addInfo}</li>
                    </ul>
                    <div class="hero-grade">
                        <label class="hero-grade__title" for="grade">Моя оценка:</label><br>
                        <input class="hero-grade__input" name="grade" type="number" min="0" max="5" step="0.5" onchange="setGrade()">
                        <i class="fas fa-star star"></i>
                    </div>
            </div>`;
        }
    });
}

function setGrade() {
    let inputs = document.querySelectorAll("input");
    let grades = [];

    for (let i of inputs) {
        if (i.value < 0 || i.value > 5) return;
        else {
            grades.push(i.value);
            setStorage(grades);
            }
        }
}

function setStorage(grades) {
    localStorage.setItem('grades', grades);
}



