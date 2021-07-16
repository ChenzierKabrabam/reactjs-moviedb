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
  const movieCredits = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  let posterPath = 'https://image.tmdb.org/t/p/w500'
  let backdropPath = 'https://image.tmdb.org/t/p/original'

  React.useEffect(() => {
    const callAPI = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setMovieDetails(result)
        })
        .catch((e) => {
          console.log(e)
        })
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
              : backdropPath + movieDetails.backdrop_path
          }
          credits={movieCredits}
          poster={posterPath + movieDetails.poster_path}
          title={movieDetails.title}
          language={movieDetails.original_language}
          overview={movieDetails.overview}
          release={movieDetails.release_date}
          rating={movieDetails.vote_average}
          genres={movieDetails.genres}
          id={movieDetails.id}
        />
      )}
    </React.Fragment>
  )
}

export default MoviePage
