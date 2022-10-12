import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Skeleton, Typography } from '@mui/material';
import { FilmServices } from '../../services/services';

import style from './film.module.scss';
import { PageTitle } from '../../component/common/page-title/PageTitle';

export const Film: React.FC = () => {
    const { kinopoiskId } = useParams();
    const { data, isLoading, isError } = useQuery(['film'], () =>
        FilmServices.getFilm(Number(kinopoiskId))
    );

    const title = useMemo(() => {
        const title = `${data?.data.nameRu} (${data?.data.year})`;
        return <PageTitle isLoading={isLoading} title={title} />;
    }, [data?.data.nameRu, data?.data.year, isLoading]);

    return <div className={style.film_wrapper}>{title}</div>;
};
