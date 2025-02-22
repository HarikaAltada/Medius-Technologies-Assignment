import React from "react";
import "./Timeline.css"; // Custom styles

const timelineData = [
    { year: "2014", text: "After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all." },
    { year: "2015", text: "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!)." },
    { year: "2016", text: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors." },
    { year: "2017", text: "Better expands into the real estate market with Better Real Estate." },
    { year: "2018", text: "Better Mortgage partners with Ally Bank to build Ally powered by Better." },
    { year: "2019", text: "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers." },
    { year: "2021", text: "Better acquires Trussle — The UK’s most innovative online mortgage broker." },
    { year: "2022", text: "Better Mortgage becomes the first fintech to fund $100B home loans entirely online." },
    { year: "2023", text: "Better Mortgage launches One Day Mortgage: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours.", link: "/with/one-day-mortgage-terms" },
    { year: "Today", text: "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers." }
  ];
  
  const Timeline = () => {
    return (
      <section className="timeline-section">
        <h2 className="timeline-title">Company Timeline</h2>
        <div className="timeline">
          {timelineData.map((event, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
              <div className="timeline-content">
                <h3 className="year">{event.year}</h3>
                <p>{event.text}</p>
              </div>
            </div>
          ))}
          <div className="button-container">
            <a href="/start" className="get-started-button">Get Started</a>
          </div>
        </div>
      </section>
    );
  };
export default Timeline;
