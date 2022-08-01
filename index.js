const url = "https://api.jikan.moe/v3/search/anime?q=naruto"

const cardDiv = document.querySelector('#card-div')

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
   div.innerText = `${movie.title} \nRating: PG-13 \nScore: ${movie.score}`


   //creating an image element 
   let image = document.createElement('img')
   image.src = movie.image_url
   div.append(image)
    grid.append(div)
    
   // appending to .css hover card effect
   let bestCard = document.getElementById("best-card")
//    bestCard.append(div)

}

const newMovieSubmit = () => {
    const form = document.querySelector('#form')
    form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let newImage = e.target.image.value
    let newMovieTitle = e.target.movie.value
    let newScore = e.target.score.value
    let newRating = e.target.rating.value
        
    let newMovieObj = {
        image: newImage,
        title: newMovieTitle,
        score: newScore,
        rated: newRating,
            }
        
    renderMovie(newMovieObj)
    form.reset()
    })
}

