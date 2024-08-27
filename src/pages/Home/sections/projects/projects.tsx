import { Grid, styled, Typography } from '@mui/material';
import { useState } from 'react'
import theme from '../../../../theme';
import { Height } from '@mui/icons-material';




const Projects = () => {


    const StyledProjects = styled("div")(() => ({ // style section Hero
        position: 'relative',
        height: '130vh',
        display: 'flex',
        flexDirection: "column",
        alignItems: 'top',
        justifyContent: "center",
        backgroundColor: "#0b1d28",
        [theme.breakpoints.up('xs')]: { // <= mobile
        },
        [theme.breakpoints.up('md')]: { // >= mobile
        },

    }));

    const StyledCard = styled("div")(() => ({
        width: "40rem",
        height: "30em",
        border: "1px solid #dadada",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }));

  return (
    <>
      <StyledProjects>
        <Typography color="white" variant='h2' textAlign="center" pb={5} >Projects</Typography>
        <Grid container spacing={5}>
            <Grid display="flex" justifyContent="center" item xs={6}>
                <StyledCard></StyledCard>
            </Grid>
            <Grid display="flex" justifyContent="center" item xs={6}>
            <StyledCard></StyledCard>
            </Grid>
            <Grid display="flex" justifyContent="center" item xs={6}>
            <StyledCard></StyledCard>
            </Grid>
            <Grid display="flex" justifyContent="center" item xs={6}>
            <StyledCard></StyledCard>
            </Grid>
        </Grid>
      </StyledProjects>
    </>
  )
}

export default Projects
