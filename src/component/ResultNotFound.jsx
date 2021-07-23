import { fade, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import notFound from '../assets/image/notFound.png'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    margin: '10px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: fade(theme.palette.common.white, 0.96),
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(),
    [theme.breakpoints.up('md')]: {
      width: '70%',
    },
  },
  img: {
    width: '170px',
    height: '186px',
    backgroundColor: 'transparent',
  },
  titleWrapper: {
    width: '100%',
    textAlign: 'center',
    padding: theme.spacing(4),
  },
  title: {
    color: fade(theme.palette.common.black, 0.8),
    fontWeight: '500',
  },
}))

function ResultNotFound() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper
        className={classes.img}
        style={{
          backgroundImage: `url(${notFound})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }}
        elevation={0}
      />
      <div className={classes.titleWrapper}>
        <Typography className={classes.title} variant='h5'>
          Sorry we coundn't find any results
        </Typography>
      </div>
    </div>
  )
}

export default ResultNotFound
