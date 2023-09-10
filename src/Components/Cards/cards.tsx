import "./cards.scss";

export const Cards = () => {
  return (
    <section className="content-cards w-100 gap-5 mb-5 ">
      
      <article className="d-flex flex-column align-item-center">
          <div className="card card0">
            <div className="border"></div>
          </div>
          <span className="mt-2 span-title-cards">Centros Sociais</span>
      </article>
      <article className="d-flex flex-column align-item-center">
          <div className="card card1">
            <div className="border"></div>
          </div>
          <span className="mt-2 span-title-cards">Casas de Acolhimento</span>
      </article>
      <article className="d-flex flex-column align-item-center">
          <div className="card card2">
            <div className="border"></div>
          </div>
          <span className="mt-2 span-title-cards">Projeto Ser Feliz</span>
      </article>
    </section>
  );
};
