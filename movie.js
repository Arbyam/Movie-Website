const movieListEl = document.querySelector('.movies__list')
const title = localStorage.getItem("Title")
const movieContainerEl = document.querySelector('.movie__container')

// window.onload = () => {

//     const searchFieldElement = document.getElementById("searchBar")
//     searchFieldElement.onkeydown = (event) => {
//         renderMovies(searchFieldElement.value);
//     }
//     }


async function OnSearchChange(event){
    const title = event.target.value
    await renderMovies(title)
    setTimeout(() =>loadingDone(),1000)

}


async function renderMovies(movieName){
    const moviesUrl =`https://www.omdbapi.com/?i=tt3896198&apikey=a6a35b27&s=${movieName}`;
    const movies = await fetch(`${moviesUrl}`)
    const moviesData = await movies.json();
    const showName = moviesData.Search.map(element => element.Title)


if (!moviesData.Search){
    movieListEl.style.display = 'none';
    movieContainerEl.style.display = "block";
}
else if (moviesData.Search){

for (let i = 0; i<6; i++){
movieListEl.innerHTML = moviesData.Search.slice(0,6).map(movie => `<div class="movie1">
<figure class="movie__img--wrapper"><img class="movie__search--img" src=${movie.Poster} alt=""></figure>
<h1 class = "movie__title--header">${movie.Title}</h1>
</div>`).join("");
setTimeout(() => loadingDone(), 4000)
}
}


}



