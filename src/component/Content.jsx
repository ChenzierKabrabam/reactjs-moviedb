import React from 'react'
import { makeStyles, fade, Typography, Paper } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Loading from './Loading'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    margin: '16px auto',
    padding: theme.spacing(1, 1.6, 1, 1),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.secondary.main,
  },
  heading: {
    width: '100%',
    padding: theme.spacing(1),
    color: fade(theme.palette.common.white, 0.9),
    textTransform: 'capitalize',
    fontWeight: '900',
  },
  movieListContainer: {
    width: '100%',
    display: 'flex',
    overflowX: 'scroll',
  },
  movie: {
    width: '150px',
    height: '210px',
    display: 'inline-flex',
    flexDirection: 'column',
    margin: theme.spacing(0.5),
    cursor: 'pointer',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      width: '200px',
      height: '280px',
    },
  },
  movieTitle: {
    fontWeight: '600',
    color: fade(theme.palette.common.white, 0.9),
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },
  },
  movieTitleContainer: {
    width: '100%',
    bottom: '0',
    padding: '8px',
    textAlign: 'center',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    backgroundColor: fade(theme.palette.common.black, 0.6),
    position: 'absolute',
    borderBottomLeftRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius,
  },
}))

function Content(props) {
  const classes = useStyles()
  const [movies, setMovies] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  let posterPath = 'https://image.tmdb.org/t/p/w500'

  React.useEffect(() => {
    const callAPI = async () => {
      await fetch(props.baseURL)
        .then((response) => response.json())
        .then((result) => setMovies(result.results))
        .catch((error) => {
          console.log(error)
        })
      setLoading(false)
    }
    callAPI()
  }, [props.baseURL])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={classes.root}>
            <div className={classes.heading}>
              <Typography variant='h4'>{props.title}</Typography>
            </div>
            <div className={classes.movieListContainer}>
              {movies.map((movie) => (
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
                  <Paper
                    className={classes.movie}
                    elevation={3}
                    style={{
                      backgroundImage: `url(${posterPath + movie.poster_path})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '100% 100%',
                    }}
                  >
                    {/* <img
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
                    /> */}
                    <div
                      className={classes.movieTitleContainer}
                      // style={{
                      //   width: '100%',
                      //   bottom: '0',
                      //   padding: '8px',
                      //   textAlign: 'center',
                      //   overflow: 'hidden',
                      //   whiteSpace: 'nowrap',
                      //   textOverflow: 'ellipsis',
                      //   backgroundColor: 'green',
                      //   position: 'absolute',
                      // }}
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
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Content
