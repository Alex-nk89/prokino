import { FC } from 'react';
import { Skeleton } from '@mui/material';

import { Details, IDetail } from '../details-isDesktop/DetailsIsDesktop';
import { DetailsIsMobile } from '../details-isMobile/DetailsIsMobile';
import { Poster } from '../poster/Poster';

import style from './headerPage.module.scss';

interface IHeaderPage {
    detailsList: IDetail[];
    titleForDetail?: string;
    isLoading?: boolean;
    posterUrl: string;
    isFilmAndMobile?: boolean;
}

export const HeaderPage: FC<IHeaderPage> = ({
    titleForDetail,
    isLoading,
    detailsList,
    posterUrl,
    isFilmAndMobile,
}) => {
    const title = titleForDetail ? titleForDetail : undefined;

    if (isLoading) {
        return <Skeleton height={400} variant='rounded' />;
    }

    const details = isFilmAndMobile ? (
        <DetailsIsMobile isFilm detailsList={detailsList} title={title} />
    ) : (
        <Details details={detailsList} title={title} />
    );

    return (
        <section className={style.cover}>
            <div className={style.cover_details}>
                <Poster
                    src={posterUrl}
                    alt='Обложка'
                    width={330}
                    height={430}
                />
                {details}
            </div>
        </section>
    );
};
