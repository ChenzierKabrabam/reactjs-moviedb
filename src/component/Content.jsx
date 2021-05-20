import { makeStyles, fade, Typography, Paper, Grid } from '@material-ui/core'
import React from 'react'
import poster from '../assets/image/The_Avengers_(2012_film)_poster.jpg'

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

const image = [
  {
    image: poster,
    title: 'Moviejdjdjfjdfjhefrgrghdh',
  },
  {
    image: poster,
    title: 'Movie',
  },
  {
    image: poster,
    title: 'Movie',
  },
  {
    image: poster,
    title: 'Movie',
  },
  {
    image: poster,
    title: 'Movie',
  },
  {
    image: poster,
    title: 'Movie',
  },
  {
    image: poster,
    title: 'Movie',
  },
  {
    image: poster,
    title: 'Movie',
  },
  {
    image: poster,
    title: 'Movie',
  },
  {
    image: poster,
    title: 'Movie',
  },
]

function Content(props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography className={classes.heading} variant='h5'>
        {props.title}
      </Typography>
      <div className={classes.gridList}>
        {image.map((img) => (
          <Paper className={classes.gridContainer} key={img.title}>
            <Grid container warp='nowrap'>
              <Grid item>
                <img src={img.image} alt={img.title} width='160px' />
              </Grid>
              <Grid
                item
                xs
                style={{
                  padding: '1px, 8px',
                }}
              >
                <Typography noWrap style={{ fontWeight: '600' }}>
                  {img.title}
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
