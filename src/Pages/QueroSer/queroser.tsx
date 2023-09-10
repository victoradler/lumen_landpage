import React from "react";
import "./queroser.scss";
import { Doacao } from "../../Components/CardsDoacao/cardsDoacao";
import turma from "../../../public/images/turma.png";

export const QueroSer = () => {
  return (
    <div className="container-home">
      <div className="d-flex flex-column align-items-center text-center mt-3 px-4">
        <img src={turma} className="" />
        <div className="d-flex flex-column align-items-center mt-3 px-4">
          <h1 className="tracking-in-expand-fwd">Casas de Acolhimento Lumen</h1>
          <p className="text-justify ">
            Ao buscarmos olhar e acolher os irmãos com dores e traumas profundos
            causados pelas mais diversas condições humanas precárias, estamos
            resgatando vidas. Irmãos marcados pela marginalidade, indignidade,
            indiferença, pelo preconceito e abandono ganham oportunidades.
          </p>
          <p className="text-center ">
            As Casas de Acolhimento Lumen oferecem aos irmãos um lar repleto de
            amor, cuidado e da presença de Deus. Homens, mulheres e mães com
            seus filhos acolhidos, são amados e cuidados por voluntários e
            missionários. Como diz o Papa Francisco, “se desejas verdadeiramente
            encontrar a Cristo é preciso tocar na carne sofredora de Cristo nos
            pobres”.
          </p>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DtIF0-sqy3o?si=4mOJ4NrnPzKE4G2Y"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="iframe-video"
        ></iframe>
        <Doacao />
      </div>
    </div>
  );
};
