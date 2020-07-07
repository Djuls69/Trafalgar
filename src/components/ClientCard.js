import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  client: {
    display: 'flex',
    alignItems: 'center'
  },
  clientImg: {
    border: '4px solid #fff',
    borderRadius: '50%',
    marginRight: theme.spacing(3)
  }
}))

const ClientCard = ({ name, company, avatar, text }) => {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item md={6}>
        <div className={classes.client}>
          <img src={avatar} alt={name} className={classes.clientImg} />
          <div>
            <Typography variant='h4'>{name}</Typography>
            <Typography>{company}</Typography>
          </div>
        </div>
      </Grid>
      <Grid item md={6}>
        <div>
          <Typography>{text}</Typography>
        </div>
      </Grid>
    </Grid>
  )
}

export default ClientCard
