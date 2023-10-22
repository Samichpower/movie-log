const movies = [
  {
    title: 'Barbarian',
    yearReleased: 2022,
    image: 'images/barbarian.jpg',
    rating: 3,
    dateWatched: '10.21.2023',
    genre: 'Horror',
    review: "It was good. The first half was the best, and I feel they revealed the monster too soon. After that, it seemed to sort of fizzle out, and the ending was kind of bad. The rapist character also seemed sort of forced and I'm sort of struggling to really see the point of him. Worth a watch though, still a solid movie.",
  },
]


/* TEMPLATE
{
  title:
  yearReleased:
  image: 'images/',
  rating:
  dateWatched:
  genre:
  review:
},
*/


function createMovieNode(movie) {
  function getRating() {
    const rating = movie.rating;
    let stars = ''
    
    for (let i = 0; i < 5; i++) {
      if (i === (rating - 0.5)) {
        stars += '<img src="images/star-half.png" alt="5 of 5 stars">'
      } else if (i < rating) {
        stars += '<img src="images/star-full.png" alt="5 of 5 stars">'
      } else {
        stars += '<img src="images/star-gray.png" alt="5 of 5 stars">'
      }
    }
    return stars;
  }

  const movieInformation = 
    `<div class="movie-container">
      <img class="movie-image" src="${movie.image}">
      <div class="mid-content">
        <div>
          <h2 class="movie-title">${movie.title}</h2>
          <span class="year-released">${movie.yearReleased}</span>
        </div>
        <p class="review">${movie.review}</p>
      </div>
      <div class="side-content">
        <div class="rating">
          ${getRating()}
        </div>
        <div>Date Watched: 
          <p class="date-watched info">${movie.dateWatched}</p>
        </div>
        <div>Genre: 
          <p class="genre info">${movie.genre}</p>
        </div>
      </div>
    </div>`
  return movieInformation;
}

function formatAllMoviesForPage() {
  let moviesFormatted = '';

  for (let i = 0; i < movies.length; i++) {
    moviesFormatted += createMovieNode(movies[i]);
  }
  return moviesFormatted;
}

const mainContainer = document.querySelector('.main-container');
mainContainer.innerHTML += formatAllMoviesForPage();