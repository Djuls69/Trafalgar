import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography, Link } from '@material-ui/core'
import logoWhite from '../img/logo_white.svg'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '12rem 0',
    background: 'linear-gradient(to bottom, #67c3f3, #5a98f2)'
  },
  body: {
    fontSize: '1.8rem',
    color: '#fff',
    fontWeight: 300,
    marginTop: '1.5rem',
    '& span': {
      display: 'block',
      fontSize: '1.6rem',
      marginTop: '3.5rem',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '3.5rem'
      }
    }
  },
  listStyle: {
    fontFamily: theme.typography.body1.fontFamily,
    fontSize: '1.8rem',
    color: '#fff',
    fontWeight: 300,
    '& li': {
      marginBottom: theme.spacing(2),
      cursor: 'pointer'
    },
    '& li:first-child': {
      marginBottom: theme.spacing(3.5),
      fontWeight: 700,
      fontSize: '2rem',
      cursor: 'text'
    }
  },
  copyright: {
    color: '#000',
    margin: '3rem auto 0',
    '& a': {
      color: '#fff'
    }
  }
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <footer id='footer' className={classes.root}>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={12} md={5}>
            <img src={logoWhite} alt='' />
            <div className={classes.body}>
              <Typography>
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
                <span>&copy;Trafalgar PTY LTD 2020. All rights reserved</span>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container>
              <Grid item xs={4}>
                <ul className={classes.listStyle}>
                  <li>Company</li>
                  <li>About</li>
                  <li>Testimonials</li>
                  <li>Find a doctor</li>
                  <li>Apps</li>
                </ul>
              </Grid>
              <Grid item xs={4}>
                <ul className={classes.listStyle}>
                  <li>Region</li>
                  <li>Indonesia</li>
                  <li>Singapore</li>
                  <li>Hongkong</li>
                  <li>Canada</li>
                </ul>
              </Grid>
              <Grid item xs={4}>
                <ul className={classes.listStyle}>
                  <li>Help</li>
                  <li>Help center</li>
                  <li>Contact support</li>
                  <li>Instructions</li>
                  <li>How it works</li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Typography className={classes.copyright}>
            Coded by{' '}
            <Link underline='none' href='http://www.juliendelusseau.fr'>
              Julien Delusseau
            </Link>{' '}
            &amp; designed by{' '}
            <Link underline='none' href='https://dribbble.com/musicalryo'>
              Aryo Pamungkas
            </Link>
          </Typography>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
