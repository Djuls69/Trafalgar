import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia
} from '@material-ui/core'
import CustomButton from './CustomButton'
import icon01 from '../img/services/doctor.svg'
import icon02 from '../img/services/bottle.svg'
import icon03 from '../img/services/consultation.svg'
import icon04 from '../img/services/details.svg'
import icon05 from '../img/services/emergency.svg'
import icon06 from '../img/services/tracking.svg'
import bg1 from '../img/bg_element.svg'
import bg2 from '../img/element2.svg'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${bg1})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left 10.8rem top 0'
  },
  desc: {
    margin: theme.spacing(3, 0, 6),
    textAlign: 'center'
  },
  wrapper: {
    marginBottom: '7rem',
    backgroundImage: `url(${bg2})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 0 top 30rem'
  },
  sectionTitle: {
    textAlign: 'center',
    '&::after': {
      display: 'block',
      content: '""',
      margin: '3rem auto 0',
      height: '2px',
      width: '5.6rem',
      backgroundColor: '#000',
      borderRadius: '2px'
    }
  },
  card: {
    maxWidth: '35rem',
    height: '35.4rem',
    padding: theme.spacing(5, 3, 2.6),
    borderRadius: '2rem',
    boxShadow: '1rem 4rem 5rem rgba(229,233,246,0.4)',
    backgroundColor: '#fff'
  },
  media: {
    height: '9.5rem',
    marginBottom: theme.spacing(3)
  },
  content: {
    padding: 0
  },
  btn: {
    textAlign: 'center'
  }
}))

const Services = () => {
  const classes = useStyles()

  return (
    <section id='services' className={classes.root}>
      <Container maxWidth='lg'>
        <Typography variant='h2' className={classes.sectionTitle}>
          Our services
        </Typography>
        <Typography className={classes.desc}>
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </Typography>
        <Grid container className={classes.wrapper} spacing={3}>
          <Grid item sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia className={classes.media}>
                <img src={icon01} alt='' />
              </CardMedia>
              <CardContent className={classes.content}>
                <Typography variant='h3' gutterBottom>
                  Search doctor
                </Typography>
                <Typography variant='body2'>
                  Choose your doctor from thousands of specialist, general, and
                  trusted hospitals
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia className={classes.media}>
                <img src={icon02} alt='' />
              </CardMedia>
              <CardContent className={classes.content}>
                <Typography variant='h3' gutterBottom>
                  Online pharmacy
                </Typography>
                <Typography variant='body2'>
                  Buy your medicines with our mobile application with a simple
                  delivery system
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia className={classes.media}>
                <img src={icon03} alt='' />
              </CardMedia>
              <CardContent className={classes.content}>
                <Typography variant='h3' gutterBottom>
                  Consultation
                </Typography>
                <Typography variant='body2'>
                  Free consultation with our trusted doctors and get the best
                  recomendations
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia className={classes.media}>
                <img src={icon04} alt='' />
              </CardMedia>
              <CardContent className={classes.content}>
                <Typography variant='h3' gutterBottom>
                  Details info
                </Typography>
                <Typography variant='body2'>
                  Free consultation with our trusted doctors and get the best
                  recomendations
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia className={classes.media}>
                <img src={icon05} alt='' />
              </CardMedia>
              <CardContent className={classes.content}>
                <Typography variant='h3' gutterBottom>
                  Emergency care
                </Typography>
                <Typography variant='body2'>
                  You can get 24/7 urgent care for yourself or your children and
                  your lovely family
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia className={classes.media}>
                <img src={icon06} alt='' />
              </CardMedia>
              <CardContent className={classes.content}>
                <Typography variant='h3' gutterBottom>
                  Tracking
                </Typography>
                <Typography variant='body2'>
                  Track and save your medical history and health data
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <div className={classes.btn}>
          <CustomButton text='Learn more' />
        </div>
      </Container>
    </section>
  )
}

export default Services
