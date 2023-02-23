import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
import './Testimonial.scss';
import { images } from '../../constants';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const testimonials = [
      { name: 'John von Neumann', feedback: "Young man, in mathematics you don't understand things. You just get used to them.", company: '', imageurl: images.git },
      { name: 'Louis Mike', feedback: 'I am a good web developer.', company: 'JavaScript',imageurl: images.javascript },
      { name: 'Jane Wood', feedback: 'I am a good web developer.', company: 'React',imageurl: images.react  },
      { name: 'Luke Goodmann', feedback: 'I am a good web developer.', company: 'Figma',imageurl: images.figma  },
    ]

    const brands = [
      { name: 'JavaScript', imgUrl: images.javascript},
      { name: 'React', imgUrl: images.react},
      { name: 'Figma', imgUrl: images.figma},
      { name: 'Git', imgUrl: images.git}
    ]

    // client.fetch(query).then((data) => {
      setTestimonials(testimonials);
    // });

    // client.fetch(brandsQuery).then((data) => {
      setBrands(brands);
    // });
  }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            {/* <img src={testimonials[currentIndex].imgurl} alt={testimonials[currentIndex].name} /> */}
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);