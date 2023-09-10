import React from "react";
import Boy from "../../../public/images/boy.png";
import "./Home.scss";
import { CardLumen } from "../../Components/Card/card";
import { Cards } from "../../Components/Cards/cards";
import { Doacao } from "../../Components/CardsDoacao/cardsDoacao";
export const Home = () => {
  return (
    <div className="container-home">
      <img src={Boy} className="" />
      <div className="d-flex flex-column align-items-center text-center mt-3 px-4">
        <h1 className="tracking-in-expand-fwd">Seja Bem-Vindo a Lumen!</h1>
        <h3>Quem somos?</h3>
        <p className="text-center ">
          O Ser Feliz é o projeto social da Obra Lumen de Evangelização. Há mais
          de 20 anos, evangelizamos, cuidados e amamos a todos, especialmente
          aqueles que mais sofrem e mais precisam ser amados. Nosso carisma e o
          sentido da nossa existência está quando saímos de nós mesmos e vamos
          ao encontro do outro. Descobrimos que a felicidade está em amar.
        </p>
        <p className="text-center ">
          Assim, recebemos em nossas casas de acolhimento homens, mulheres e
          mães com filhos em situação de rua. Além disso, abrimos as portas dos
          Centros Sociais nos bairros mais carentes das cidades onde estamos
          para cuidar de crianças, jovens e suas famílias em vulnerabilidade,
          afastando-os da violência. Nossas atividades são 100% gratuitas e
          todos são convidados a contribuir e experimentar a alegria do Ser
          Feliz fazendo o outro Feliz!
        </p>
        <CardLumen />
        <Cards />
        <Doacao />
        
      </div>
    </div>
  );
};
