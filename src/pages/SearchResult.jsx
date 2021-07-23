import { fade, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { API_KEY } from '../api/request'
import Search from '../component/Search'
import Loading from '../component/Loading'
import placeholder from '../assets/image/placeholder.png'
import ResultNotFound from '../component/ResultNotFound'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  titleWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(),
    padding: theme.spacing(2),
    color: fade(theme.palette.common.white, 0.8),
    textTransform: 'capitalize',
  },
  MovieListWrapper: {
    width: '95%',
    margin: '10px auto',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: theme.spacing(3, 1, 3, 1),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.secondary.main,
  },
  movie: {
    width: '110px',
    margin: theme.spacing(0.9),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up('sm')]: {
      width: '150px',
    },
    [theme.breakpoints.up('md')]: {},
  },
  moviePoster: {
    width: '110px',
    height: '155px',
    borderBottomRightRadius: '0',
    borderBottomLeftRadius: '0',
    [theme.breakpoints.up('sm')]: {
      width: '150px',
      height: '200px',
    },
    [theme.breakpoints.up('md')]: {},
  },
  movieTitle: {
    padding: '8px',
    textAlign: 'center',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    color: fade(theme.palette.common.white, 0.9),
  },
  welcome: {
    width: '100%',
    textAlign: 'center',
    paddingTop: theme.spacing(5),
  },
  resultTitleWrapper: {
    width: '100%',
    padding: theme.spacing(),
  },
  title: {
    color: 'white',
    fontWeight: '900',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem',
    },
  },
}))

function SearchResult() {
  const classes = useStyles()
  const [query, setQuery] = React.useState('')
  const [movies, setMovies] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`
  let posterPath = 'https://image.tmdb.org/t/p/w500'

  const handleOnChange = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      setQuery(event.target.value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (query) {
      getMovies(searchURL + query)
    }
  }

  React.useEffect(() => {
    getMovies(searchURL)
  }, [searchURL])

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((result) => {
        setMovies(result.results)
        setIsLoading(false)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  console.log(movies)

  return (
    <React.Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={classes.root}>
          <div className={classes.titleWrapper}>
            <form onSubmit={handleSubmit}>
              <Search onHandleOnChange={handleOnChange} value={query} />
            </form>
          </div>
          {!movies ? (
            <div className={classes.welcome}>
              <Typography className={classes.title} variant='h5'>
                Tell us what you like to search!
              </Typography>
            </div>
          ) : movies.length === 0 ? (
            <ResultNotFound />
          ) : (
            <div className={classes.MovieListWrapper}>
              <div className={classes.resultTitleWrapper}>
                <Typography className={classes.title} variant='h5'>
                  Result of ' {query} '
                </Typography>
              </div>
              {movies.map((movie) => (
                <Link
                  to={
                    movie.media_type === 'movie'
                      ? `/movie/${movie.id}`
                      : movie.media_type === 'tv'
                      ? `/tv-show/${movie.id}`
                      : `/movie/${movie.id}`
                  }
                  key={movie.id}
                  style={{ textDecoration: 'none' }}
                >
                  <div className={classes.movie} key={movie.id}>
                    <Paper
                      className={classes.moviePoster}
                      style={{
                        backgroundImage: `url(${
                          movie.poster_path === null
                            ? placeholder
                            : posterPath + movie.poster_path
                        })`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100% 100%',
                      }}
                      title={movie.title}
                    />
                    <div className={classes.movieTitle}>
                      <Typography variant='body1' component='span'>
                        {movie.title}
                      </Typography>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  )
}

export default SearchResult
