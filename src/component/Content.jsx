import { makeStyles, fade, Typography, Paper, Grid } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '98%',
    padding: theme.spacing(2),
    margin: '16px auto',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.light,
  },
  heading: {
    color: fade(theme.palette.common.white, 0.7),
    textTransform: 'capitalize',
    fontWeight: '450',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '8px auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridContainer: {
    width: '160px',
    margin: theme.spacing(),
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
      <Typography className={classes.heading} variant='h5'>
        {props.title}
      </Typography>
      <div className={classes.gridList}>
        {movies.map((movie) => (
          <Paper className={classes.gridContainer} key={movie.id}>
            <Grid container warp='nowrap'>
              <Grid item>
                <img
                  src={posterPath + movie.poster_path}
                  alt={
                    movie.title ||
                    movie.original_title ||
                    movie.original_name ||
                    movie.name
                  }
                  width='160px'
                />
              </Grid>
              <Grid
                item
                xs
                style={{
                  padding: '1px, 8px',
                }}
              >
                <Typography
                  noWrap
                  style={{ fontWeight: '600', textAlign: 'center' }}
                >
                  {movie.title ||
                    movie.original_title ||
                    movie.original_name ||
                    movie.name}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </div>
    </div>
  )
}

export default Content
