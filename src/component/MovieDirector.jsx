import { makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import avatar from '../assets/image/avatar.png'

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(),
  },
}))

function MovieDirector(props) {
  const classes = useStyles()
  const [director, setDirector] = React.useState([])
  const directorURL = props.credit
  let posterPath = 'https://image.tmdb.org/t/p/original'

  React.useEffect(() => {
    const callAPI = async () => {
      await fetch(directorURL)
        .then((res) => res.json())
        .then((result) => setDirector(result.crew))
    }
    callAPI()
  }, [directorURL])

  const result = director.filter((director) => director.job === 'Director')
  //   console.log(result)

  return (
    <div className={classes.root}>
      {result.map((crew) => {
        return (
          <React.Fragment key={crew.id}>
            <Paper
              className={props.movieCast}
              style={{
                backgroundImage: `url(${
                  crew.profile_path === null
                    ? avatar
                    : posterPath + crew.profile_path
                })`,
              }}
            />
            <div className={props.nameWrapper}>
              <Typography className={props.movieName}>{crew.name}</Typography>
              <Typography className={props.character}>Director</Typography>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default MovieDirector
