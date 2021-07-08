import React from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../api/request'
import Loading from '../component/Loading'
import MovieDetails from '../component/MovieDetails'
import placeholder from '../assets/image/placeholder.png'
import ScrollToTopOnMount from '../component/ScrollToTopOnMount'

function MoviePage() {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = React.useState({})
  const [loading, setLoading] = React.useState(true)
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  let posterPath = 'https://image.tmdb.org/t/p/w500'

  React.useEffect(() => {
    const callAPI = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((result) => setMovieDetails(result))
      setLoading(false)
    }
    callAPI()
  }, [url])

  return (
    <React.Fragment>
      <ScrollToTopOnMount />
      {loading ? (
        <Loading />
      ) : (
        <MovieDetails
          backdropPoster={
            !movieDetails.backdrop_path
              ? placeholder
              : posterPath + movieDetails.backdrop_path
          }
          poster={posterPath + movieDetails.poster_path}
          title={movieDetails.title}
          language={movieDetails.original_language}
          overview={movieDetails.overview}
          release={movieDetails.release_date}
          rating={movieDetails.vote_average}
          genres={movieDetails.genres}
        />
      )}
    </React.Fragment>
  )
}

export default MoviePage
