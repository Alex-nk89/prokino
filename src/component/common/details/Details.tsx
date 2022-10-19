import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import style from './details.module.scss';

export interface IDetail {
    key: string;
    value: number | string | undefined;
}

export interface IDetails {
    details: IDetail[];
    title: string;
}

export const Details: React.FC<IDetails> = ({ details, title }) => {
    const detailsList = details.map((detail, i) => (
        <>
            <Grid sm={5} xs={6}>
                <Typography variant='body1'>{detail.key}</Typography>
            </Grid>
            <Grid sm={7} xs={6}>
                <Typography variant='body1'>{detail.value}</Typography>
            </Grid>
        </>
    ));

    return (
        <div className={style.details}>
            <Grid container rowSpacing={1} columnSpacing={2}>
                {detailsList}
            </Grid>
        </div>
    );
};
