document.getElementById('searchButton').addEventListener('click', searchMovie);

function searchMovie() {
    var input = document.getElementById('movieInput').value;
    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=6e786caa&s=' + input)
        .then(response => response.json())
        .then(data => {
            var movieInfo = document.getElementById('movieInfo');
            var html = `
                <div class="movieCard">
                    <img src="${data.Search[0].Poster}" alt="Movie Poster">
                    <h3>${data.Search[0].Title}</h3>
                    <p><strong>Год:</strong> ${data.Search[0].Year}</p>
                    <p><strong>Тип:</strong> ${data.Search[0].Type}</p>
                    <button class="addToFavorite" onclick="addToFavorite('${data.Search[0].Title}')">Добавить в избранное</button>
                </div>
            `;
            movieInfo.innerHTML = html;
        })
        .catch(error => console.log(error));
}

function addToFavorite(movieTitle) {
    var favoriteMovies = document.getElementById("favoriteMovies");
    var html = `
        <div class="movieCard">
            <h3>${movieTitle}</h3>
            <button class="remove" onclick="removeFromFavorite(this)">Remove</button>
        </div>
    `;
    favoriteMovies.innerHTML += html;
}

function removeFromFavorite(button) {
    var movieCard = button.parentNode;
    movieCard.parentNode.removeChild(movieCard);
}