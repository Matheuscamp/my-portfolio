import React from 'react'
import { Container, Grid, styled, Typography } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StyledButton from '../../../../components/StyledButton/StyledButton';
import theme from '../../../../theme';
import { ReactTyped, Typed } from 'react-typed';
import Avatar from "/home/matheus/Projetos/my-portfolio/src/assets/images/Avatar.png"


const Hero = () => {

    const ImageButtonRight = styled("img")(() => ({ // Estilo avatar lateral inferior direita
        position: "fixed",
        bottom: "0",
        right: "0",
        marginRight: "20px",
        zIndex: "1000",
        width: "8%",
        cursor: "pointer",
        [theme.breakpoints.up('xs')]: { // <= mobile
            
            display: "none"
        },
        [theme.breakpoints.up('md')]: { // >= mobile
            display: "block"
        },
    }));
    
    const StyledHero = styled("div")(() => ({ // style section Hero
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

    const VideoBackground = styled("video")(() => ({ // Style background video, section hero
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'brightness(60%)', // Aplica escuridão ao vídeo
        zIndex: -1,
    }));

    const handleDownloadCV = () => { // Download function
        const link = document.createElement('a');
        link.href = 'public/Currículo Matheus Campos P.pdf'; // Caminho para o arquivo na pasta public
        link.download = 'Curriculo_Matheus_Campos.pdf'; // Nome do arquivo ao fazer download
        link.click();
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:matheus.camp32@gmail.com'; // Substitua pelo seu email
    };

    const handleContactMe = () => {
        window.open('https://www.linkedin.com/in/matheus-campos-356085278/', '_blank');
    };

    const TypedText = styled(Typography)(({ theme }) => ({
        color: "white", // Altera a cor do texto
        fontSize: '3rem', // Tamanho da fonte
        textAlign: 'center',
    }));

    return (
        <StyledHero>
            <VideoBackground autoPlay loop muted>
                <source src="src/assets/images/mylivewallpapers-com-Lake-Foggy-Mountains-4K.mp4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
            </VideoBackground>
            <ImageButtonRight id='avatar' src={Avatar} onClick={handleEmailClick} />
            <Container maxWidth="lg">
                <Grid container spacing={12}>
                    <Grid item xs={12} md={12}>
                        <Typography color="primary.contrastText" variant='h2' textAlign="center" >Matheus Campos</Typography>
                        <Typography color="primary.contrastText" variant='h3' textAlign="center"></Typography>
                        <TypedText>
                            <ReactTyped
                                strings={["I'm a Front-End Developer"]}
                                typeSpeed={70}
                                backSpeed={60}
                                loop
                            />
                        </TypedText>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center" >
                                <StyledButton onClick={handleDownloadCV}>
                                    <DownloadIcon />
                                    <Typography>Download CV</Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton onClick={handleContactMe}>
                                    <LinkedInIcon />
                                    <Typography>LinkedIn</Typography>
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
