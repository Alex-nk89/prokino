import Slider from 'react-slick';

interface Props {
    items: JSX.Element[] | undefined;
}

const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                adaptiveHeight: true,
                arrows: false,
            },
        },
    ],
};

export const Carousel: React.FC<Props> = ({ items }) => {
    const cards = items?.map((card) => card);
    return <Slider {...settings}>{cards}</Slider>;
};
