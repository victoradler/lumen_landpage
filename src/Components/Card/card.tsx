import React from "react";
import "./card.scss";
import { Button } from "../Button/button";

export const CardLumen = () => {
  return (
    <section className="card-lumen heartbeat mb-5">
      <div className="d-flex flex-column align-items-center w-50 lh-1">
        <span>Estamos com:</span>
        <span className="porcentagem_title">69,50%</span>
        <span className="mt-1">da meta de junho.</span>
      </div>
      <div className="d-flex flex-column align-items-center card-2 ">
        <span className="mt-3">
          Cada vida que você salva, é o mundo que você muda!
        </span>
        <span>
          Cadastre-se e torne-se um doador mensal do Projeto Ser Feliz!
        </span>
        <Button />
      </div>
    </section>
  );
};
