import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { imageService } from "../../../services/imageService";
import { Carousel } from "../../molecules";
import style from "./FilmImages.module.scss";
import { keys } from "../../../application/queryKeys";

interface IFilmImages {
  kinopoiskId: number;
}

const FilmImages: FC<IFilmImages> = ({ kinopoiskId }) => {
  const { data: images, isError } = useQuery(keys.filmImages, () =>
    imageService.getFilmImages({ kinopoiskId, type: "STILL" })
  );

  const filmImages = images?.items.map((image) => (
    <div key={image.previewUrl} className={style.imageCard}>
      <img src={image.previewUrl} alt="Кадры из фильма" />
    </div>
  ));

  if (isError) {
    return <p>Не удалось загрузить кадры из фильма...</p>;
  }

  if (images?.total === 0) {
    return <p>Кадры из фильма отсутствуют...</p>;
  }

  return (
    <>
      <Carousel items={filmImages} />
    </>
  );
};

export default FilmImages;