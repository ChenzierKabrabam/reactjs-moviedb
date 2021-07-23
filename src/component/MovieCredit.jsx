import { makeStyles, Typography, Paper, fade } from '@material-ui/core'
import React from 'react'
import avatar from '../assets/image/avatar.png'
import MovieDirector from './MovieDirector'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '2px auto',
    display: 'flex',
    overflowX: 'scroll',
    // backgroundColor: theme.palette.primary.main,
    '&::-webkit-scrollbar': {
      height: '8px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: theme.palette.secondary.light,
      borderRadius: theme.shape.borderRadius,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.primary.dark,
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  cast: {
    margin: theme.spacing(0.5),
    backgroundColor: fade(theme.palette.common.black, 0.6),
    borderRadius: theme.shape.borderRadius,
  },
  movieCast: {
    width: '120px',
    height: '170px',
    display: 'inline-flex',
    flexDirection: 'column',
    cursor: 'pointer',
    position: 'relative',
    backgroundSize: '100% 100%',
    [theme.breakpoints.up('sm')]: {
      width: '170px',
      height: '220px',
    },
    [theme.breakpoints.up('md')]: {
      width: '200px',
      height: '250px',
    },
  },
  nameWrapper: {
    padding: theme.spacing(),
    margin: '0',
  },
  name: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '24px',
    },
  },
  character: {
    color: fade(theme.palette.common.white, 0.5),
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '20px',
    },
  },
  title: {
    width: '100%',
    padding: theme.spacing(1),
    color: fade(theme.palette.common.white, 0.9),
    textTransform: 'capitalize',
    // backgroundColor: theme.palette.primary.main,
  },
}))

function MovieCredit({ id, credits }) {
  const classes = useStyles()
  const [movieCredits, setMovieCredits] = React.useState([])
  // const [movieDirector, setMovieDirector] = React.useState([])

  const creditsURL = credits
  const posterPath = 'https://image.tmdb.org/t/p/original'

  React.useEffect(() => {
    const castUrl = async () => {
      await fetch(creditsURL)
        .then((res) => res.json())
        .then((result) => {
          setMovieCredits(result.cast)
          // setMovieDirector(result.crew)
        })
        .catch((e) => {
          console.log(e)
        })
    }

    castUrl()
  }, [creditsURL])

  // console.log('moviedir', movieDirector)
  return (
    <React.Fragment>
      <MovieDirector
        id={id}
        credit={credits}
        movieCast={classes.movieCast}
        movieName={classes.name}
        character={classes.character}
      />
      <div className={classes.title}>
        <Typography variant='h4'>Cast</Typography>
      </div>
      <div className={classes.root}>
        {movieCredits.map((cast) => (
          <div className={classes.cast} key={cast.credit_id}>
            <Paper
              className={classes.movieCast}
              style={{
                backgroundImage: `url(${
                  cast.profile_path === null
                    ? avatar
                    : posterPath + cast.profile_path
                })`,
                backgroundRepeat: 'no-repeat',
              }}
              elevation={0}
            />
            <div className={classes.nameWrapper}>
              <Typography className={classes.name}>{cast.name}</Typography>
              <Typography className={classes.character} variant='body2'>
                {cast.character}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default MovieCredit
