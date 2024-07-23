import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './style.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
      <AppBar position="static" className="header">
        <Toolbar>
          <Typography className="logo">
            <Link to="/" className="logo-link">
              <img className='logo' src="src\assets\logo.png" alt="Logo_sis_social" />
            </Link>
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleMenu}
                id="menu-btn"
              >
                <MenuIcon />
              </IconButton>
              <nav className={`navbar ${menuActive ? 'active' : ''}`}>
                <Link to="/" className="nav-link" onClick={toggleMenu}>Início</Link>
                <Link to="/agendamento" className="nav-link" onClick={toggleMenu}>Agendamento</Link>
                <Link to="/financeiro" className="nav-link" onClick={toggleMenu}>Financeiro</Link>
                <Link to="/cadastro" className="nav-link" onClick={toggleMenu}>Cadastro</Link>
                <Link to="/login" className="nav-link" onClick={toggleMenu}>Login</Link>
              </nav>
            </>
          ) : (
            <div className="nav-buttons">
            <Button>
              <Link to="/" className="nav-link">Início</Link>
            </Button>
            <Button>
              <Link to="/login" className="nav-link">Agendamento</Link>
            </Button>
            <Button>
              <Link to="/login" className="nav-link">Financeiro</Link>
            </Button>
            <Button>
              <Link to="/cadastro" className="nav-link">Cadastro</Link>
            </Button>
            <Button>
              <Link to="/login" className="nav-link">Login</Link>
            </Button>
          </div>
          )}
        </Toolbar>
      </AppBar>
  );
};

export default Header;
