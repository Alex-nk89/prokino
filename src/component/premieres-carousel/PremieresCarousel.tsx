import { FilmServices } from '../../services/services';
import { useQuery } from '@tanstack/react-query';
import { Carousel } from '../common/carousel/Carousel';
import style from './premieres-carousel.module.scss';

export const PremieresCarousel: React.FC = () => {
    const { data } = useQuery(['premieres'], () => FilmServices.getPremiers());

    const premieresCarouselCards = data?.data.items.map((premiere) => (
        <div key={premiere.kinopoiskId} className={style.carousel_card}>
            <img
                src={premiere.posterUrlPreview}
                alt={premiere.nameRu}
                // style={{ width: '100%' }}
            />
        </div>
    ));

    return <Carousel items={premieresCarouselCards} />;
};
