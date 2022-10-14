import { Typography } from '@mui/material';
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
        <div key={i}>
            <div className={style.details_key}>
                <Typography variant='body1'>{detail.key}</Typography>
            </div>
            <div className={style.details_value}>
                <Typography variant='body1'>{detail.value}</Typography>
            </div>
        </div>
    ));

    return (
        <div className={style.details}>
            <Typography variant='h4'>{title}</Typography>
            {detailsList}
        </div>
    );
};
