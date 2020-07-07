import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core'
import CustomButton from './CustomButton'
import illustration from '../img/illustration01.svg'
import element from '../img/element.svg'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${element})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 5rem bottom 5rem'
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  headingText: {
    color: '#7d7987',
    margin: '3rem 0'
  },
  headingTitle: {
    width: '75%',
    '&::after': {
      display: 'block',
      content: '""',
      marginTop: '3rem',
      height: '2px',
      width: '5.6rem',
      backgroundColor: '#000',
      borderRadius: '2px'
    }
  },
  sectionImage: {
    //
  }
}))

const Providers = () => {
  const classes = useStyles()
  return (
    <section id='providers' className={classes.root}>
      <Container maxWidth='lg'>
        <Grid className={classes.wrapper} container spacing={4}>
          <Grid className={classes.sectionImage} item sm={12} md={7}>
            <img src={illustration} alt='' />
          </Grid>
          <Grid item sm={12} md={5}>
            <div>
              <Typography
                variant='h2'
                className={`heading ${classes.headingTitle}`}
              >
                Leading healthcare providers
              </Typography>
              <Typography className={classes.headingText}>
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone. To us, it’s not
                just work. We take pride in the solutions we deliver
              </Typography>
              <CustomButton text='Learn more' />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Providers
