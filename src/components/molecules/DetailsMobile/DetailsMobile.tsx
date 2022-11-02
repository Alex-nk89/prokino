import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import DetailsFilm from './DetailsFilm/DetailsFilm';

import { IDetail } from '../../../domain/common';

import style from './DetailsMobile.module.scss';

interface IDetails {
    isFilm: boolean;
    detailsList: IDetail[];
    title?: string;
}

const DetailsMobile: FC<IDetails> = ({ isFilm, detailsList, title }) => {
    const header = title ? <Typography variant='h3'>{title}</Typography> : null;

    const detailsFilm = isFilm ? (
        <DetailsFilm detailsList={detailsList} />
    ) : null;

    return (
        <Box className={style.details}>
            {header}
            {detailsFilm}
        </Box>
    );
};

export default DetailsMobile;
