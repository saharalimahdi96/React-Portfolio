import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    nama: "sahar alimahdi",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit Repellendus reiciendis nobis incidunt obcaecati voluptatem beataearchitecto nihil, cupiditate suscipit facere quo eius inventoreerror ad. Vitae dolorem doloribus cum at",
  },
  {
    avatar: AVTR1,
    nama: "Lorem ipsum",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit Repellendus reiciendis nobis incidunt obcaecati voluptatem beataearchitecto nihil, cupiditate suscipit facere quo eius inventoreerror ad. Vitae dolorem doloribus cum at",
  },
  {
    avatar: AVTR1,
    nama: "sahar alimahdi",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit Repellendus reiciendis nobis incidunt obcaecati voluptatem beataearchitecto nihil, cupiditate suscipit facere quo eius inventoreerror ad. Vitae dolorem doloribus cum at",
  },
  {
    avatar: AVTR1,
    nama: "Lorem ipsum",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit Repellendus reiciendis nobis incidunt obcaecati voluptatem beataearchitecto nihil, cupiditate suscipit facere quo eius inventoreerror ad. Vitae dolorem doloribus cum at",
  },
];
function Testimonial() {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonial__cotainer"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">Ernest Echiver</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonial;
