import { makeStyles, Paper, Typography, fade } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router-dom'
// import Header from '../component/Header'
import { API_KEY } from '../api/request'
import Loading from '../component/Loading'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '220px',
    padding: theme.spacing(),
  },
  moviePoster: {
    width: '150px',
    height: '200px',
  },
  movieDetails: {
    backgroundColor: theme.palette.secondary.dark,
    color: 'white',
  },
  movieTitle: {
    display: 'inline-flex',
    justifyContent: 'center',
    width: '100%',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  movieLanguage: {
    fontSize: '24px',
    color: fade(theme.palette.common.white, 0.7),
  },
  movieRateAndYearWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.palette.primary.main,
  },
  movieYear: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%',
    padding: theme.spacing(),
    textAlign: 'center',
    borderRight: '0.4px solid grey',
  },
  movieRate: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%',
    padding: theme.spacing(),
    textAlign: 'center',
    borderLeft: '0.4px solid grey',
  },
  movieDescription: {
    width: '100%',
    padding: theme.spacing(4, 2, 4, 2),
  },
  movieDescriptionBody: {
    marginTop: '18px',
    lineHeight: '28px',
  },
}))

function SingleMovie() {
  const classes = useStyles()
  const { id } = useParams()
  console.log(id)
  const [movieDetails, setMovieDetails] = React.useState({})
  const [loading, setLoading] = React.useState(true)
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  let posterPath = 'https://image.tmdb.org/t/p/w500'
  console.log(url)

  React.useEffect(() => {
    const callAPI = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((result) => setMovieDetails(result))
      setLoading(false)
    }
    callAPI()
  }, [url])
  console.log('detail', movieDetails)
  console.log(movieDetails.poster_path)

  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div
            className={classes.root}
            style={{
              backgroundImage: `url(${
                posterPath + movieDetails.backdrop_path
              })`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <Paper className={classes.moviePoster}>
              <img
                src={posterPath + movieDetails.poster_path}
                alt={movieDetails.title}
                width='150px'
                height='200px'
              />
            </Paper>
          </div>
          <div className={classes.movieDetails}>
            <div className={classes.movieTitle}>
              <Typography variant='h4' style={{ marginRight: '3px' }}>
                {movieDetails.title}
                <Typography className={classes.movieLanguage} component='span'>
                  ({movieDetails.original_language})
                </Typography>
              </Typography>
            </div>
            <div className={classes.movieRateAndYearWrapper}>
              <div className={classes.movieYear}>
                <Typography variant='h6'>Release :</Typography>
                <Typography variant='body1'>
                  {movieDetails.release_date}
                </Typography>
              </div>
              <div className={classes.movieRate}>
                <Typography variant='h6'>Rating :</Typography>
                <Typography variant='body1'>
                  {movieDetails.vote_average}
                </Typography>
              </div>
            </div>
            <div className={classes.movieDescription}>
              <Typography variant='h4'>Overview</Typography>
              <Typography
                className={classes.movieDescriptionBody}
                variant='body1'
              >
                {movieDetails.overview}
              </Typography>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  )
}

export default SingleMovie
