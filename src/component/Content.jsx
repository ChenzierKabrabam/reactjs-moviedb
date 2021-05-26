import { makeStyles, fade, Typography, Paper } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    margin: '16px auto',
    padding: theme.spacing(1, 1.6, 1, 1),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.light,
  },
  heading: {
    width: '100%',
    padding: theme.spacing(1),
    color: fade(theme.palette.common.white, 0.8),
    textTransform: 'capitalize',
    fontWeight: '700',
  },
  movieListContainer: {
    width: '100%',
    display: 'flex',
    overflowX: 'scroll',
    cursor: 'pointer',
  },
  movie: {
    width: '150px',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'space-',
    margin: theme.spacing(0.5),
  },
  movieTitle: {
    fontWeight: '600',
    color: theme.palette.common.black,
  },
}))

function Content(props) {
  const classes = useStyles()
  const [movies, setMovies] = React.useState([])
  let posterPath = 'https://image.tmdb.org/t/p/w500/'

  useState(() => {
    const callAPI = async () => {
      await fetch(props.baseURL)
        .then((response) => response.json())
        .then((result) => setMovies(result.results))
        .catch((error) => {
          console.log(error)
        })
    }
    callAPI()
  }, [props.baseURL])

  console.log('list', movies)

  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <Typography variant='h5'>{props.title}</Typography>
      </div>
      <div className={classes.movieListContainer}>
        {movies.map((movie) => (
          <Paper className={classes.movie} elevation='3'>
            <img
              src={posterPath + movie.poster_path}
              alt={
                movie.title ||
                movie.original_title ||
                movie.name ||
                movie.original_name
              }
              title={
                movie.title ||
                movie.original_title ||
                movie.name ||
                movie.original_name
              }
              width='150px'
              height='200px'
            />
            <div
              style={{
                padding: '8px',
                textAlign: 'center',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            >
              <Typography
                className={classes.movieTitle}
                variant='body1'
                component='span'
              >
                {movie.title ||
                  movie.original_title ||
                  movie.name ||
                  movie.original_name}
              </Typography>
            </div>
          </Paper>
        ))}
      </div>
    </div>
  )
}

export default Content
