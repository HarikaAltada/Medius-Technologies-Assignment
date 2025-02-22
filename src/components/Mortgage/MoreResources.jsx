import React from "react";
import "./MoreResources.css";

const MoreResources = () => {
  return (
    <section className="resources-section">
      <div>
        <h2 className="resources-title">More resources</h2>
        <div className="resources-container">
          <div className="resource-card">
            <img
              alt="Get pre-approved to see how much you can borrow"
              src="https://media.better.com/better-com/mortgage-calculator/doc-correct.svg"
              width="32"
              height="32"
              loading="lazy"
            />
            <p className="resource-text">
              Get pre-approved to see how much you can borrow
            </p>
            <a
              href="/preapproval/nxt-purchase?utm_source=website&amp;utm_medium=webpage&amp;utm_campaign=calculator&amp;utm_content=mortgage-calculator"
              className="resource-link"
            >
              Get started →
            </a>
            <p className="resource-subtext">Won’t impact your credit</p>
          </div>

          <div className="resource-card">
            <img
              alt="See today’s rates in your area"
              src="https://media.better.com/better-com/mortgage-calculator/downtrend.svg"
              width="32"
              height="32"
              loading="lazy"
            />
            <p className="resource-text">See today’s rates in your area</p>
            <a href="/mortgage-rates" className="resource-link">
              See rates →
            </a>
          </div>

          <div className="resource-card">
            <img
              alt="Find out your max homebuying budget"
              src="https://media.better.com/better-com/mortgage-calculator/calculator.svg"
              width="32"
              height="32"
              loading="lazy"
            />
            <p className="resource-text">Find out your max homebuying budget</p>
            <a href="/how-much-house-can-i-afford" className="resource-link">
              Try our mortgage calculator →
            </a>
          </div>
        </div>
      </div>
      <section className="disclaimer-section">
        <p className="disclaimer-text">
          *See{" "}
          <a
            href="/faq/rates/whats-the-fine-print-better-real-estate/"
            className="disclaimer-link"
          >
            Better Real Estate discount terms and conditions
          </a>
          .
        </p>
        <p className="disclaimer-text">
          **The average lifetime savings estimate is based on a comparison of
          the Freddie Mac Primary Mortgage Market Survey’s (PMMS) 30-year
          fixed-rate mortgage product with Better Mortgage’s own offered rate
          for a comparable mortgage product between Jan ‘20 - Dec ‘20. PMMS is
          based on conventional, conforming fully-amortizing home purchase loans
          for borrowers with a loan-to-value of 80 percent and with excellent
          credit. Better Mortgage’s offered rate is based on pricing output for
          a 30-year fixed-rate mortgage product with a 30-day lock period for a
          single-family, owner-occupied residential property and a borrower with
          excellent (760 FICO) credit and a loan-to-value ratio of 80 percent.
          Individual savings could vary based on current market rates, property
          type, loan amount, loan-to-value, credit score, debt-to-income ratio
          and other variables.
        </p>
      </section>
    </section>
  );
};

export default MoreResources;
