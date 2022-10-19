import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, IconButton, SwipeableDrawer } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Logo } from '../logo/Logo';

import style from './headerLinks.module.scss';

interface IHeaderLinks {
    id: number;
    title: string;
    path: string;
}

const linksWrapperStyle = { display: { xs: 'none', md: 'flex' } };
const menuBttonStyle = { display: { md: 'none' } };

const headerLinks: IHeaderLinks[] = [
    { id: 0, title: 'главная', path: '' },
    { id: 1, title: 'новинки', path: '/newfilms' },
    { id: 2, title: 'топ-250', path: '/topfilms' },
    { id: 3, title: 'поиск', path: '/search' },
];

export const HeaderLinks: React.FC = () => {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

    const toggleDrawer =
        (isOpen: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setIsOpenMobileMenu(isOpen);
        };

    const links = headerLinks.map(({ id, path, title }) => (
        <NavLink
            key={id}
            to={path}
            className={({ isActive }) =>
                isActive ? style.isActive : undefined
            }
            end
            onClick={toggleDrawer(false)}
        >
            {title}
        </NavLink>
    ));

    return (
        <>
            <Box className={style.header_links} sx={linksWrapperStyle}>
                {links}
            </Box>

            <Box
                className={style.header_links}
                sx={menuBttonStyle}
                onClick={toggleDrawer(true)}
            >
                <IconButton>
                    <Menu />
                </IconButton>
            </Box>

            <SwipeableDrawer
                open={isOpenMobileMenu}
                onOpen={toggleDrawer(true)}
                onClose={toggleDrawer(false)}
            >
                <Box className={style.mobile_header_links}>
                    <Box className={style.mobile_header_links__logo_wrapper}>
                        <Logo />
                    </Box>
                    {links}
                </Box>
            </SwipeableDrawer>
        </>
    );
};
