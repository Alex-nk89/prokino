import { FilmApi } from '../../api/api';
import { IDetail } from '../../component/common/details/Details';
import { Error } from '../../component/common/error/Error';
import { HeaderPage } from '../../component/common/header-page/HeaderPage';
import { InfoBlock } from '../../component/common/info-block/InfoBlock';
import { TabsWrapper } from '../../component/common/tabs-wrapper/TabsWrapper';
import { FilmFactAndBloopers } from '../../component/film-facts-and-bloopers/FilmFactAndBloopers';
import { FilmImages } from '../../component/film-images/FilmImages';
import { FilmRating } from '../../component/film-rating/FilmRating';
import { getDataListForFilmPage } from '../../utils/helpers/helpers';
import style from './film.module.scss';
import { Typography, Skeleton, useMediaQuery } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useMemo, FC } from 'react';
import { useParams } from 'react-router-dom';

const tabsNames = ['Обзор', 'Кадры', 'Рейтинг', 'Факты и ошибки'];

export const FilmPage: FC = () => {
    const { kinopoiskId } = useParams();
    const isDesktop = useMediaQuery('(min-width:600px)');

    const {
        data: filmInfo,
        isFetching: isFetchingFilmInfo,
        isError,
        error,
    } = useQuery(['film'], () => FilmApi.getFilm(Number(kinopoiskId)));

    const { data: staff, isFetching: isFetchingStaffInfo } = useQuery(
        ['actors', kinopoiskId],
        () => FilmApi.getActorsInFilm(Number(kinopoiskId))
    );

    const detailsList: IDetail[] = useMemo(
        () => getDataListForFilmPage(filmInfo?.data, staff?.data),
        [filmInfo?.data, staff]
    );

    const title = useMemo(
        () => (
            <Typography variant='h4'>
                {isFetchingFilmInfo ? <Skeleton /> : filmInfo?.data.nameRu}
            </Typography>
        ),
        [filmInfo?.data.nameRu, isFetchingFilmInfo]
    );

    const headerPage = useMemo(() => {
        const posterUrl = filmInfo?.data.posterUrl || '';

        return (
            <HeaderPage
                detailsList={detailsList}
                posterUrl={posterUrl}
                titleForDetail=''
                isLoading={isFetchingFilmInfo && isFetchingStaffInfo}
            />
        );
    }, [
        detailsList,
        filmInfo?.data.posterUrl,
        isFetchingFilmInfo,
        isFetchingStaffInfo,
    ]);

    const filmDescription = useMemo(
        () => (
            <Typography variant='body2'>
                {filmInfo?.data.description || 'Описание фильма отсутствует.'}
            </Typography>
        ),
        [filmInfo?.data.description]
    );

    const filmImages = useMemo(
        () => <FilmImages kinopoiskId={Number(kinopoiskId)} />,
        [kinopoiskId]
    );

    const filmRating = useMemo(
        () => <FilmRating rating={filmInfo?.data} />,
        [filmInfo?.data]
    );

    const factsAndBloopers = useMemo(
        () => <FilmFactAndBloopers id={Number(kinopoiskId)} />,
        [kinopoiskId]
    );

    if (isError) {
        return <Error error={error as AxiosError} />;
    }

    if (isDesktop) {
        const tabsContains = [
            filmDescription,
            filmImages,
            filmRating,
            factsAndBloopers,
        ];

        return (
            <div className={style.film_wrapper}>
                {title}
                {headerPage}
                <InfoBlock>
                    <TabsWrapper
                        tabsNames={tabsNames}
                        tabsContains={tabsContains}
                    />
                </InfoBlock>
            </div>
        );
    }

    return (
        <div className={style.film_wrapper}>
            {title}
            {headerPage}
            <InfoBlock title='Обзор' maxHeightCSS={300}>
                {filmDescription}
            </InfoBlock>
            <InfoBlock title='Кадры'>{filmImages}</InfoBlock>
            <InfoBlock title='Рейтинг'>{filmRating}</InfoBlock>
            <InfoBlock title='Факты и Ошибки' maxHeightCSS={300}>
                {factsAndBloopers}
            </InfoBlock>
        </div>
    );
};