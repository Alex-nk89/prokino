import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useMediaQuery } from '@mui/material';
import { FilmApi } from '../../api/api';
import { Error } from '../../component/common/error/Error';
import style from './film.module.scss';
import { HeaderWithCover } from '../../component/common/header-with-cover/HeaderWithCover';
import { HeaderWithoutCover } from '../../component/common/header-without-cover/HeaderWithoutCover';
import { InfoBlock } from '../../component/common/info-block/InfoBlock';
import { FilmImages } from '../../component/film-images/FilmImages';

export const Film: React.FC = () => {
    const { kinopoiskId } = useParams();
    const {
        data: film,
        //isLoading,
        isError,
        error,
    } = useQuery(['film'], () => FilmApi.getFilm(Number(kinopoiskId)));

    const matches = useMediaQuery('(min-width:600px)');
    const coverUrl = film?.data.coverUrl;
    const nameRu = film?.data.nameRu || '';
    const shortDescription = film?.data.shortDescription || '';

    const header = useMemo(
        () =>
            coverUrl && matches ? (
                <HeaderWithCover
                    src={coverUrl}
                    title={nameRu}
                    description={shortDescription}
                />
            ) : (
                <HeaderWithoutCover film={film?.data} />
            ),
        [coverUrl, film?.data, matches, nameRu, shortDescription]
    );

    if (isError) {
        return <Error error={error as AxiosError} />;
    }

    return (
        <div className={style.film_wrapper}>
            <div className={style.film_wrapper_header}>{header}</div>
            <InfoBlock>
                <FilmImages kinopoiskId={Number(kinopoiskId)} />
            </InfoBlock>
        </div>
    );
};
