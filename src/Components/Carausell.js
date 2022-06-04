import React, { useState, useEffect } from "react";
import { CarouselWrapper } from "react-pretty-carousel";
import {CarouselStyle} from '../Assest/Style/abstracts/Stylecomponent'

export default function Carauesll() {
  const [items, setItems] = useState(3);

  useEffect(() => {
    if (window.innerWidth < 576) setItems(1);
    else setItems(3);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 576) setItems(1);
      else setItems(3);
    });
  }, []);

  return (
    <CarouselStyle>
      <CarouselWrapper items={items} mode="gallery">
        <div className=" img1">aa</div>
        <div className="image image2">bbb</div>
        <div className="image image3">cc</div>
      </CarouselWrapper>
    </CarouselStyle>
  );
}
