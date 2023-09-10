import "./Projetos.scss";
import bale from "../../../public/images/bale.png";
import { Doacao } from "../../Components/CardsDoacao/cardsDoacao";
import Carousel from "../../Components/Carousel/carousel";

export const Projetos = () => {
  return (
    <div className="container-home">
      <img src={bale} className="" />
      <div className="d-flex flex-column align-items-center text-center mt-3 px-4">
        <h1 className="tracking-in-expand-fwd">Projetos Ser Feliz Lumen</h1>
        <p className="text-center ">
          O Ser Feliz gera muitos frutos através do amor. Saímos ao encontro do
          outro para amar porque fomos amados primeiro! E essa é a essência do
          Ser Feliz: amar a todos sem medidas. Assim, o Ser Feliz abraça para
          diversos projetos que levam alegria aos que mais precisam.
        </p>
        <p className="text-center ">
          São diversas atividades de diferentes formas: religiosas, esportivas,
          educacionais, artísticas e muito mais. Voluntários e Missionários se
          unem para proporcionar às crianças, jovens e suas famílias educação,
          evangelização e proteção contra a realidade sofrida social que estão
          inseridas.
        </p>
        <Carousel />
        <Doacao />
      </div>
    </div>
  );
};
