import React, { useState } from 'react';
import './slider.css'; 

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://listsach.com/wp-content/uploads/2020/10/top-nhung-cuon-sach-truyen-tieu-thuyet-hay-nhat-nen-doc-2020-1024x576.jpg',
    'https://womenswaymooncycles.com/home123/wp-content/uploads/2016/02/Slider-Book.jpg',
    'https://d28hgpri8am2if.cloudfront.net/book_images/onix/interior_spreads/9781849758550/101-burgers-sliders-9781849758550.in01.jpg',
    'https://haycafe.vn/wp-content/uploads/2022/03/anh-sach-800x451.jpg',
    'https://th.bing.com/th/id/OIP.M8Um5ojejgqzUVO0w2YmQQHaE6?pid=ImgDet&rs=1',

    // Thêm các đường dẫn hình ảnh khác vào đây
  ];
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  setTimeout(() => {
    nextSlide()
  }, 2500);
  return (
    <div className="slider-container">
      <div className="slider-item">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
    </div>
  );
};

export default Slider;