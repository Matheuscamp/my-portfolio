import React from 'react'
import { Container, Grid, styled, Typography } from '@mui/material'
import Foto from "../../../../assets/images/Foto_Matheus.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from '../../../../components/StyledButton/StyledButton';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        zIndex: 1,
    }));

    const VideoBackground = styled("video")(() => ({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'brightness(60%)', // Aplica escuridão ao vídeo
        zIndex: -1,
    }));

    const StyledImg = styled("img")(({ theme }) => ({
        width: "80%",
        borderRadius: "20%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }));

    return (
        <StyledHero>
            <VideoBackground autoPlay loop muted>
                <source src="src/assets/images/mylivewallpapers-com-Lake-Foggy-Mountains-4K.mp4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
            </VideoBackground>
            <Container maxWidth="lg">
                <Grid container spacing={12}>
                    <Grid item xs={12} md={12}>
                        <Typography color="primary.contrastText" variant='h2' textAlign="center" >Matheus Campos</Typography>
                        <Typography color="primary.contrastText" variant='h3' textAlign="center">I'm a Front-End Developer</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center" >
                                <StyledButton>
                                    <DownloadIcon />
                                    <Typography>Download CV</Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton>
                                    <EmailIcon />
                                    <Typography>Contact me</Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
}

export default Hero;
