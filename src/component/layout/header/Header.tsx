import { NavLink } from 'react-router-dom';
import { Toolbar, Box } from '@mui/material';
import { Logo } from '../../logo/Logo';
import styles from './header.module.scss';
import { HeaderLinks } from '../../header-links/HeaderLinks';

const logoStyle = { maxWidth: { xs: '150px', md: '200px' } };

export const Header: React.FC = () => {
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
