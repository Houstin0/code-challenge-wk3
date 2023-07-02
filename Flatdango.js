// Make a GET request to retrieve film data
fetch("http://localhost:3000/films")
  .then(response => response.json())
  .then(data => {
    data.forEach(film=>{
        updateDetails(film)
        populateFilmList()

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







