document.addEventListener("DOMContentLoaded", function(event) {
    fetch('https://api.github.com/users/DariaTsypkina/repos')
        .then(response => response.json())
        .then(response => {
            document.getElementById("container").innerHTML =""
        })
});