import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core'
import CustomButton from './CustomButton'
import hero from '../img/hero.svg'
import element from '../img/element.svg'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `url(${element})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left 10.8rem top 15rem',
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100vh + 20rem)',
      backgroundImage: 'none'
    }
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  headerText: {
    color: '#7d7987',
    margin: '3rem 0'
  }
}))

const Header = () => {
  const classes = useStyles()
  return (
    <header id='header' className={classes.root}>
      <Container maxWidth='lg'>
        <Grid className={classes.wrapper} container spacing={6}>
          <Grid item sm={12} md={5}>
            <Typography variant='h1'>Virtual healthcare for you</Typography>
            <Typography className={classes.headerText}>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </Typography>
            <CustomButton text='Consult today' reversed />
          </Grid>
          <Grid className={classes.headerImage} item sm={12} md={7}>
            <img src={hero} alt='' />
          </Grid>
        </Grid>
      </Container>
    </header>
  )
}

export default Header
