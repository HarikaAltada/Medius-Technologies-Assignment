import React, { useState } from "react";
import "./MortgageCalculator.css"; // Import the custom styles

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(99528);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [zipCode, setZipCode] = useState("507305");

  const loanAmount = homePrice - downPayment;
  const monthlyInterestRate = interestRate / 100 / 12;
  const numPayments = loanTerm * 12;

  const monthlyPayment =
    (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numPayments));

  return (
    <div className="mortgage-container">
      <div className="mortage-description">
        <h1>Mortgage calculator</h1>
        <p>
          Our mortgage calculator includes key factors like homeowners
          association fees, property taxes, and private mortgage insurance
          (PMI). Get the whole picture and calculate your total monthly payment.
        </p>

        <div className="mortgage-content">
          <div className="mortgage-left">
            <div className="mortgage-right">
              <div>
                <label className="monthly-title">Home price</label>
                <input
                  className="monthly-input"
                  type="text"
                  value={`$${homePrice.toLocaleString()}`}
                  readOnly
                />
              </div>
              <div>
                <label>Monthly payment</label>
                <h2 className="monthly-rate">
                  ${monthlyPayment.toFixed(0)}/mo
                </h2>
              </div>
              <div>
                <button className="pre-approve-btn">Get pre-approved</button>
              </div>
            </div>
            <input
              type="range"
              min="100000"
              max="3000000"
              step="5000"
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
            />
            <div className="interest-mortgage">
              <div className="inputs-row">
                <div>
                  <label>ZIP code</label>
                  <input
                    className="mortgage-input"
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>

                <div>
                  <label>Down payment</label>
                  <div className="down-payment-input">
                    <input
                      className="mortgage-input"
                      type="text"
                      value={`$ ${downPayment.toLocaleString()}`}
                      onChange={(e) =>
                        setDownPayment(
                          Number(e.target.value.replace(/[^0-9]/g, ""))
                        )
                      }
                    />
                    <input
                      style={{ width: "50px", borderLeft: "none" }}
                      className="mortgage-input"
                      type="text"
                      value={`${((downPayment / homePrice) * 100).toFixed(
                        0
                      )} % `}
                    />
                  </div>
                </div>
              </div>

              <div className="inputs-row">
                <div>
                  <label>Interest rate</label>
                  <div>
                    <input
                      className="mortgage-input"
                      style={{ width: "200px" }}
                      type="text"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                    />
                    <input
                      style={{
                        width: "30px",
                        borderLeft: "none",
                        marginRight: "40px",
                      }}
                      value={"%"}
                      className="mortgage-input"
                    />
                  </div>
                </div>

                <div>
                  <label>Length of loan</label>
                  <select
                    className="mortgage-input"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                  >
                    <option value={30}>30 years</option>
                    <option value={20}>20 years</option>
                    <option value={15}>15 years</option>
                    <option value={10}>10 years</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
