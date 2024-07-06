import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Testimonials.css'; // Import your custom CSS

const testimonials = [
  {
    img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=300',
    name: 'John Doe',
    position: 'Food Blogger',
    text: 'The best food delivery service I have ever used! The meals are always fresh and arrive on time. Highly recommended!'
  },
  {
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&w=301',
    name: 'Jane Smith',
    position: 'Chef',
    text: 'I love the variety of dishes available. It feels like a gourmet experience every time I order. Excellent service!'
  },
  {
    img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=302&w=302',
    name: 'Emily Johnson',
    position: 'Food Critic',
    text: 'The quality of the food is outstanding. It’s always hot and delicious. The customer service is also top-notch.'
  },
  {
    img: 'https://images.unsplash.com/photo-1555992336-03a23c33d934?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&w=303',
    name: 'Michael Lee',
    position: 'Restaurant Owner',
    text: 'As a restaurant owner, I appreciate the professionalism and punctuality of this food delivery service. They never disappoint.'
  }
];

const Testimonials = () => {
  return (
    <div className="gtco-testimonials">
      <h2>Testimonials</h2>
      <Carousel 
        showArrows={true} 
        infiniteLoop={true} 
        showThumbs={false} 
        showStatus={false} 
        autoPlay={true} 
        interval={3000} 
        centerMode={true} 
        centerSlidePercentage={100}
        responsive={[
          {
            breakpoint: 767,
            settings: {
              centerMode: false,
              showArrows: true,
              showStatus: false,
              infiniteLoop: true,
              slidesToShow: 1,
              swipeable: true,
              autoPlay: true,
              interval: 3000,
              centerSlidePercentage: 100
            }
          }
        ]}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="item">
            <div className="card text-center">
              <img className="card-img-top" src={testimonial.img} alt="" />
              <div className="card-body">
                <h5>{testimonial.name}<br /><span>{testimonial.position}</span></h5>
                <p className="card-text">{testimonial.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
