import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/material';
import theme from '../../theme';
import Avatar from '/home/matheus/Projetos/my-portfolio/src/assets/images/Avatar.png';

const styleModal = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ImageButtonRight = styled('img')(({ theme }) => ({
  position: 'fixed',
  bottom: '0',
  right: '0',
  marginRight: '20px',
  zIndex: 1000,
  width: '8%',
  cursor: 'pointer',
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ImageButtonRight src={Avatar} onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <Box sx={styleModal}>
          <Typography variant="h6" component="h2"  color='#0b1d28'>
            Contact Information
          </Typography>
          <Typography sx={{ mt: 2 }} display="flex" alignItems="center" color='#0b1d28'>
            <WhatsAppIcon />
            (31 99585-2206)
          </Typography>
          <Typography sx={{ mt: 2 }} display="flex" alignItems="center" color='#0b1d28'>
            <EmailIcon />
            matheus.camp32@gmail.com
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
