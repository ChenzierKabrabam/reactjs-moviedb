import React from 'react'
import { makeStyles, Paper, Typography, fade, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '220px',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      height: '400px',
      padding: theme.spacing(4),
    },
  },
  moviePoster: {
    width: '150px',
    height: '200px',
    [theme.breakpoints.up('sm')]: {
      width: '200px',
      height: '280px',
    },
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
    marginTop: theme.spacing(),
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
  movieYearAndRateFont: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '28px',
    },
  },
  movieYearAndRateValueFont: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
    },
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
  movieDescriptionTitle: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '34px',
    },
  },
  movieDescriptionBody: {
    marginTop: '18px',
    lineHeight: '28px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
      lineHeight: '34px',
    },
  },
  movieGenreWrapper: {
    width: '100%',
    padding: theme.spacing(),
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
  movieGenre: {
    fontSize: '16px',
    textTransform: 'capitalize',
    color: fade(theme.palette.common.white, 0.8),
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
    },
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
          backgroundSize: '100% 100%',
        }}
      >
        <Paper
          className={classes.moviePoster}
          style={{
            backgroundImage: `url(${props.poster})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
        />
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
            <Typography className={classes.movieYearAndRateFont} variant='h6'>
              Release :
            </Typography>
            <Typography
              className={classes.movieYearAndRateValueFont}
              variant='body1'
            >
              {props.release}
            </Typography>
          </div>
          <div className={classes.movieRate}>
            <Typography className={classes.movieYearAndRateFont} variant='h6'>
              Rating :
            </Typography>
            <Typography
              className={classes.movieYearAndRateValueFont}
              variant='body1'
            >
              {props.rating}
            </Typography>
          </div>
        </div>
        <div className={classes.movieGenreWrapper}>
          {props.genres.map((genre) => (
            <Button className={classes.movieGenre} key={genre.id}>
              {genre.name}
            </Button>
          ))}
        </div>
        <div className={classes.movieDescription}>
          <Typography className={classes.movieDescriptionTitle} variant='h4'>
            Overview
          </Typography>
          <Typography className={classes.movieDescriptionBody} variant='body1'>
            {props.overview}
          </Typography>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MovieDetails
