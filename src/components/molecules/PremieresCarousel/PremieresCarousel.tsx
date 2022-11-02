import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Carousel } from "../index";
import style from "./PremieresCarousel.module.scss";
import React from "react";
import { filmService } from "../../../services/filmService";

const PremieresCarousel: React.FC = () => {
  const { data } = useQuery(["premieres"], () =>
    filmService.getPremieres({
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    })
  );

  const premieresCarouselCards = data?.items.map(
    ({ kinopoiskId, posterUrlPreview, nameRu }) => (
      <NavLink to={`/film/${kinopoiskId}`} key={kinopoiskId}>
        <div className={style.carousel_card}>
          <img src={posterUrlPreview} alt={nameRu} />
        </div>
      </NavLink>
    )
  );

  return <Carousel items={premieresCarouselCards} />;
};

export default PremieresCarousel;
