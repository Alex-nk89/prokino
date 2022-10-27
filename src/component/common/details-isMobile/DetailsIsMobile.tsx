import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { IDetail } from '../details-isDesktop/DetailsIsDesktop';
import { MAIN_COLOR, SECONDARY_TEXT_COLOR } from '../../../constants';

import style from './DetailsIsMobile.module.scss';

interface IDetails {
    isFilm: boolean;
    detailsList: IDetail[];
    title?: string;
}

const textStyle = {
    color: SECONDARY_TEXT_COLOR,
};

export const DetailsIsMobile: FC<IDetails> = ({
    isFilm,
    detailsList,
    title,
}) => {
    const header = title ? <Typography variant='h3'>{title}</Typography> : null;

    const detailsFilm = isFilm ? (
        <Box className={style.details__list}>
            <Box className={style.details__list__item}>
                <Typography variant='h6' sx={{ color: MAIN_COLOR }}>
                    {detailsList.find(({ key }) => key === 'Рейтинг')?.value}
                </Typography>

                <Typography>
                    {
                        detailsList.find(({ key }) => key === 'Название (En)')
                            ?.value
                    }
                </Typography>
            </Box>

            <Box className={style.details__list__item}>
                <Typography sx={textStyle}>
                    {detailsList.find(({ key }) => key === 'Год релиза')?.value}
                </Typography>
                <Typography sx={textStyle}>
                    {detailsList.find(({ key }) => key === 'Жанр')?.value}
                </Typography>
            </Box>

            <Box className={style.details__list__item}>
                <Typography sx={textStyle}>
                    {detailsList.find(({ key }) => key === 'Страна')?.value}
                </Typography>
                <Typography sx={textStyle}>
                    {
                        detailsList.find(
                            ({ key }) => key === 'Продолжительность'
                        )?.value
                    }
                </Typography>
                <Typography sx={textStyle}>
                    {detailsList.find(({ key }) => key === 'Возраст')?.value}
                </Typography>
            </Box>

            <Box className={style.details__list__item}>
                <Typography sx={textStyle}>{`В ролях: ${
                    detailsList.find(({ key }) => key === 'Актеры')?.value
                } и другие.`}</Typography>
            </Box>
        </Box>
    ) : null;

    return (
        <Box className={style.details}>
            {header}
            {detailsFilm}
        </Box>
    );
};
