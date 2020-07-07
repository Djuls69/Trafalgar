import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Link,
  Icon
} from '@material-ui/core'
import CustomButton from './CustomButton'
import article01 from '../img/articles/article01.svg'
import article02 from '../img/articles/article02.svg'
import article03 from '../img/articles/article03.svg'
import element from '../img/element2.svg'
import bg from '../img/bg_element2.svg'

const useStyles = makeStyles(theme => ({
  root: {
    background: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top -3rem right 15rem',
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'top 0 right 0'
    }
  },
  wrapper: {
    marginBottom: '7rem',
    marginTop: '5rem',
    position: 'relative'
  },
  element: {
    position: 'absolute',
    top: '-3rem',
    left: '-3rem',
    zIndex: -10
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
    overflow: 'hidden',
    maxWidth: '35rem',
    height: '51.2rem',
    borderRadius: '2rem',
    boxShadow: '1rem 4rem 5rem rgba(229,233,246,0.4)',
    backgroundColor: '#fff'
  },
  media: {
    height: '24rem',
    width: '35rem',
    marginBottom: theme.spacing(3)
  },
  content: {
    padding: theme.spacing(0, 5, 0, 3)
  },
  contentTitle: {
    marginBottom: '1.5rem'
  },
  contentLink: {
    fontSize: '1.7rem',
    color: '#4089ed',
    marginTop: '2.5rem',
    '& > a': {
      fontWeight: '600',
      '& span': {
        marginLeft: theme.spacing(1.5),
        transform: 'translateY(2px)'
      }
    }
  },
  btn: {
    textAlign: 'center'
  }
}))

const Articles = () => {
  const classes = useStyles()
  return (
    <section id='articles' className={classes.root}>
      <Container maxWidth='lg'>
        <Typography variant='h2' className={classes.sectionTitle}>
          Check our latest article
        </Typography>
        <Grid container className={classes.wrapper} spacing={3}>
          <img src={element} className={classes.element} alt='' />
          <Grid item sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia className={classes.media}>
                <img src={article01} alt='' />
              </CardMedia>
              <CardContent className={classes.content}>
                <Typography variant='h5' className={classes.contentTitle}>
                  Disease detection, check up in the laboratory
                </Typography>
                <Typography variant='body2'>
                  Choose your doctor from thousands of specialist, general, and
                  trusted hospitals
                </Typography>
                <Typography className={classes.contentLink}>
                  <Link
                    href='#!'
                    onClick={e => e.preventDefault()}
                    underline='none'
                  >
                    Learn more <Icon className='fas fa-long-arrow-alt-right' />
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia className={classes.media}>
                <img src={article02} alt='' />
              </CardMedia>
              <CardContent className={classes.content}>
                <Typography variant='h5' className={classes.contentTitle}>
                  Herbal medicines that are safe for consumption
                </Typography>
                <Typography variant='body2'>
                  Herbal medicine is very widely used at this time because of
                  its very good for your health...
                </Typography>
                <Typography className={classes.contentLink}>
                  <Link
                    href='#!'
                    onClick={e => e.preventDefault()}
                    underline='none'
                  >
                    Learn more <Icon className='fas fa-long-arrow-alt-right' />
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia className={classes.media}>
                <img src={article03} alt='' />
              </CardMedia>
              <CardContent className={classes.content}>
                <Typography variant='h5' className={classes.contentTitle}>
                  Natural care for healthy facial skin
                </Typography>
                <Typography variant='body2'>
                  A healthy lifestyle should start from now and also for your
                  skin health. There are some...
                </Typography>
                <Typography className={classes.contentLink}>
                  <Link
                    href='#!'
                    onClick={e => e.preventDefault()}
                    underline='none'
                  >
                    Learn more <Icon className='fas fa-long-arrow-alt-right' />
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <div className={classes.btn}>
          <CustomButton text='View all' />
        </div>
      </Container>
    </section>
  )
}

export default Articles
