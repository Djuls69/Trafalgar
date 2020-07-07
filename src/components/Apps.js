import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography, Icon } from '@material-ui/core'
import CustomButton from './CustomButton'
import illustration from '../img/illustration02.svg'

const useStyles = makeStyles(theme => ({
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
  icon: {
    marginLeft: theme.spacing(1)
  }
}))

const Apps = () => {
  const classes = useStyles()
  return (
    <section id='apps'>
      <Container maxWidth='lg'>
        <Grid className={classes.wrapper} container spacing={4}>
          <Grid item sm={12} md={5}>
            <div>
              <Typography
                variant='h2'
                className={`heading ${classes.headingTitle}`}
              >
                Download our mobile apps
              </Typography>
              <Typography className={classes.headingText}>
                Our dedicated patient engagement app and web portal allow you to
                access information instantaneously (no tedeous form, long calls,
                or administrative hassle) and securely
              </Typography>
              <CustomButton>
                Download
                <Icon
                  className={`fas fa-long-arrow-alt-down ${classes.icon}`}
                />
              </CustomButton>
            </div>
          </Grid>
          <Grid className={classes.sectionImage} item sm={12} md={7}>
            <img src={illustration} alt='' />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Apps
