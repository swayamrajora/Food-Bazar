import React from 'react';

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Food Bazar</h3>
          <p>
            Food Bazar brings the diverse flavors of India right to your screen. Celebrate regional
            cuisines, traditional recipes, and modern twists all in one place.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#popular">Popular Collections</a></li>
            <li><a href="#search">Popular Searches</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@foodbazar.com</p>
          <p>Phone: +91 1234567890</p>
          <p>Address: Parul University, Waghodia, Vadodara</p>
        </div>
      </div>


      <style>{`
        .footer {
          background-color: #111;
          color: #eee;
          padding: 2rem 1rem 1rem;
          font-family: Arial, sans-serif;
          margin-top: 3rem;
        }

        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 1000px;
          margin: 0 auto 1.5rem;
        }

        .footer-section {
          flex: 1 1 250px;
          margin: 1rem;
        }

        .footer-section h3 {
          margin-bottom: 1rem;
          color: #f9a825;
        }

        .footer-section p, 
        .footer-section li {
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section ul li {
          margin-bottom: 0.6rem;
        }

        .footer-section ul li a {
          color: #eee;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-section ul li a:hover {
          color: #f9a825;
          text-decoration: underline;
        }

        @media (max-width: 600px) {
          .footer-container {
            flex-direction: column;
            align-items: center;
          }

          .footer-section {
            margin: 1rem 0;
            max-width: 90%;
          }
        }
      `}</style>
    </footer>
  );
};

export default footer;
