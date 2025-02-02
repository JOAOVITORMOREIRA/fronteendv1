// Importando os Componentes React Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importando seu CSS
import "./Carrossel.css";

// Importanto Componentes do Swiper
import { Autoplay, Pagination, Navigation } from "swiper";

function Carrossel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={50}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img src="https://imgur.com/uBNecqE.jpg" alt="Imagem" referrerPolicy="no-referrer" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://imgur.com/wWJMpWl.jpg" alt="Imagem" referrerPolicy="no-referrer" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.imgur.com/153khxC.png" alt="Imagem" referrerPolicy="no-referrer" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.imgur.com/RxL2yjz.jpg" alt="Imagem" />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Carrossel