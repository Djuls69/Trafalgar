import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, AppBar, Toolbar, Button } from '@material-ui/core'
import logo01 from '../img/logo.svg'

const useStyles = makeStyles(theme => {
  return {
    navbar: {
      backgroundColor: '#fff',
      boxShadow: 'none',
      margin: '0',
      height: '8rem'
    },
    shadow: {
      boxShadow: theme.shadows[6]
    },
    toolbar: {
      height: '100%'
    },
    flexDisplay: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center'
      }
    },
    navbarLogo: {
      display: 'inline-block',
      height: '100%',
      [theme.breakpoints.down('sm')]: {
        width: '15%'
      }
    },
    navbarRight: {
      display: 'flex',
      alignItems: 'center'
    },
    navbarLink: {
      fontSize: '1.8rem',
      fontFamily: 'Muli, sans-serif',
      fontWeight: 400,
      textTransform: 'initial',
      color: '#1f1534',
      marginLeft: theme.spacing(3),
      '&:hover': {
        color: '#5A99F2',
        background: 'none'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.4rem'
      }
    }
  }
})

const Navbar = () => {
  const classes = useStyles()
  const navbar = useRef()
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      navbar.current.classList.add(classes.shadow)
    } else {
      navbar.current.classList.remove(classes.shadow)
    }
  })

  const scrolling = section => {
    const scrollingTo = document.querySelector(section)
    window.scrollTo({ top: scrollingTo.offsetTop - 100, behavior: 'smooth' })
  }

  return (
    <AppBar ref={navbar} position='fixed' className={classes.navbar}>
      <Toolbar className={classes.toolbar}>
        <Container maxWidth='lg' className={classes.flexDisplay}>
          <img className={classes.navbarLogo} src={logo01} alt='' />
          <div className={classes.navbarRight}>
            <Button
              className={classes.navbarLink}
              onClick={() => scrolling('header')}
            >
              Home
            </Button>
            <Button
              className={classes.navbarLink}
              onClick={() => scrolling('#services')}
            >
              Find a doctor
            </Button>
            <Button
              className={classes.navbarLink}
              onClick={() => scrolling('#apps')}
            >
              Apps
            </Button>
            <Button
              className={classes.navbarLink}
              onClick={() => scrolling('#testimonials')}
            >
              Testimonials
            </Button>
            <Button
              className={classes.navbarLink}
              onClick={() => scrolling('footer')}
            >
              About us
            </Button>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
