import { FC } from 'react';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import style from './DetailsDesktop.module.scss';
import React from 'react';
import { SECONDARY_TEXT_COLOR } from '../../../constants';
import { IDetails } from '../../../domain/common';

const DetailsDesktop: FC<IDetails> = ({ details, title }) => {
    const detailsListDesktop = details.map((detail, i) => (
        <React.Fragment key={i}>
            <Grid sm={5} xs={6}>
                <Typography
                    variant='body1'
                    sx={{ color: SECONDARY_TEXT_COLOR }}
                >
                    {detail.key}
                </Typography>
            </Grid>
            <Grid sm={7} xs={6}>
                <Typography variant='body1'>{detail.value}</Typography>
            </Grid>
        </React.Fragment>
    ));

    return (
        <div className={style.details}>
            {title ? <Typography variant='h4'>{title}</Typography> : null}
            <Grid container rowSpacing={1} columnSpacing={2}>
                {detailsListDesktop}
            </Grid>
        </div>
    );
};

export default DetailsDesktop;
