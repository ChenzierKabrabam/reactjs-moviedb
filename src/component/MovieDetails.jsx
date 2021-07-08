import React from 'react'
import { makeStyles, Paper, Typography, fade } from '@material-ui/core'

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

function MovieDetails(props) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div
        className={classes.root}
        style={{
          backgroundImage: `url(${props.backdropPoster})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Paper className={classes.moviePoster}>
          <img
            src={props.poster}
            alt={props.title}
            width='150px'
            height='200px'
          />
        </Paper>
      </div>
      <div className={classes.movieDetails}>
        <div className={classes.movieTitle}>
          <Typography variant='h4' style={{ marginRight: '3px' }}>
            {props.title}
            <Typography className={classes.movieLanguage} component='span'>
              ({props.language})
            </Typography>
          </Typography>
        </div>
        <div className={classes.movieRateAndYearWrapper}>
          <div className={classes.movieYear}>
            <Typography variant='h6'>Release :</Typography>
            <Typography variant='body1'>{props.release}</Typography>
          </div>
          <div className={classes.movieRate}>
            <Typography variant='h6'>Rating :</Typography>
            <Typography variant='body1'>{props.rating}</Typography>
          </div>
        </div>
        <div className={classes.movieDescription}>
          <Typography variant='h4'>Overview</Typography>
          <Typography className={classes.movieDescriptionBody} variant='body1'>
            {props.overview}
          </Typography>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MovieDetails
