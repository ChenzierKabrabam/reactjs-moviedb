import {
  makeStyles,
  IconButton,
  Paper,
  fade,
  Typography,
} from '@material-ui/core'
import React from 'react'
import * as FcIcons from 'react-icons/fc'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'relative',
  },
  nextAndPrevButton: {
    position: 'absolute',
    top: '40%',
    color: fade(theme.palette.common.white, 1),
    zIndex: '10',
  },
  movieContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: '250px',
    padding: theme.spacing(2),
    // opacity: '0',
    // transitionDuration: '6s ease',
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      backgroundColor: fade(theme.palette.common.black, 0.5),
    },
  },
  moviePoster: {
    width: '110px',
    height: '147px',
    position: 'relative',
  },
  movieDetailsContainer: {
    width: '70%',
    height: '50px',
    position: 'relative',
    // backgroundColor: 'green',
    padding: theme.spacing(),
    textAlign: 'center',
  },
  movieTitle: {
    fontSize: '28px',
    color: fade(theme.palette.common.white, 0.9),
  },
  movieAnimation: {
    display: 'flex',
    opacity: '0',
    transitionDuration: '1s ease',
    backgroundColor: 'grey',
  },
  '@keyframes fadeIn': {
    from: {
      opacity: '0',
    },
    to: {
      opacity: '1',
    },
  },
  movieActiveAnimation: {
    opacity: '1',
    transitionDuration: '1s',
    animationName: '$fadeIn',
    animationDuration: '2.5s',
  },
}))

function Billboard(props) {
  const classes = useStyles()
  const [movies, setMovies] = React.useState([])
  let posterPath = 'https://image.tmdb.org/t/p/w500'
  const [currentMovie, setCurrentMovie] = React.useState(0)

  React.useEffect(() => {
    const callAPI = async () => {
      await fetch(props.baseURL)
        .then((response) => response.json())
        .then((result) => setMovies(result.results))
        .catch((e) => {
          console.log(e)
        })
    }
    callAPI()
  }, [props.baseURL])
  console.log(movies)

  const prevMovie = () => {
    setCurrentMovie(currentMovie === 0 ? movies.length - 1 : currentMovie - 1)
  }
  const nextMovie = () => {
    setCurrentMovie(currentMovie === movies.length - 1 ? 0 : currentMovie + 1)
  }

  if (!Array.isArray(movies) || movies.length <= 0) {
    return null
  }

  return (
    <div className={classes.root}>
      <IconButton
        className={classes.nextAndPrevButton}
        style={{ left: '0' }}
        onClick={prevMovie}
      >
        <FcIcons.FcPrevious />
      </IconButton>
      <IconButton
        className={classes.nextAndPrevButton}
        style={{ right: '0' }}
        onClick={nextMovie}
      >
        <FcIcons.FcNext />
      </IconButton>
      {movies.map((movie, index) => {
        return (
          <React.Fragment
            key={movie.id}
            // className={
            //   index === currentMovie ? classes.movieActive : classes.movie
            // }
          >
            {index === currentMovie && (
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
                <div
                  className={
                    index === currentMovie
                      ? classes.movieActiveAnimation
                      : classes.movieAnimation
                  }
                >
                  <div
                    className={classes.movieContainer}
                    style={{
                      backgroundImage: `url(${
                        posterPath + movie.backdrop_path
                      })`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                  >
                    <Paper
                      className={classes.moviePoster}
                      style={{
                        backgroundImage: `url(${
                          posterPath + movie.poster_path
                        })`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100% 146px',
                      }}
                    />
                    <div className={classes.movieDetailsContainer}>
                      <div className={classes.movieTitle}>
                        <Typography variant='h6'>
                          {movie.title || movie.name}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Billboard
