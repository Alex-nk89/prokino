import { Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { FilmApi } from '../../api/api';
import { IDetail } from '../../component/common/details/Details';
import { Error } from '../../component/common/error/Error';
import { HeaderWithoutCover } from '../../component/common/header-without-cover/HeaderWithoutCover';
import { InfoBlock } from '../../component/common/info-block/InfoBlock';
import { TabsWrapper } from '../../component/common/tabs-wrapper/TabsWrapper';
import { FilmFactAndBloopers } from '../../component/film-facts-and-bloopers/FilmFactAndBloopers';
import { FilmImages } from '../../component/film-images/FilmImages';
import { FilmRating } from '../../component/film-rating/FilmRating';
import {
  convertingCountryListToString,
  convertingGenreListToString,
  filterStaff,
} from '../../utils/helpers/helpers';
import style from './film.module.scss';

const tabsNames = ['Обзор', 'Кадры', 'Рейтинг', 'Факты и ошибки'];

export const Film: FC = () => {
  const { kinopoiskId } = useParams();

  const {
    data: film,
    isError,
    error,
  } = useQuery(['film'], () => FilmApi.getFilm(Number(kinopoiskId)));
  const { data: staff } = useQuery(['actors', kinopoiskId], () =>
    FilmApi.getActorsInFilm(Number(kinopoiskId)),
  );

  const filmLength = film?.data.filmLength || '-';
  const countries = convertingCountryListToString(film?.data.countries);
  const genres = convertingGenreListToString(film?.data.genres);
  const director = filterStaff(staff?.data, 'DIRECTOR', 3);
  const writers = filterStaff(staff?.data, 'WRITER', 3);
  const actors = filterStaff(staff?.data, 'ACTOR', 5);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const description = (
    <Typography variant="body2">
      {film?.data.description || 'Описание отсутствует'}
    </Typography>
  );

  const tabsContains = useMemo(() => {
    return [
      description,
      <FilmImages kinopoiskId={Number(kinopoiskId)} />,
      <FilmRating rating={film?.data} />,
      <FilmFactAndBloopers id={Number(kinopoiskId)} />,
    ];
  }, [description, film?.data, kinopoiskId]);

  const detailsList: IDetail[] = useMemo(
    () => [
      { key: 'Год релиза', value: film?.data.year || '-' },
      { key: 'Страна', value: countries },
      { key: 'Жанр', value: genres },
      { key: 'Слоган', value: film?.data.slogan || '-' },
      { key: 'Продолжительность', value: `${filmLength} мин.` },
      { key: 'Режиссер', value: director },
      { key: 'Сценарист', value: writers },
      { key: 'Актеры', value: actors },
    ],
    [
      film?.data.year,
      film?.data.slogan,
      countries,
      genres,
      filmLength,
      director,
      writers,
      actors,
    ],
  );

  const header = useMemo(() => {
    const title = `${film?.data.nameRu} (${film?.data.year})`;
    const posterUrl = film?.data.posterUrlPreview || '';

    return (
      <HeaderWithoutCover
        title={title}
        posterUrl={posterUrl}
        detailsList={detailsList}
        titleForDetail="О фильме"
      />
    );
  }, [
    detailsList,
    film?.data.nameRu,
    film?.data.posterUrlPreview,
    film?.data.year,
  ]);

  if (isError) {
    return <Error error={error as AxiosError} />;
  }

  return (
    <div className={style.film_wrapper}>
      <div className={style.film_wrapper_header}>{header}</div>

      <InfoBlock>
        <TabsWrapper tabsNames={tabsNames} tabsContains={tabsContains} />
      </InfoBlock>
    </div>
  );
};
