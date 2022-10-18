import { useQuery } from '@tanstack/react-query';
import { FilmApi } from '../../api/api';
import { Carousel } from '../common/carousel/Carousel';
import style from './filmImages.module.scss';

interface IFilmImages {
    kinopoiskId: number;
}

export const FilmImages: React.FC<IFilmImages> = ({ kinopoiskId }) => {
    const { data: images, isError } = useQuery(['filmImages'], () =>
        FilmApi.getFilmImages(kinopoiskId)
    );

    const filmImages = images?.data.items.map((image) => (
        <div key={image.previewUrl} className={style.imageCard}>
            <img src={image.previewUrl} alt='Кадры из фильма' />
        </div>
    ));

    if (isError) {
        return <p>Не удалось загрузить кадры из фильма...</p>;
    }

    if (images?.data.total === 0) {
        return <p>Кадры из фильма отсутствуют...</p>;
    }

    return (
        <>
            <Carousel items={filmImages} />
        </>
    );
};
