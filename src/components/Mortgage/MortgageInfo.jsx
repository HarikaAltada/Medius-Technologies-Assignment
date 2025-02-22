import React from "react";
import "./MortgageInfo.css"; // Import custom CSS
import PropertyTaxTable from "./PropertyTaxTable";
import MoreResources from "./MoreResources";
const MortgageInfo = () => {
  return (
    <div className="mortgage-info-container">
      <hr />
      <div className="mortgage-info-section">
        <h2>How does a mortgage calculator help me?</h2>
        <p>
          When deciding how much house you can afford, one of the most important
          pieces to determine is whether a home will fit into your monthly
          budget. A mortgage calculator helps you understand the monthly cost of
          a home. And ours will allow you to enter different down payments and
          interest rates to help determine what is affordable for you.
        </p>
      </div>
      <hr />
      <div className="mortgage-info-section">
        <h2>How much monthly mortgage payment can I afford?</h2>
        <p>
          Lenders determine how much you can afford on a monthly housing payment
          by calculating your <a href="#">debt-to-income ratio (DTI)</a>. The
          maximum DTI you can have in order to qualify for most mortgage loans
          is often between 45–50%, with your anticipated housing costs included.
        </p>
        <p>
          Your DTI is the balance between your income and your debt. It helps
          lenders understand how safe or risky it is for them to approve your
          loan. A DTI ratio represents how much of your gross monthly income is
          spoken for by creditors, and how much of it is left over to you as
          disposable income. It’s most commonly written as a percentage. For
          example, if you pay half your monthly income in debt payments, you
          would have a DTI of 50%.
        </p>
      </div>
      {/* Debt-to-Income Ratio Section */}
      <div className="dti-section">
        <div>
          <p>Formula for calculating your debt-to-income (DTI) ratio:</p>

          <img
            src="./assets/dti-formula.jpg"
            alt="formula"
            className="dti-formula"
          />

          <p>Here’s an example of what calculating your DTI might look like:</p>
          <div className="dti-income">
            <img
              src="./assets/dti-example.jpg"
              alt="formula"
              className="dti-formula"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="mortgage-info-section">
        <h2>How to calculate monthly mortgage payments</h2>
        <p>
          Your monthly mortgage payment includes loan principal and interest,
          property taxes, homeowners insurance, and mortgage insurance (PMI), if
          applicable. While not typically included in your mortgage payment,
          homeowners also pay monthly utilities and sometimes pay homeowners
          association (HOA) fees, so it’s a good idea to factor these into your
          monthly budget. This mortgage calculator factors in all these typical
          monthly costs so you can really crunch the numbers.
        </p>
      </div>
      <div className="mortgage-info-section">
        <h2>Formula for calculating monthly mortgage payments</h2>
        <p>
          The easiest way to calculate your mortgage payment is to use a
          calculator, but for the curious or mathematically inclined, here’s the
          formula for calculating principal and interest yourself:
        </p>
      </div>
      <div className="dti-section">
        <div className="dti-income">
          <img
            src="./assets/monthly-mortgage-payments-formula.jpg"
            alt="formula"
            className="dti-formula"
          />
        </div>
        <div>
          <p className="text-primary">Where:</p>
          <ul className="list-disc">
            <li>
              <p className="text-primary">
                <b>M</b> is monthly mortgage payments
              </p>
            </li>
            <li>
              <p className="text-primary">
                <b>P</b> is the principal loan amount (the amount you borrow)
              </p>
            </li>
            <li>
              <p className="text-primary">
                <b>r</b> is the monthly interest rate
                <br />
                (annual interest rate divided by 12 and expressed as a decimal)
                <br />
                <small>
                  For example:
                  <br />
                  if the annual interest rate is <b>5%</b>,
                  <br />
                  the monthly rate would be <b>0.05/12</b> = .00417, or{" "}
                  <b>.417%</b>
                </small>
              </p>
            </li>
            <li>
              <p className="text-primary">
                <b>n</b> is the total number of payments in months
                <br />
                <small>
                  For example:
                  <br />
                  for a 30-year loan, n = 30×12 = <b>360</b> months
                </small>
              </p>
            </li>
          </ul>
          <p className="text-primary">Here’s a simple example:</p>
          <img
            src="./assets/monthly-mortgage-payments-example.jpg"
            alt="Mortgage calculator | Monthly mortgage payment formula example"
            width="780"
            height="221"
            loading="lazy"
          />
        </div>
        <div className="mortgage-info-section">
          <p>
            This formula assumes a fixed-rate mortgage, where the interest rate
            remains constant throughout the loan term. And remember, you’ll
            still need to add on taxes, insurance, utilities, and HOA fees if
            applicable.
          </p>
        </div>
      </div>
      <hr />
      <div className="mortgage-info-section">
        <h2>How to use this mortgage calculator?</h2>
        <p>
          Play around with different home prices, locations{" "}
          <a> down payments</a>, interest rates, and mortgage lengths to see how
          they impact your monthly mortgage payments.
        </p>

        <p>
          Increasing your down payment and decreasing your interest rate and
          mortgage term length will make your monthly payment go down. Taxes,
          insurance, and HOA fees will vary by location. If you enter a down
          payment amount that’s less than 20% of the home price
          <a href="/content/what-is-pmi-or-private-mortgage-insurance/">
            {" "}
            private mortgage insurance (PMI)
          </a>
          costs will be added to your monthly mortgage payment. As the costs of
          utilities can vary from county to county, we’ve included a utilities
          estimate that you can break down by service. If you’re thinking about
          buying a condo or into a community with a Homeowners Association
          (HOA), you can add HOA fees.
        </p>
        <p>
          The only amounts we haven’t included are the money you’ll need to save
          for annual home maintenance/repairs or the costs of home improvements.
          To see how much home you can afford including these costs, take a look
          at the
          <a href="/how-much-house-can-I-afford/">
            Better home affordability calculator
          </a>
          .
        </p>
        <p>
          Fun fact:
          <a href="/content/how-to-calculate-property-tax-on-a-house/">
            Property tax rates
          </a>{" "}
          are extremely localized, so two homes of roughly the same size and
          quality on either side of a municipal border could have very different
          tax rates. Buying in an area with a lower property tax rate may make
          it easier for you to afford a higher-priced home.
        </p>
      </div>
      <div>
        <PropertyTaxTable />
      </div>
      <hr />
      <div className="mortgage-info-section">
        <h2>How is Better’s mortgage calculator different?</h2>
        <h3>
          This mortgage calculator shows your payments with taxes and insurance
        </h3>
        <p>
          The property taxes you contribute are used to finance the services
          provided by your local government to the community. These services
          encompass schools, libraries, roads, parks, water treatment, police,
          and fire departments. Even after your mortgage has been fully paid,
          you will still need to pay property taxes. If you neglect your
          property taxes, you run the risk of losing your home to your local tax
          authority.
        </p>
        <p>
          Your lender will usually require you to have homeowners insurance
          while you're settling your mortgage. This is a common practice among
          lenders because they understand that nobody wants to continue paying a
          mortgage on a home that's been damaged or destroyed.
        </p>
        <p>
          Here's an interesting fact: Once you fully own your home, the choice
          to maintain homeowners insurance is entirely up to you. However, to
          ensure your home is protected against damages caused by fires,
          lightning strikes, and natural disasters that are common in your area,
          it is highly recommended to keep it. Therefore, always factor in these
          costs when using a Mortgage Calculator.
        </p>
      </div>
      <div className="mortgage-info-section">
        <h2>This mortgage calculator shows your mortgage costs with PMI</h2>
        <p>
          PMI, an abbreviation for private mortgage insurance, aids potential
          homeowners in qualifying for a mortgage without the necessity of a 20%
          down payment. By opting for a lower down payment and choosing a
          mortgage with PMI, you can purchase a home sooner, begin accruing
          equity, and keep cash available for future needs. This can all be
          calculated using this Mortgage Calculator.
        </p>
        <p>
          Choosing a mortgage with PMI is a popular option:
          <a href="https://cdn.nar.realtor/sites/default/files/documents/2021-07-realtors-confidence-index-08-23-2021.pdf">
            71% of first-time homebuyers
          </a>
          had a down payment of less than 20% in July 2021.
          <a href="https://fortune.com/2021/08/31/down-payment-on-a-house-how-much-money-to-put-down">
            In 2020, the median down payment for first-time homebuyers was just
            7%, and it hasn’t risen above 10% since 1989.
          </a>
        </p>
        <p>
          PMI is automatically removed from conventional mortgages once your
          home equity reaches 22%. Alternatively, you can request the removal of
          PMI once you've accumulated at least 20% home equity.
        </p>
      </div>
      <div className="mortgage-info-section">
        <h2>This mortgage calculator includes HOA fees</h2>
        <p>
          Homeowners association (“HOA”) fees are typically charged directly by
          a homeowners association, but as HOA fees come part and parcel with
          condos, townhomes, and planned housing developments, they’re an
          essential factor to consider when calculating your mortgage costs.
        </p>
        <p>
          Homes that share structural elements, such as roofs and walls, or
          community amenities like landscaping, pools, or BBQ areas, often
          require homeowners to pay HOA fees for the maintenance of these shared
          features. It's important to factor in these costs during your budget
          planning stage, especially considering that HOA fees typically
          increase annually. HOAs may also charge additional fees known as
          ‘special assessments’ to cover unexpected expenses from time to time.
        </p>
      </div>
      <hr />
      <div className="mortgage-info-section">
        <h2>How to reduce your monthly mortgage payments?</h2>
        <p>
          The lower the purchase price of the home, the lower your loan amount
          will be. But if the seller is less than willing to cut you a deal, you
          have other options.
        </p>
        <h3>Extend the length of your mortgage</h3>
        <p>
          The more time you have to pay off the mortgage, the less each monthly
          mortgage payment will be. (In lender-speak, ‘extending the length of
          your mortgage’ is known as ‘increasing your loan term’.) This is why
          people often choose a 30-year fixed rate mortgage over one with a 15-
          or 20-year term.
        </p>
        <h3>Increase your down payment</h3>
        <p>
          The smaller the amount of your mortgage, the smaller your monthly
          mortgage payments will be. If you’re able to put at least 20% of the
          home price towards your
          <a href="/content/how-much-should-you-put-down-on-a-house/">
            down payment
          </a>
          , you’ll be able to avoid PMI (private mortgage insurance). Even if
          you can’t afford a complete 20% down payment, boosting your down
          payment will help you get PMI removed sooner. In fact, boosting your
          down payment by 5% can lower your monthly PMI fees.
        </p>
        <h3>Get a lower interest rate</h3>
        <p>
          Increasing your down payment can be one way to help you qualify for a
          lower interest rate. The amount of your down payment compared to the
          total amount of the loan is called your
          <a href="/content/3-most-important-numbers-mortgage-application/">
            loan-to-value ratio (LTV)
          </a>
          .
        </p>
        <p>
          Depending on your loan amount, a lower LTV may increase the likelihood
          of you being offered a low interest rate. If you intend on keeping
          your home for a while, you could consider buying
          <a href="/content/points-credits-and-how-to-decide-if-theyre-right-for-you/">
            points
          </a>
          to reduce your interest rate. Buying points essentially means you
          agree to pay more upfront costs in exchange for a lower monthly
          payment.
        </p>
        <p>
          If you think you may sell or refinance the home in the first 5-10
          years of the mortgage, you could consider an
          <a href="/content/so-youre-considering-an-adjustable-rate-mortgage/">
            adjustable-rate mortgage (ARM)
          </a>
          . An ARM offers a lower fixed interest rate for a set introductory
          period—typically 5, 7, or 10 years. Once the set introductory period
          ends, the interest rate adjusts (interest rate may increase after
          consummation). The introductory interest rate for ARMs is typically
          lower than the interest rate for a conventional fixed-rate mortgage
          which could make it a great way to save on interest if you know you
          won’t keep the mortgage for long.
        </p>
        <p>
          If you’re not planning on buying a home for a while, improving your
          credit score is a tried and true way of increasing your chances of
          qualifying for a lower interest rate. By reducing your
          <a href="/content/3-most-important-numbers-mortgage-application/">
            debt-to-income ratio (DTI)
          </a>
          , lenders will see that you comfortably afford your mortgage and may
          be more willing to offer a lower interest rate.
        </p>
      </div>
      <hr />
      <div className="mortgage-info-section">
        <h2>How much home can I afford?</h2>
        <p>
          Once again, the easiest way to do this is with a calculator! To know
          if a home is in your budget, try out our
          <a href="/how-much-house-can-I-afford/">
            home affordability calculator
          </a>
          . This calculator will take a few inputs from you, like income and
          savings, and let you know the maximum amount of home you can afford.
        </p>
      </div>
      <div className="mortgage-info-section">
        <h2>Next steps to buying a house</h2>
        <p>
          There are
          <a href="/content/steps-to-buying-a-house/">
            8 steps to buying a house
          </a>
          and by using this calculator you’ve completed step 2 (calculating your
          home affordability) and maybe even step 1 (getting your finances in
          order).
        </p>
        <p>
          The next step is getting pre-approved. A mortgage pre-approval with
          Better Mortgage takes as little as 3-minutes and doesn’t impact your
          credit score. It’s a free, no-commitment way to see how much home you
          can buy, the mortgages you qualify for, and the range of interest
          rates you’ll be offered.
        </p>
        <p>
          If you’re ready to buy a home now, our
          <a href="/content/the-definitive-home-buying-checklist/">
            definitive home buying checklist
          </a>
          can walk you through everything you need to know to get the home you
          want. With your Better Mortgage pre-approval letter in hand, you’ll be
          able to show sellers and real estate agents that you mean
          business—giving you an edge over homebuyers that don’t have this kind
          of proof that they’re financially ready to purchase. And by working
          with an agent from Better Real Estate and funding with Better
          Mortgage, you’ll save $2,000 on closing costs, and save up to $8,200
          on average over the life of your loan.**
        </p>
      </div>
      <hr />

      <div>
        <MoreResources />
      </div>
    </div>
  );
};

export default MortgageInfo;
