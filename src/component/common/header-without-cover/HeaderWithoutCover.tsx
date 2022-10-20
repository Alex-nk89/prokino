import { FC } from 'react';
import { Details, IDetail } from '../details/Details';
import { Typography } from '@mui/material';
import { Poster } from '../poster/Poster';
import style from './headerWithoutCover.module.scss';

interface IHeader {
    detailsList: IDetail[];
    title: string;
    posterUrl: string;
    titleForDetail?: string;
}

export const HeaderWithoutCover: FC<IHeader> = ({
    title,
    posterUrl,
    detailsList,
    titleForDetail,
}) => {
    return (
        <div className={style.cover}>
            <Typography variant='h3'>{title}</Typography>
            <div className={style.cover_details}>
                <Poster
                    src={posterUrl}
                    alt='Обложка'
                    width={230}
                    height={330}
                />
                <Details details={detailsList} title={titleForDetail} />
            </div>
        </div>
    );
};
