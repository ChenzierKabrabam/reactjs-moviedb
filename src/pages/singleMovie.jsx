import { makeStyles, Paper, Typography, fade } from '@material-ui/core'
import React from 'react'
import Header from '../component/Header'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '220px',
    padding: theme.spacing(),
    backgroundColor: 'green',
  },
  moviePoster: {
    width: '150px',
    height: '200px',
    backgroundColor: 'grey',
  },
  movieDetails: {
    backgroundColor: theme.palette.secondary.dark,
    color: 'white',
  },
  movieTitle: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  movieLanguage: {
    // marginleft: '10px',
    color: fade(theme.palette.common.white, 0.6),
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
  return (
    <React.Fragment>
      <Header />
      <div className={classes.root}>
        <Paper className={classes.moviePoster} />
      </div>
      <div className={classes.movieDetails}>
        <div className={classes.movieTitle}>
          <Typography variant='h3' style={{ marginRight: '3px' }}>
            title
          </Typography>
          <Typography className={classes.movieLanguage} variant='h5'>
            (En)
          </Typography>
        </div>
        <div className={classes.movieRateAndYearWrapper}>
          <div className={classes.movieYear}>
            <Typography variant='h5'>Release :</Typography>
            <Typography variant='body1'>2020</Typography>
          </div>
          <div className={classes.movieRate}>
            <Typography variant='h5'>Rating :</Typography>
            <Typography variant='body1'>7.8</Typography>
          </div>
        </div>
        <div className={classes.movieDescription}>
          <Typography variant='h4'>Overview</Typography>
          <Typography className={classes.movieDescriptionBody} variant='body1'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            voluptas id iusto eius praesentium mollitia molestias aperiam nam
            commodi cumque!
          </Typography>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SingleMovie
