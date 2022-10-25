import { Details, IDetail } from '../details/Details';
import { Poster } from '../poster/Poster';
import style from './headerPage.module.scss';
import { Skeleton } from '@mui/material';
import { FC } from 'react';

interface IHeaderPage {
    detailsList: IDetail[];
    posterUrl: string;
    titleForDetail?: string;
    isLoading?: boolean;
}

export const HeaderPage: FC<IHeaderPage> = ({
    posterUrl,
    detailsList,
    titleForDetail,
    isLoading,
}) => {
    if (isLoading) {
        return <Skeleton height={400} variant='rounded' />;
    }
    return (
        <section className={style.cover}>
            <div className={style.cover_details}>
                <Poster
                    src={posterUrl}
                    alt='Обложка'
                    width={230}
                    height={330}
                />
                <Details details={detailsList} title={titleForDetail} />
            </div>
        </section>
    );
};
