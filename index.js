const url = "https://api.jikan.moe/v3/search/anime?q=naruto"



fetch(url)
.then(res=> res.json())
.then(results => {
    let firstTenMovies = results.results.splice(0, 10)
    firstTenMovies.forEach(movie => {
        renderMovie(movie)
    })
})

//appending each card
let grid = document.getElementById('grid')
const renderMovie = (movie) => {
   let div = document.createElement('div')
   div.classList.add('column')
   div.innerText = `${movie.title} \nRating: ${movie.rated} Score: ${movie.score}`


   //creating an image element 
   let image = document.createElement('img')
   image.src = movie.image_url
    div.append(image)
    grid.append(div)
    
   // appending to .css hover card effect
//    let bestCard = document.getElementsByClassName("card-div")
//    bestCard.append(div)

}
const form = document.querySelector('#form')
form.addEventListener('submit', (e) => {
    newMovieSubmit(e);
})

const newMovieSubmit = (e) => {
    console.log('hi)')
    e.preventDefault()
    let newMovieObj = {
        image_url: e.target.image.value,
        title: e.target.movie.value,
        score: e.target.score.value,
        rated: e.target.rating.value,
    }
    console.log(newMovieObj)
    renderMovie(newMovieObj)
    form.reset()
}

