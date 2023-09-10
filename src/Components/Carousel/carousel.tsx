// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./carousel.scss";
import projeto1 from "../../../public/images/projeto1.png";
import bale from "../../../public/images/bale2.png";
import arte from "../../../public/images/arte.png";

function Carousel() {
  return (
    <section className="container-carousel my-5">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card-carousel ">
            <div>
              <img src={projeto1} height={50} />
              <div className="d-flex flex-column text-start px-2 mt-2">
                <h3 className="text-center">
                  <strong>Bom Samaritano</strong>
                </h3>
                <span>
                  O projeto bom samaritano é um verdadeiro encontro com Jesus
                  Abandonado. nas ruas e praças de Fortaleza a conversa, o
                  abraço, se torna mais real à luz do carisma. Com programação
                  em alguns dias da semana e diversas rotas, a cultura do
                  encontro é difundida e vivida em comunidade.
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-carousel">
            <div>
              <img src={bale} height={50} />
              <div className="d-flex flex-column text-start justify-content-center px-2 mt-2">
                <h3 className="text-center">
                  <strong>EncontrArte</strong>
                </h3>
                <span>
                  O EncontrArte é o encontro de formação artística organizado
                  pelo Ministério Geral de Artes Lumen! É um encontro aberto
                  onde todos os que se identificam com a evangelização através
                  das artes podem participar.
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-carousel">
            <div>
              <img src={arte} height={50} />
              <div className="d-flex flex-column text-start px-2 mt-2">
                <h3 className="text-center">
                  <strong>LançArte</strong>
                </h3>
                <span>
                  O LançArte tem como missão organizar apresentações para o o
                  público infantil e adulto da comunidade, promover
                  workshops/oficinas artísticas e participar di espetáculo
                  infantil no Natal Lumen.
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Carousel;
