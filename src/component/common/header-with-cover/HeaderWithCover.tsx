import { Typography } from '@mui/material';
import style from './headerWithCover.module.scss';

interface ICover {
    src: string;
    title: string;
    description: string;
}

export const HeaderWithCover: React.FC<ICover> = ({
    src,
    title,
    description,
}) => {
    return (
        <div className={style.cover}>
            <img src={src} alt='Обложка к фильму' />
            <div className={style.cover_title}>
                <Typography variant='h3'>{title}</Typography>
                <Typography variant='body1'>{description}</Typography>
            </div>
        </div>
    );
};
