import React from "react";
import "./HowWeAreChanging.css";

const HowWeAreChanging = () => {
  return (
    <div className="container">
      <section className="change-section">
        <h2>How we’re changing things</h2>
        <p>
          Homeownership is a huge part of our economy. Housing overall is a $33
          trillion business, and mortgages account for $15 trillion. Yet home
          finance operates in the same way it has for decades — through opaque
          systems and expensive intermediaries whose interests are misaligned
          with consumers’.
        </p>
        <p>
          That’s why Better.com is redefining the homeownership process from the
          ground up. We’re using technology to make it faster and more
          efficient, and humans to help make it friendly and enjoyable.
        </p>
      </section>

      <section className="backed-section">
        <div className="bank-section">
        <h3>Backed by</h3>
        <div className="bank-logos">
          <img src="./assets/SoftBank.svg" alt="SoftBank" />
          <img src="./assets/Ally.svg" alt="Ally" />
          <img src="./assets/Citi.svg" alt="Citi" />
          <img src="./assets/Bank.svg" alt="Ping An Bank" />
          <img src="./assets/GoldmanSachs.svg" alt="Goldman Sachs" />
          <img src="./assets/KPCB.svg" alt="KPCB" />
          <img src="./assets/American.svg" alt="American Express" />
        </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeAreChanging;
