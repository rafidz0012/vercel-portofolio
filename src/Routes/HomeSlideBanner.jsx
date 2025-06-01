import "../style/HomeSlideBanner.css";
import pecel from "../asset/pecel.jpg";
import sushi from "../asset/sushi.jpg";
import pizza from "../asset/pizza.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const HomeSlideBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <ChevronRightIcon />
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow">
          <ChevronLeftIcon />
        </div>
      </div>
    ),
  };
  return (
    <div>
      <Slider {...settings} className="slide">
        <div className="item">
          <img className="img-slide" src={pecel} alt="" />
        </div>
        <div>
          <img className="img-slide" src={pizza} alt="" />
        </div>
        <div>
          <img className="img-slide" src={sushi} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlideBanner;
