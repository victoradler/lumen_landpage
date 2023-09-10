import React from "react";
import "./transparencia.scss";
import { Doacao } from "../../Components/CardsDoacao/cardsDoacao";
import projeto from "../../../public/images/social.png";
import Carousel from "react-bootstrap/Carousel";

export const Transparencia = () => {
  return (
    <div className="container-home">
      <img src={projeto} className="" />
      <div className="d-flex flex-column align-items-center text-center mt-3 px-4">
        <h1 className="tracking-in-expand-fwd">Centros Sociais</h1>
        <p className="text-center ">
          Através dos Centros Sociais Lumen, vidas são transformadas! Atendemos
          milhares de crianças, adolescentes e adultos em vulnerabilidade
          social, de várias comunidades carentes de Fortaleza e de outras
          cidades.
        </p>
        <p className="text-center ">
          Oferecemos, gratuitamente, atividades esportivas, educativas,
          culturais, profissionalizantes, de evangelização, atendimento médico e
          odontológico. Nos Centros Sociais as crianças se alimentam, realizam
          as tarefas da escola, fazem muitos amigos e, o mais importante, estão
          próximas do evangelho.
        </p>
        <Carousel>
          <Carousel.Item>
            <iframe
              src="https://www.youtube.com/embed/2RsEamUyyPU?si=llD4XuQD0lXKdrpx"
              title="YouTube video player"
              width={560}
              height={400}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="iframe-video"
            ></iframe>
          </Carousel.Item>
          <Carousel.Item>
            <iframe
              src="https://www.youtube.com/embed/UkN64adDZKk?si=IbnhI4PgjmN_nm9j&amp;start=1"
              width={560}
              height={400}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="iframe-video"
            ></iframe>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <iframe
                src="https://www.youtube.com/embed/-CvxNvJBDO8?si=1r8zlJS9bDlXjLJu"
                width={560}
                height={400}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="iframe-video"
              ></iframe>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Doacao />
      </div>
    </div>
  );
};
