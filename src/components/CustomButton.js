import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1.4rem 5rem',
    borderRadius: '5.5rem',
    backgroundColor: '#fff',
    color: '#458ff6',
    border: '1.4px solid #458ff6',
    transition: `all 0.2s ${theme.transitions.easing.easeOut}`,
    '&:hover': {
      color: '#fff',
      backgroundColor: '#458ff6'
    }
  },
  reversed: {
    padding: '1.4rem 5rem',
    borderRadius: '5.5rem',
    backgroundColor: '#458ff6',
    color: '#fff',
    border: '1.4px solid #458ff6',
    transition: `all 0.2s ${theme.transitions.easing.easeOut}`,
    '&:hover': {
      color: '#458ff6',
      backgroundColor: '#fff'
    }
  }
}))

const CustomButton = ({ children, text, reversed }) => {
  const classes = useStyles()
  return (
    <Button
      variant='outlined'
      className={reversed ? classes.reversed : classes.root}
    >
      {text ? text : children}
    </Button>
  )
}

export default CustomButton
