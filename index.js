// // get fetch 
// const baseUrl = https://api.jikan.moe/v4;
// fetch(baseUrl + "/random/anime")
//     .then(res => res.json())
//     .then(animeData => renderAnimes(animeData));

// // might help with fetch 
// function renderAnimes(title_english) {
//      console.log('anime title:', title_english

//     title_english.forEach(pup => {
//         appendPups(pup);
//         console.log(" ")
//     })
//   };


fetch("https://api.jikan.moe/v4/random/anime")
.then(res => res.json())
.then(data => {
    console.log(data)
})