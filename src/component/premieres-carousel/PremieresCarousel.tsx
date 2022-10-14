import { NavLink } from 'react-router-dom';
import { FilmApi } from '../../api/api';
import { useQuery } from '@tanstack/react-query';
import { Carousel } from '../common/carousel/Carousel';
import style from './premieres-carousel.module.scss';

export const PremieresCarousel: React.FC = () => {
    const { data } = useQuery(['premieres'], () => FilmApi.getPremiers());

    const premieresCarouselCards = data?.data.items.map(
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
