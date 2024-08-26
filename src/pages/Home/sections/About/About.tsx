import { Grid, styled, Typography } from '@mui/material';
import { useState } from 'react'
import theme from '../../../../theme';



const Home = () => {

    const StyledAbout = styled("div")(() => ({
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        zIndex: 1,
        [theme.breakpoints.up('xs')]: { // <= mobile

        },
        [theme.breakpoints.up('md')]: { // >= mobile

        },

    }));

  return (
    <>
      <StyledAbout>
        <Typography>ABOUT ME</Typography>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                
            </Grid>
            <Grid item xs={6}>
                
            </Grid>
            <Grid item xs={6}>
                
            </Grid>
            <Grid item xs={6}>
                
            </Grid>
        </Grid>
      </StyledAbout>
    </>
  )
}

export default Home
