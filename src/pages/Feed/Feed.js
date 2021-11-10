import React, {useEffect, useState} from 'react'
import firebase from 'firebase';
import { CardFeedContainer,CardFeedWrapper } from './Feed.elements'
import {CardFeed} from '../../components/CardFeed/CardFeed'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderCustomStyle.css"
import moment from 'moment';
import 'moment/locale/pt';
moment.locale('pt')

export const Feed = (props) => {

    const settings = {
        dots: true,
        speed: 500,
        rows: 2,
        slidesToShow: 1,
        slidesPerRow: 1,
        slidesToScroll: 1,
        autoplay: true,
        randomize: true,
        autoplaySpeed: 10000,
        pauseOnHover: true,
        // dots: true,
        // speed: 500,
        // rows: 2,
        // slidesToShow: 4,
        // slidesPerRow: 1,
        // slidesToScroll: 1,
        // autoplay: true,
        // randomize: true,
        // autoplaySpeed: 10000,
        // pauseOnHover: true,
    };


    const [estado, setEstado] = useState();
    const [pesquisa, setPesquisa] = useState('');

    const times = useUser()

    function useUser() {

      const [usuario, setUser] = useState([]);
      
      useEffect(() => {
        firebase.firestore()
          .collection('grupos')
          .onSnapshot((snapshot) => {
            const newUser = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
            }))

            setUser(newUser)
          })
      }, [])

      return usuario
    }

    return (
        <>
            <CardFeedContainer>
                <CardFeedWrapper>
                    <Slider {...settings}>
                         {times.length > 0 ? times.filter((val) => {
                            console.log(pesquisa)
                            if(pesquisa == "") {
                            return val
                            } else if (val.nome.toLowerCase().includes(pesquisa.toLowerCase())) {
                            return val
                            }}).map( times => <CardFeed 
                              key={times.id_criador} 
                              titulo={times.esporte} 
                              descricao={times.nome} 
                              data={moment(times.data.toDate()).format('Do MMMM YYYY, h:mm')}
                              integrantes={times.limite}
                              titulobotao={"participar"}>
                            </CardFeed>) : <>Não existe registro no banco</>}              
                    </Slider>
                </CardFeedWrapper>
            </CardFeedContainer>
        </>     
    )
}