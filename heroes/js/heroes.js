document.addEventListener("DOMContentLoaded", function(event) {
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
                        <li class="card__item">Возраст: ${hero.age}</li>
                        <li class="card__item">Имя: ${hero.alterEgo}</li>
                        <li class="card__item">Суперсилы: ${hero.powers.join(", ")}</li>
                        <li class="card__item">Род деятельности: ${hero.activities.join(", ")}</li>
                        <li class="card__item">Друзья: ${hero.friends.join(", ")}</li>
                    </ul>
                    <div class="hero-grade">
                        <label class="hero-grade__title" for="grade">Моя оценка:</label><br>
                        <input class="hero-grade__input" type="number" min="0" max="5" id="heroGradeInput">
                    </div>
                </div>
        </div>`;
        }
    });
});

