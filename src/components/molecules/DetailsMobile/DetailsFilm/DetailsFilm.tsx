import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { IDetail } from '../../../../domain/common';
import { MAIN_COLOR, SECONDARY_TEXT_COLOR } from '../../../../constants';
import style from './DetailsFilm.module.scss';

interface IDetailsFilm {
    detailsList: IDetail[];
}

const textStyle = {
    color: SECONDARY_TEXT_COLOR,
};

const DetailsFilm: FC<IDetailsFilm> = ({ detailsList }) => {
    return (
        <Box>
            <Box className={style.listItem}>
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

            <Box className={style.listItem}>
                <Typography sx={textStyle}>
                    {detailsList.find(({ key }) => key === 'Год релиза')?.value}
                </Typography>
                <Typography sx={textStyle}>
                    {detailsList.find(({ key }) => key === 'Жанр')?.value}
                </Typography>
            </Box>

            <Box className={style.listItem}>
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

            <Box className={style.listItem}>
                <Typography sx={textStyle}>{`В ролях: ${
                    detailsList.find(({ key }) => key === 'Актеры')?.value
                } и другие.`}</Typography>
            </Box>
        </Box>
    );
};

export default DetailsFilm;
