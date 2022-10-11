import Slider from 'react-slick';

interface Props {
    items: JSX.Element[] | undefined;
}

const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    draggable: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                adaptiveHeight: true,
            },
        },
    ],
};

export const Carousel: React.FC<Props> = ({ items }) => {
    const cards = items?.map((card) => card);
    return <Slider {...settings}>{cards}</Slider>;
};
