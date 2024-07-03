// var for inputs,button
const movieInput = document.getElementById("movieinput");
const titleInput = document.getElementById("titleinput");
const movieList = document.getElementById("movielist");
const addBtn = document.getElementById("addbtn");
const resetBtn = document.getElementById("clearbtn");
const movieForm = document.getElementById("form");

let movieName;
let movieUrl;
let movies = [];

movieInput.addEventListener("input", (e) => {
  movieUrl = e.target.value;
});
titleInput.addEventListener("input", (e) => {
  movieName = e.target.value;
});
movieForm.addEventListener("submit", (e) => {
  //   console.log(e);
  e.preventDefault();
  if (!movieName || !movieUrl) {
    alert("both spaces are compulsory");
  }
  movies.push({
    name: movieName,
    url: movieUrl,
  });
  titleInput.value = "";
  movieInput.value = "";
  movieName = "";
  movieUrl = "";
  displayMovies();
});

function displayMovies() {
  let movieDisplay = movies.map((movie) => {
    const movieCard = document.createElement("div");
    const img = document.createElement("img");
    img.classList.add("img");
    img.src = movie.url;
    img.alt = movie.name;
    const imgText = document.createElement("p");
    imgText.textContent = movie.name;
    movieCard.appendChild(img);
    movieCard.appendChild(imgText);
    return movieCard;
  });
  movieDisplay.forEach((moviecard) => {
    movieList.appendChild(moviecard);
  });
}
