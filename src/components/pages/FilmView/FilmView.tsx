import { FC, useMemo } from "react";
import { useParams } from "react-router-dom";
import { AxiosError } from "axios";
import { useMediaQuery } from "@mui/material";

import { HeaderPage, FilmRating, FilmFacts } from "../../organisms";
import {
  Description,
  FilmImages,
  InfoBlock,
  Error,
  TabsWrapper,
} from "../../molecules";
import { PageTitle } from "../../atoms";
import { Awards } from "../../molecules/Awards/Awards";

import { useFilmData } from "../../../application/film";
import { getDataListForFilmPage } from "../../../utils/datalist";
import { IDetail } from "../../../domain/common";

import style from "./FilmView.module.scss";

const tabsNames = ["Обзор", "Кадры", "Рейтинг", "Факты и ошибки", "Награды"];

const FilmView: FC = () => {
  const { kinopoiskId } = useParams();
  const isDesktop = useMediaQuery("(min-width: 600px)");

  const { filmInfo, staffInfo, isFetching, isError, error } = useFilmData(
    Number(kinopoiskId)
  );

  const nameRu = filmInfo?.nameRu || "";
  const posterUrl = filmInfo?.posterUrl || "";
  const filmDescription = filmInfo?.description || "Описание отсутствует.";
  const filmShortDescription = filmInfo?.shortDescription || "";

  const detailsList: IDetail[] = useMemo(
    () => getDataListForFilmPage(filmInfo, staffInfo),
    [filmInfo, staffInfo]
  );

  const title = useMemo(
    () => (isDesktop ? <PageTitle title={nameRu} /> : null),
    [nameRu, isDesktop]
  );

  const headerPage = useMemo(
    () => (
      <HeaderPage
        isLoading={isFetching}
        titleForDetail={isDesktop ? "О фильме" : nameRu}
        detailsList={detailsList}
        posterUrl={posterUrl}
        isFilmAndMobile={!isDesktop}
      />
    ),
    [isDesktop, isFetching, detailsList, nameRu, posterUrl]
  );

  const description = useMemo(
    () => (
      <Description
        description={filmDescription}
        shortDescription={filmShortDescription}
      />
    ),
    [filmDescription, filmShortDescription]
  );

  const filmImages = useMemo(
    () => <FilmImages kinopoiskId={Number(kinopoiskId)} />,
    [kinopoiskId]
  );

  const filmRating = useMemo(() => <FilmRating />, []);

  const filmFacts = useMemo(
    () => <FilmFacts kinopoiskId={Number(kinopoiskId)} isDesktop={isDesktop} />,
    [kinopoiskId, isDesktop]
  );

  const awards = useMemo(
    () => <Awards kinopoiskId={Number(kinopoiskId)} />,
    [kinopoiskId]
  );

  if (isError) {
    return <Error error={error as AxiosError} />;
  }

  if (isDesktop) {
    const tabsContains = [
      description,
      filmImages,
      filmRating,
      filmFacts,
      awards,
    ];

    return (
      <div className={style.film_wrapper}>
        {title}
        {headerPage}
        <InfoBlock>
          <TabsWrapper tabsNames={tabsNames} tabsContains={tabsContains} />
        </InfoBlock>
      </div>
    );
  }

  return (
    <div className={style.film_wrapper}>
      {headerPage}
      <InfoBlock
        isLoading={isFetching}
        title="Описание"
        action="open"
        maxHeightCSS={200}
      >
        {description}
      </InfoBlock>

      <InfoBlock title="Кадры">{filmImages}</InfoBlock>
      <InfoBlock title="Рейтинг">{filmRating}</InfoBlock>
      <InfoBlock title="Факты">{filmFacts}</InfoBlock>
      <InfoBlock title="Награды" action="link" link={`/awards/${kinopoiskId}`}>
        {awards}
      </InfoBlock>
    </div>
  );
};

export default FilmView;
