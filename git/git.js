document.addEventListener("DOMContentLoaded", function(event) {
    fetch('https://api.github.com/users/DariaTsypkina/repos')
        .then(response => response.json())
        .then(response => {

            for (let i = 0; i < response.length; i++) {

                document.getElementById("container").innerHTML +=
                `<div class="item">
                <h2>Название проекта: ${response[i].name}</h2>
                <ul>
                    <li><a href="${response[i].html_url}">Ссылка на проект</a></li>
                    <li>Язык: ${response[i].language}</li>
                </ul>
                </div>`;
            }
        })
        .catch(error => alert(error));
});