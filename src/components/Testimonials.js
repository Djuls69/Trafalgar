import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Paper, Typography } from '@material-ui/core'
import SliderIcons from './SliderIcons'
import ClientCard from './ClientCard'
import clientsData from '../data/clientsData'
import element1 from '../img/element.svg'
import element3 from '../img/element3.svg'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '24px',
    background: 'linear-gradient(to bottom left, #67c3f3, #5a98f2)',
    color: '#fff',
    padding: '7rem 10rem',
    marginBottom: theme.spacing(4)
  },
  element1: {
    position: 'absolute',
    zIndex: -10,
    bottom: 0,
    left: '-6rem'
  },
  element3: {
    position: 'absolute',
    zIndex: 10,
    top: '-2rem',
    right: '-5rem'
  },
  underline: {
    '&::after': {
      display: 'block',
      content: '""',
      margin: '3rem auto 8rem',
      height: '2px',
      width: '5.6rem',
      backgroundColor: '#fff',
      borderRadius: '2px'
    }
  }
}))

const Testimonials = () => {
  const classes = useStyles()

  return (
    <section id='testimonials'>
      <Container maxWidth='lg'>
        <Paper elevation={3} className={classes.root}>
          <img src={element1} className={classes.element1} alt='' />
          <img src={element3} className={classes.element3} alt='' />

          <Typography variant='h2' className={classes.underline}>
            What our customer are saying
          </Typography>
          <ClientCard
            name={clientsData[0].name}
            company={clientsData[0].company}
            avatar={clientsData[0].avatar}
            text={clientsData[0].text}
          />
        </Paper>
        <SliderIcons />
      </Container>
    </section>
  )
}

export default Testimonials
