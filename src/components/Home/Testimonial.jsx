import React, { useState } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Arian",
    text: "The reason why I decided to go with Better is because after I did my research with the other lenders, Better was the one that provided me with the lowest interest rate.",
    image: "./assets/still-quote-Arian.webp", // Replace with actual image URL
  },
  {
    name: "Amanda",
    text: "Better made the whole mortgage process seamless and easy. I got the best rate with minimal hassle.",
    image: "./assets/still-quote-Amanda.webp", // Replace with actual image URL
  },
  {
    name: "Paul",
    text: "I was able to close my mortgage in record time. The process was smooth and stress-free with Better.",
    image: "./assets/still-quote-Paul.webp", // Replace with actual image URL
  },

];

const Testimonial = () => {
  const [selected, setSelected] = useState(0); // Default to the first testimonial

  return (
    <div className="testimonial-container">
     
        <div className="testimonial-card">
          <img src={testimonials[selected].image} alt={testimonials[selected].name} className="testimonial-image" />
          
        </div>
      

      <div className="testimonial-buttons">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`testimonial-btn ${selected === index ? "active" : ""}`}
            onClick={() => setSelected(index)}
          >
            {testimonials[index].name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
