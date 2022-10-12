import { Typography } from '@mui/material';
import { AxiosError } from 'axios';
import style from './error.module.scss';

interface IError {
    error: AxiosError;
}

export const Error: React.FC<IError> = ({ error }) => {
    const serviceInformation =
        process.env.NODE_ENV !== 'production' ? (
            <>
                <br />
                <Typography>{error.message}</Typography>
            </>
        ) : null;

    return (
        <div className={style.error}>
            <Typography variant='h1'>{error.response?.status}</Typography>
            <Typography variant='h4'>Не удалось получить информацию</Typography>
            {serviceInformation}
        </div>
    );
};
