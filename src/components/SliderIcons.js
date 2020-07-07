import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Icon } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  iconsWrapper: {
    display: 'flex',
    margin: '0 auto',
    width: '33.6rem',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconsArrows: {
    fontSize: '3rem',
    cursor: 'pointer',
    opacity: 0.4,
    color: '#458ff6'
  },
  iconsCircle: {
    fontSize: '1rem',
    color: '#458ff6',
    opacity: 0.3,
    margin: theme.spacing(1)
  }
}))

const SliderIcons = () => {
  const classes = useStyles()
  return (
    <div className={classes.iconsWrapper}>
      <Icon className={`fas fa-arrow-left ${classes.iconsArrows}`} />
      <div>
        <Icon
          style={{ opacity: 1 }}
          className={`fas fa-circle ${classes.iconsCircle}`}
        />
        <Icon className={`fas fa-circle ${classes.iconsCircle}`} />
        <Icon className={`fas fa-circle ${classes.iconsCircle}`} />
        <Icon className={`fas fa-circle ${classes.iconsCircle}`} />
      </div>
      <Icon
        style={{ opacity: 1 }}
        className={`fas fa-arrow-right ${classes.iconsArrows}`}
      />
    </div>
  )
}

export default SliderIcons
