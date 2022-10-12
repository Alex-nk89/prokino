import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { FilmServices } from '../../services/services';

import style from './film.module.scss';
import { PageTitle } from '../../component/common/page-title/PageTitle';
import { Error } from '../../component/common/error/Error';
import { AxiosError } from 'axios';

export const Film: React.FC = () => {
    const { kinopoiskId } = useParams();
    const {
        data: film,
        isLoading,
        isError,
        error,
    } = useQuery(['film'], () => FilmServices.getFilm(Number(kinopoiskId)));

    const title = useMemo(() => {
        const title = `${film?.data.nameRu} (${film?.data.year})`;
        return <PageTitle isLoading={isLoading} title={title} />;
    }, [film?.data.nameRu, film?.data.year, isLoading]);

    if (isError) {
        return <Error error={error as AxiosError} />;
    }

    return <div className={style.film_wrapper}>{title}</div>;
};
