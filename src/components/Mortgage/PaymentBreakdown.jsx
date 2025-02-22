import React, { useState } from "react";
import "./PaymentBreakdown.css"; // Custom styles

const PaymentBreakdown = () => {
  const [values, setValues] = useState({
    principalInterest: 1517,
    propertyTaxes: 220,
    homeownersInsurance: 132,
    hoaFees: 132,
    utilities: 100,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: Number(value) || 0,
    }));
  };

  return (
    <div className="payment-container">
      {/* Left - Progress Bar */}
      <div className="progress-section">
        <h3 className="payment-title">Monthly payment breakdown</h3>
        <p className="payment-amount">
          ${Object.values(values).reduce((a, b) => a + b, 0)}/mo
        </p>

        <div className="progress-bar">
          <div
            className="bar principal-interest"
            style={{ width: `${(values.principalInterest / 2146) * 100}%` }}
          ></div>
          <div
            className="bar property-taxes"
            style={{ width: `${(values.propertyTaxes / 2146) * 100}%` }}
          ></div>
          <div
            className="bar homeowners-insurance"
            style={{ width: `${(values.homeownersInsurance / 2146) * 100}%` }}
          ></div>
          <div
            className="bar hoa-fees"
            style={{ width: `${(values.hoaFees / 2146) * 100}%` }}
          ></div>
          <div
            className="bar utilities"
            style={{ width: `${(values.utilities / 2146) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Right - Inputs with Labels */}
      <div className="input-section">
        <div className="input-group">
          <div className="input-utilities green"></div>
          <label>Principal & Interest</label>
          <div className="amount-label">${values.principalInterest}</div>
        </div>

        <div className="input-group">
        <div className="input-utilities blue"></div>
          <label>Property Taxes</label>
          <div className="input-container">
          <div aria-hidden="true" data-testid="input-icon-box" className="input-icon">
             $
             </div>
          <input
            type="number"
            name="propertyTaxes"        
            className="input-field"
            value={values.propertyTaxes}
            onChange={handleChange}
          />
        </div>
         </div>
        <div className="input-group">
        <div className="input-utilities violet"></div>
          <label>Homeowners Insurance</label>
          <div className="input-container">
          <div aria-hidden="true" data-testid="input-icon-box" className="input-icon">
         $
         </div>
          <input
            type="number"
            name="homeownersInsurance"
            className="input-field"
            value={values.homeownersInsurance}
            onChange={handleChange}
          />
        </div>
          </div>
        <div className="input-group">
        <div className="input-utilities yellow"></div>
          <label>HOA Fees</label>
          <div className="input-container">
          <div aria-hidden="true" data-testid="input-icon-box" className="input-icon">
        $
        </div>
          <input
            type="number"
            name="hoaFees"
             className="input-field"
            value={values.hoaFees}
            onChange={handleChange}
          />
        </div>
       </div>
        <div className="input-group">
        <div className="input-utilities red"></div>
          <label>Utilities</label>
          <div className="amount-label">${values.utilities}</div>
        </div>

        <button className="estimate-button">Copy estimate link</button>
      </div>
    </div>
  );
};

export default PaymentBreakdown;

