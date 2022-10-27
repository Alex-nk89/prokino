import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, Skeleton, Box } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { MAIN_COLOR } from '../../../constants';
import style from './infoBlock.module.scss';

interface Props {
    children: React.ReactNode;
    title?: string;
    maxHeightCSS?: number;
    isLoading?: boolean;
    link?: string;
    action?: 'link' | 'open';
}

export const InfoBlock: React.FC<Props> = ({
    children,
    title,
    maxHeightCSS = 200,
    isLoading,
    action,
    link,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const maxHeight = isOpen ? '1000px' : `${maxHeightCSS}px`;

    const subtitle = (
        <Typography variant='body1' sx={{ color: MAIN_COLOR }}>
            Все <ChevronRight />
        </Typography>
    );

    const navLink =
        action === 'link' && link ? (
            <NavLink to={link}>{subtitle}</NavLink>
        ) : null;

    const openHundler = () => {
        setIsOpen(!isOpen);
    };

    const open =
        action === 'open' ? (
            <div
                onClick={openHundler}
                className={style.infoBlock__header__subtitle}
            >
                {subtitle}
            </div>
        ) : null;

    const header =
        title || action ? (
            <Box className={style.infoBlock__header}>
                <Typography variant='h6'>{title}</Typography>
                {navLink || open}
            </Box>
        ) : null;

    if (isLoading) {
        return <Skeleton variant='rounded' height={maxHeightCSS} />;
    }

    return (
        <Box className={style.infoBlock} style={{ maxHeight }}>
            {header}
            {children}
        </Box>
    );
};
