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

const renderMovie = (movie) => {
    let movieImage = document.createElement('img')
        movieImage.src = movie.image_url
        
        let movieTitle = document.createElement('h4')
        movieTitle.innerText = movie.title  

        let movieScore = document.createElement('p')
        movieScore.innerText = `Score: ${movie.score}`

        let movieRating = document.createElement('p')
        movieRating.innerText = `Rating: ${movie.rated}`


        cardDiv.append(movieImage, movieTitle, movieScore, movieRating)
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