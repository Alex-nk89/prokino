import Slider from 'react-slick';
import React, {FC} from "react";
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import { MAIN_COLOR} from "../../../constants";

// @ts-ignore
import { CustomArrowProps } from '@types/react-slick'

interface Props {
    items: JSX.Element[] | undefined;
}

const arrowStyle = {
    position: 'absolute',
    transform: 'translateY(-50%)',
    top: '50%',
    zIndex: '10',
    cursor: 'pointer'
}

const PrevArrow: FC<CustomArrowProps> = (props) => {
    const { onClick } = props;

    // @ts-ignore
    return <div onClick={onClick} style={arrowStyle}><ArrowBackIosNew sx={{ fill: MAIN_COLOR }}/></div>
}

const NextArrow: FC<CustomArrowProps> = (props) => {
    const { onClick } = props;

    // @ts-ignore
    return <div onClick={onClick} style={{...arrowStyle, right: 0 }}><ArrowForwardIos sx={{ fill: MAIN_COLOR}}/></div>
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
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
};



export const Carousel: React.FC<Props> = ({ items }) => {
    const cards = items?.map((card) => card);
    return <Slider {...settings}>{cards}</Slider>;
};
