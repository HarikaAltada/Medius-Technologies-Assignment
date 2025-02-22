import React, { useState } from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";

const sections = {
  products: [
    {
      title: "Buying your first home with Better",
      image: "./assets/first-home.webp",
      width: "380px",
      height: "200px",
      link: "#",
    },
    {
      title: "One Day Mortgage",
      description:
        "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day.",
      image: "./assets/one-day-mortgage.webp",
      width: "350px",
      height: "auto",
      link: "#",
    },
    {
      title: "Better HELOC",
      description:
        "Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit",
      image: "./assets/better-heloc.webp",
      width: "330px",
      height: "280px",
      link: "#",
    },
    {
      title: "Insurance",
      image: "./assets/insurance.webp",
      width: "380px",
      height: "auto",
      link: "#",
    },
  ],
  calculators: [
    {
      title: "Mortgage Calculator",
      image: "./assets/mortgage-calculator.webp",
      width: "380px",
      height: "200px",
      link: "#",
    },
    {
      title: "Affordability Calculator",
      description:
        "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.",
      image: "./assets/affordability-calculator.webp",
      width: "350px",
      height: "auto",
      link: "#",
    },
    {
      title: "HELOC calculator",
      description:
        "Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.",
      image: "./assets/heloc-calculator.webp",
      width: "330px",
      height: "280px",
      link: "#",
    },
    {
      title: "Fixed-rate loan comparison calculator",
      image: "./assets/fixed-rate-calculator.webp",
      width: "380px",
      height: "auto",
      link: "#",
    },
  ],
  guides: [
    {
      title: "What is good debt-tp-income ratio for a home",
      image: "./assets/good-dti.webp",
      width: "380px",
      height: "170px",
      link: "#",
    },
    {
      title: "Buying a house without realtor",
      description:
        "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.",
      image: "./assets/buy-house-without-realtor.webp",
      width: "350px",
      height: "320px",
      link: "#",
    },
    {
      title: "Timeline for homebuying Process",
      description:
        "Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.",
      image: "./assets/loan-timeline.webp",
      width: "330px",
      height: "auto",
      link: "#",
    },
    {
      title: "Conventional loan requirements",
      image: "./assets/conventional-loan.webp",
      width: "380px",
      height: "190px",
      link: "#",
    },
  ],
};

const ProductCard = ({
  title,
  description,
  section,
  image,
  link,
  index,
  width,
  height,
}) => {
  const cardClass = index === 0 || index === 3 ? "wide-card" : "narrow-card";
  const contentClass =
    index === 0 || index === 3
      ? "product-content-wide"
      : "product-content-narrow";
  const navigate = useNavigate();

  const handleClick = () => {
    if (section === "calculators" && index === 0) {
      navigate("/mortgage");
    }
  };
  return (
    <div
      className={`product-card ${cardClass}`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className={contentClass}>
        <div>
          <h3>{title}</h3>
          {description && <p>{description}</p>}
          <a href={link} className="product-link">
            <svg
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
              class="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] [&amp;_path]:fill-[#004733] group-hover:[&amp;_path]:fill-white [&amp;_rect]:stroke-[#A4A8A4] group-hover:[&amp;_rect]:stroke-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.843384"
                width="47"
                height="47"
                rx="23.5"
                stroke="#A4A8A4"
              ></rect>
              <path
                d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                fill="#004733"
              ></path>
            </svg>
          </a>
        </div>
        <div>
          {image && (
            <img
              src={image}
              alt={title}
              className="product-image"
              style={{ width, height }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [activeSection, setActiveSection] = useState("products");

  return (
    <div className="products-container">
      <div className="products-header">
        <h2>Got questions? We've got answers</h2>

        {/* Toggle Buttons */}
        <div className="toggle-buttons">
          <button
            className={activeSection === "products" ? "active" : ""}
            onClick={() => setActiveSection("products")}
          >
            Our products
          </button>
          <button
            className={activeSection === "calculators" ? "active" : ""}
            onClick={() => setActiveSection("calculators")}
          >
            Calculators
          </button>
          <button
            className={activeSection === "guides" ? "active" : ""}
            onClick={() => setActiveSection("guides")}
          >
            Guides & FAQs
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="products-grid">
        {sections[activeSection].map((item, index) => (
          <ProductCard
            key={index}
            index={index}
            section={activeSection}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
