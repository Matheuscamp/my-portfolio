import { Grid, styled, Typography } from '@mui/material';
import theme from '../../../../theme';
import Project_1 from "/home/matheus/Projetos/my-portfolio/src/assets/images/Project_1.png";
import Project_2 from "/home/matheus/Projetos/my-portfolio/src/assets/images/Project_2.png";
import Project_4 from "/home/matheus/Projetos/my-portfolio/src/assets/images/Project_4.png";
import Project_3 from "/home/matheus/Projetos/my-portfolio/src/assets/images/Project_3.png";

const Projects = () => {

  const StyledProjects = styled("div")(() => ({
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#0b1d28",
    padding: '20px',
  }));

  const StyledCard = styled("div")(() => ({
    width: "40rem",
    height: "35em",
    border: "1px solid #dadada",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: "10px",
    [theme.breakpoints.down('sm')]: { // Mobile
      width: "100%", // Card ocupa 100% da largura da tela no mobile
      height: "auto", // Ajusta a altura do card automaticamente
    },
  }));

  const ImageProject = styled("img")(() => ({
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
  }));

  return (
    <>
      <StyledProjects id="projects">
        <Typography color="white" variant='h2' textAlign="center" pb={2}>Projects</Typography>
        <Grid 
          container 
          spacing={2} 
          justifyContent="center" // Alinha os cards no centro na versão desktop
        >
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <StyledCard>
              <Typography color="white" fontFamily="sans-serif" variant='h4' pb={1}>Projet Order of Arrival</Typography>
              <Typography color="white" fontFamily="sans-serif" pb={1}>Last commit: Mar 23, 2023</Typography>
              <ImageProject src={Project_1} />
              <Typography color="white" fontFamily="sans-serif" pt={2}>This is a website for registering customers on a first-come, first-served basis at a barbershop</Typography>
              <Typography color="white" fontFamily="sans-serif" variant='h6' pb={1}>Technologies: JavaScript, HTML, CSS</Typography>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <StyledCard>
              <Typography color="white" fontFamily="sans-serif" variant='h4' pb={1}>Projet Wallet App</Typography>
              <Typography color="white" fontFamily="sans-serif" pb={1}>Last commit: Mar 10, 2023</Typography>
              <ImageProject src={Project_2} />
              <Typography color="white" fontFamily="sans-serif" pt={2}>This is a finances management dashboard. The main objective is the user add and delete finances releases, and inform him the balance of the month.</Typography>
              <Typography color="white" fontFamily="sans-serif" variant='h6' pb={1}>Technologies: JavaScript, HTML, CSS</Typography>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <StyledCard>
              <Typography color="white" fontFamily="sans-serif" variant='h4' pb={1}>Projet Supermarket lists</Typography>
              <Typography color="white" fontFamily="sans-serif" pb={1}>Last commit: Sep 6, 2023</Typography>
              <ImageProject src={Project_3} />
              <Typography color="white" fontFamily="sans-serif" pt={2}>This is an application with the goal of making easier to create supermarket lists.</Typography>
              <Typography color="white" fontFamily="sans-serif" variant='h6' pb={1}>Technologies: React.JS, HTML, CSS, Axios</Typography>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <StyledCard>
              <Typography color="white" fontFamily="sans-serif" variant='h4' pb={1}>Landing Page Auto Escola Ouro Preto</Typography>
              <Typography color="white" fontFamily="sans-serif" pb={1}>Last commit: Aug 9, 2023</Typography>
              <ImageProject src={Project_4} />
              <Typography color="white" fontFamily="sans-serif" pt={2}>This is a landing page, for Auto Escola Ouro Preto company.</Typography>
              <Typography color="white" fontFamily="sans-serif" variant='h6' pb={1}>Technologies: HTML, CSS</Typography>
            </StyledCard>
          </Grid>
        </Grid>
      </StyledProjects>
    </>
  )
}

export default Projects;
