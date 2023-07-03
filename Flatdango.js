document.addEventListener('DOMContentLoaded', () => {
    // Make a GET request to retrieve film data
fetch("http://localhost:3000/films")
.then(response => response.json())
.then(data => {
  data.forEach(movies=>{
    updateDetails(movies);
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
  availableTicketsElement.textContent=`Available Tickets:${movie.capacity-movie.tickets_sold}`;
  const buyButton=document.getElementById("buyButton")


   //event listener for the buy ticket button decreases the number of available tickets 
  buyButton.addEventListener('click',()=>{
     if(movie.capacity-movie.tickets_sold>0){
      movie.tickets_sold++;
      availableTicketsElement.textContent=`Available Tickets:${movie.capacity-movie.tickets_sold}`;
     }
    })

}
//fetching data and creating a list menu
fetch("http://localhost:3000/films")
.then(response => response.json())
.then(data => {
  data.forEach(movie=>{
    //create menu list for each movie
    const filmsList = document.getElementById('films')
    const listItem = document.createElement('li')
    listItem.className = 'movie-item';
    listItem.textContent = movie.title;
    listItem.dataset.filmId=movie.id
    listItem.addEventListener('click', (event) =>{updateDetails(movie)}) //event listener for the list
    filmsList.appendChild(listItem);

  })
})

});