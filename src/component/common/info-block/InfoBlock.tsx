import { Typography } from '@mui/material';
import style from './infoBlock.module.scss';

interface Props {
    children: React.ReactNode;
    title?: string;
}

export const InfoBlock: React.FC<Props> = ({ children, title }) => {
    const header = title ? <Typography variant='h5'>{title}</Typography> : null;

    return (
        <div className={style.infoBlock}>
            {header}
            {children}
        </div>
    );
};