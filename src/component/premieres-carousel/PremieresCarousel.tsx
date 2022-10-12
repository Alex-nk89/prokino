import { NavLink } from 'react-router-dom';
import { FilmServices } from '../../services/services';
import { useQuery } from '@tanstack/react-query';
import { Carousel } from '../common/carousel/Carousel';
import style from './premieres-carousel.module.scss';

export const PremieresCarousel: React.FC = () => {
    const { data } = useQuery(['premieres'], () => FilmServices.getPremiers());

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
