import React from 'react'
import { CarouselStyle } from '../Assest/Style/abstracts/Stylecomponent';
import image1 from '../Assest/Images/carousel/image1.jpg';
import image2 from '../Assest/Images/carousel/image2.jpg';
import image3 from '../Assest/Images/carousel/image3.jpg';

const Slide = (props) => {
  return (
    <CarouselStyle>
      <img src={props.image.link} alt="Sliderr_image" style={{ width: '100%', marginTop: '-63px' }} />
      <h3>
        {props.image.title}
      </h3>
      <span >
        <button onClick={props.slidePrev}>
          {"<"}
        </button>

        <button onClick={props.slideNext}>
          {">"}
        </button>
      </span>
    </CarouselStyle>
  );
};
const Carausell = (props) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = [
    {
      id: 1,
      title: "متن کوتاه اسلاید اول",
      link: image1
    },
    {
      id: 2,
      title: "اسلاید دوم ",
      link: image2
    },
    {
      id: 3,
      title: "متن کوتاه اسلاید سوم ",
      link: image3
    }
  ];
  const slideNext = (e) => {
    setCurrentSlide((prev) => {
      return prev + 1 === slides.length ? 0 : currentSlide + 1;
    });
  };
  const slidePrev = (e) => {
    setCurrentSlide((prev) => {
      return prev === 0 ? slides.length - 1 : currentSlide - 1;
    });
  };
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => {
        return prev + 1 === slides.length ? 0 : prev + 1;
      });
    }, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <Slide
        image={slides[currentSlide]}
        slideNext={slideNext}
        slidePrev={slidePrev}
        width="100%"
      />
    </>
  );
};


export default Carausell
