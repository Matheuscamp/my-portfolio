import theme from '../../theme';
import { Box, styled, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {

    const StyledFooter = styled("div")(() => ({
        position: 'relative',
        height: '10vh',
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile

        },
        [theme.breakpoints.up('md')]: { // >= mobile

        },
    }));

    const StyledIcons = styled("div")(() => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& > *": {
            margin: "0 11px",
            cursor: "pointer"
        },
    }));

    return (
        <>
            <StyledFooter>
                <StyledIcons>
                    <GitHubIcon />
                    <LinkedInIcon />
                    <EmailIcon />
                    <InstagramIcon />
                </StyledIcons>
                <Typography color="#0b1d28" fontFamily="sans-serif">© 2024 Matheus Campos - All rights reserved</Typography>
            </StyledFooter>
        </>
    );
}

export default Footer;
