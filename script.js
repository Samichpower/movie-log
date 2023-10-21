const movies = [
  {
    title: 'Interstellar',
    yearReleased: 2014,
    image: 'images/interstellar.png',
    rating: 5,
    dateWatched: '10.21.2023',
    genre: 'Sci-Fi',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus et optio eius eveniet suscipit. Eligendi, reiciendis quae! Ducimus eius iusto eligendi. Provident, quas voluptatem veritatis impedit accusamus doloremque ex aspernatur excepturi, aperiam, dolor totam blanditiis porro laborum eos modi! Repellat delectus, quae quam itaque asperiores illo odio magnam eligendi fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus et optio eius eveniet suscipit. Eligendi, reiciendis quae! Ducimus eius iusto eligendi. Provident, quas voluptatem veritatis impedit accusamus doloremque ex aspernatur excepturi, aperiam, dolor totam blanditiis porro laborum eos modi! Repellat delectus, quae quam itaque asperiores illo odio magnam eligendi fuga?',
  }
]

const mainContainer = document.querySelector('.main-container');

// function createMovieNode(movie) {
//   const movieContainer = document.createElement('div');
//   movieContainer.className = 'movie-container';

//   const movieImage = document.createElement('img');
//   movieImage.className = 'movie-image';
//   movieImage.src = movie.image;
//   movieContainer.appendChild(movieImage);

//   mainContainer.appendChild(movieContainer);
// }

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

const movie = createMovieNode(movies[0]);

mainContainer.innerHTML += movie;