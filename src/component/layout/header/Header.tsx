import { NavLink } from 'react-router-dom';
import React, { FC } from "react";
import { Toolbar, Box } from '@mui/material';
import { Logo } from '../../logo/Logo';
import { HeaderLinks } from '../../header-links/HeaderLinks';
import styles from './header.module.scss';

const logoStyle = { maxWidth: { xs: '150px', md: '200px' } };

export const Header: FC = () => {
    return (
        <header>
            <Toolbar
                component='nav'
                className={styles.header}
                sx={{ maxHeight: { xs: '4rem', md: '6rem' } }}
            >
                <NavLink to='/'>
                    <Box sx={logoStyle}>
                        <Logo />
                    </Box>
                </NavLink>

                <HeaderLinks />
            </Toolbar>
        </header>
    );
};
