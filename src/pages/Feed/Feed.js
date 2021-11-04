import React from 'react'
import { CardFeedContainer,CardFeedWrapper } from './Feed.elements'
import {CardFeed} from '../../components/CardFeed/CardFeed'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderCustomStyle.css"

export const Feed = (props) => {

    const settings = {
        dots: true,
        speed: 500,
        rows: 2,
        slidesToShow: 4,
        slidesPerRow: 1,
        slidesToScroll: 1,
        autoplay: true,
        randomize: true,
        autoplaySpeed: 10000,
        pauseOnHover: true,
    };

    return (
        <>
            <CardFeedContainer>
                <CardFeedWrapper>
                    <Slider {...settings}>
                        <CardFeed titulo={"Futebol"} descricao={"teste"} titulobotao={"participar"}></CardFeed>
                        <CardFeed titulo={"Futebol"} descricao={"teste"} titulobotao={"participar"}></CardFeed>
                        <CardFeed titulo={"Futebol"} descricao={"teste"} titulobotao={"participar"}></CardFeed>
                        <CardFeed titulo={"Futebol"} descricao={"teste"} titulobotao={"participar"}></CardFeed>  
                        <CardFeed titulo={"Futebol"} descricao={"teste"} titulobotao={"participar"}></CardFeed>
                        <CardFeed titulo={"Futebol"} descricao={"teste"} titulobotao={"participar"}></CardFeed>  
                        <CardFeed titulo={"Futebol"} descricao={"teste"} titulobotao={"participar"}></CardFeed>
                        <CardFeed titulo={"Futebol"} descricao={"teste"} titulobotao={"participar"}></CardFeed>
                        <CardFeed titulo={"Futebol"} descricao={"teste"} titulobotao={"participar"}></CardFeed>
                        <CardFeed titulo={"Futebol"} descricao={"teste"} titulobotao={"participar"}></CardFeed>
                        <CardFeed titulo={"Futebol"} descricao={"teste"} titulobotao={"participar"}></CardFeed>
                        <CardFeed titulo={"Futebol"} descricao={"teste"} titulobotao={"participar"}></CardFeed>  
                        <CardFeed titulo={"Futebol"} descricao={"teste"} titulobotao={"participar"}></CardFeed>
                        <CardFeed titulo={"Futebol"} descricao={"teste"} titulobotao={"participar"}></CardFeed>  
                        <CardFeed titulo={"Futebol"} descricao={"teste"} titulobotao={"participar"}></CardFeed>
                        <CardFeed titulo={"Futebol"} descricao={"teste"} titulobotao={"participar"}></CardFeed>            
                    </Slider>
                </CardFeedWrapper>
            </CardFeedContainer>
        </>     
    )
}