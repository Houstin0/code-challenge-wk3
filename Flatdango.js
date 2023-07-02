// Make a GET request to retrieve film data
fetch("http://localhost:3000/films")
  .then(response => response.json())
  .then(data => {
    data.forEach(movies=>{
      updateDetails(movies)
    })
})
  .catch(error => {
    console.log('Error:', error);
});
//funtion to display details
function updateDetails(movie) {
    
    const posterElement=document.getElementById("poster")
    posterElement.src=movie.poster;
    const titleElement=document.getElementById("title")
    titleElement.textContent=movie.title;
    const runtimeElement=document.getElementById("runtime")
    runtimeElement.textContent=`Runtime: ${movie.runtime} minutes`;
    const showtimeElement=document.getElementById("showtime")
    showtimeElement.textContent=`Showtime:${movie.showtime}`;
    const availableTicketsElement=document.getElementById("availableTickets")
    availableTicketsElement.textContent=`Available Tickets:${movie.capacity-movie.tickets_sold}`
    const buyButton=document.getElementById("buyButton")
  
    if(movie.capacity-movie.tickets_sold===0){
        buyButton.disabled= true
    }else{
        buyButton.disabled=false
    }

}

fetch("http://localhost:3000/films")
  .then(response => response.json())
  .then(data => {
    data.forEach(movie=>{
      //create menu list for each movie
      const filmsList = document.getElementById('films');
      const listItem = document.createElement('li');
      listItem.className = 'movie-item';
      listItem.textContent = movie.title;
      listItem.addEventListener('click', handleFilmSelection);
      filmsList.appendChild(listItem);

    })
})

function handleFilmSelection(event) {
    const filmId = event.target.dataset.filmId;
    const selectedFilm = films.find(film => film.id === filmId);
    updateDetails(selectedFilm);
}


