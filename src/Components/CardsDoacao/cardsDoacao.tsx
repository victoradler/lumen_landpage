import React from "react";
import "./cardsDoacao.scss";
import seta from "../../../public/images/seta.svg";

export const Doacao = () => {
  const data = dataCardsDoacao;
  return (
    <section className="container-cards2">
      <h2 className="my-4">Realize sua doação através das nossas contas bancárias, via PIX ou boletos.</h2>
      <div className="line mb-3"></div>
      <div className="content-card-doacao">
        <div className="wrapper">
          {data.map((item, index) => (
            <CardDoacao key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const dataCardsDoacao = [
  {
    title: "Chave Pix",
    cnpj: "lumenserfeliz@gmail.com",
    agencia: "",
    image: "../../../public/images/pix.svg",
    favorecido: "Favorecido: Ação Social Lumen",
  },
  {
    title: "Banco do Brasil",
    cnpj: "CNPJ:04.082.338/0001-90",
    agencia: " Ag.: 2917-5 | Cc.: 30750-5",
    image: "../../../public/images/banco-do-brasil.png",
    favorecido: "Favorecido: Ação Social Lumen",
  },
  {
    title: "Caixa Econômica",
    cnpj: "CNPJ: 04.082.338/0001-90",
    agencia: " Ag.: 1559 | Op: 003 | Cc:6256-9",
    image: "../../../public/images/transferir.png",
    favorecido: "Favorecido: Ação Social Lumen",
  },
  {
    title: "Bradesco",
    cnpj: "CNPJ: 19.614.384/0001-60",
    agencia: " Ag.: 0452-9 | Cc:0025152-6",
    image: "../../../public/images/logo-bradesco-escudo-1024-150x150.png",
    favorecido: "Favorecido: Ação Social Lumen",
  },
];

type CardDoacaoProps = {
  title?: string;
  cnpj?: string;
  agencia?: string;
  image?: string;
  favorecido?: string;
  index?: number;
};

export const CardDoacao = ({
  title,
  cnpj,
  agencia,
  image,
  favorecido,
  index,
}: CardDoacaoProps) => {
  const [selectedCard, setSelectedCard] = React.useState(null);

  const toggleFlip = (index: any) => {
    if (selectedCard === index) {
      setSelectedCard(null);
    } else {
      setSelectedCard(index);
    }
  };
  return (
    <div className={`card ${selectedCard ? "flipped" : ""}`}>
      <input
        type="checkbox"
        id={`card${index}`}
        className="more"
        aria-hidden="true"
        checked={selectedCard === index}
      />
      <div className="content">
        <div className="front" style={{}}>
          <div className="inner">
            <div className="flex-1 w-100">
              <img
                src={image}
                alt="banco do brasil"
                className="mt-4"
                style={{ width: "100px", height: "100px" }}
              />
            </div>

            <label
              htmlFor="card1"
              className="button"
              aria-hidden="true"
              onClick={() => toggleFlip(index)}
            >
              <img src={seta} alt="seta" className="mt-1" />
            </label>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <span className="title_doacao mt-1">{title}</span>
            <span className="title_doacao mt-1">{cnpj}</span>
            <span className="title_doacao mt-1">{agencia}</span>
            <span className="title_doacao mt-1" >{favorecido}</span>
            <label
              htmlFor="card1"
              className="button return"
              aria-hidden="true"
              onClick={toggleFlip}
            >
              <img src={seta} alt="seta" className="mt-1 icon-rotate" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
