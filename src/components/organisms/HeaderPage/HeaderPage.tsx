import { FC } from 'react';
import { Skeleton } from '@mui/material';
import { DetailsMobile, DetailsDesktop } from '../../molecules/';
import { Poster } from '../../molecules';
import { IDetail } from '../../../domain/common';
import style from './HeaderPage.module.scss';

interface IHeaderPage {
    detailsList: IDetail[];
    titleForDetail?: string;
    isLoading?: boolean;
    posterUrl: string;
    isFilmAndMobile?: boolean;
}

const HeaderPage: FC<IHeaderPage> = ({
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
        <DetailsMobile isFilm detailsList={detailsList} title={title} />
    ) : (
        <DetailsDesktop details={detailsList} title={title} />
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

export default HeaderPage;
