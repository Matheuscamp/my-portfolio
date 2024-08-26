import { Container, Grid, styled, Typography } from '@mui/material';
import { useState } from 'react'
import theme from '../../../../theme';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';



const About = () => {

    const StyledAbout = styled("div")(() => ({
        marginTop: "25px",
        position: 'relative',
        height: '87vh',
        width: "100%",
        display: 'flex',
        alignItems: 'top',
        justifyContent: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile

        },
        [theme.breakpoints.up('md')]: { // >= mobile

        },

    }));

    const StyledCard = styled("div")(() => ({
        width: "270px",
        height: "140px",
        border: "1px solid #0b1d28",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }));

  return (
    <>
      <StyledAbout>
        <Container maxWidth="lg">
            <Typography color="secondary" variant='h2' textAlign="center" >About me</Typography>
            <Grid container display="flex"  spacing={2} marginTop={3}>
                <Grid item display="flex" justifyContent="center" xs={6} md={6}>
                    <StyledCard>
                        <WorkspacePremiumIcon/>
                        <Typography color="secondary" variant='h5' textAlign="center" >Experience</Typography>
                        <Typography color="secondary" fontFamily="sans-serif" fontSize="1rem" textAlign="center" >+ 1 years</Typography>
                        <Typography color="secondary" fontFamily="sans-serif" fontSize="1rem" textAlign="center" >Frontend development</Typography>
                    </StyledCard>
                </Grid>
                <Grid item display="flex" justifyContent="center" xs={6} md={6}>
                    <StyledCard>
                        <SchoolIcon/>
                        <Typography color="secondary" variant='h5' textAlign="center">Education</Typography>
                        <Typography color="secondary" fontFamily="sans-serif" fontSize="1rem" textAlign="center" >4º PUC - Minas</Typography>
                        <Typography color="secondary" fontFamily="sans-serif" fontSize="1rem" textAlign="center" >Systems Analysis and Development</Typography>
                    </StyledCard>
                </Grid>
            </Grid>
            <Typography color="secondary" variant='h6' textAlign="left" marginTop={3} borderBottom="1px solid #0b1d28" >Olá, sou Matheus Campos. Atualmente, estou estagiando como desenvolvedor web e pesquisador na Sem Rumo, onde tenho a oportunidade de aplicar e expandir minhas habilidades em tecnologias tanto de front-end quanto de back-end. Minha experiência me permitiu desenvolver um conjunto sólido de soft skills que complementam minha expertise técnica.

Sou estudante da PUC Minas, cursando Análise e Desenvolvimento de Sistemas no 4º período. Meu objetivo é continuar crescendo no mercado de trabalho, trabalhando com o que eu amo na área de TI. Estou sempre em busca de novos desafios e oportunidades para aprender e contribuir com soluções inovadoras.

Se você está interessado em conversar sobre oportunidades de colaboração ou apenas para trocar ideias sobre tecnologia, não hesite em entrar em contato!</Typography>
        </Container>
      </StyledAbout>
    </>
  )
}

export default About
