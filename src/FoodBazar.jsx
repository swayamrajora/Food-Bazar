import React from 'react';

const FoodBazar = () => {
  return (
    <div className="container">
      <h2>FOOD BAZAR</h2>
      <h3>WHY FOOD BAZAR?</h3>
      <p>
        India’s rich diversity and vibrant culture shine through its people, traditions, and unique
        regional customs, habits, lifestyles, and festivals. Food Bazar captures these authentic
        expressions—reflecting the deep-rooted emotions and everyday lives of individuals across the
        country.
      </p>
      <p>
        From modern ideas to a wide variety of categories showcasing the flavors, colors, and stories
        of Indian cuisine in all its forms, Food Bazar offers a true taste of India’s culinary heritage.
      </p>
      <p>
        Discover the essence of India’s food culture, celebrating every age group, region, and style—right
        here!
      </p>
      <p className="know-more">Know More</p>

      <style>{`
        .container {
          background-color: #000;
          color: #fff;
          padding: 2px 3rem;
          border-radius: 12px;
          max-width: 1500px;
          margin: 2rem auto;
          font-family: Arial, sans-serif;
          box-shadow: 0 4px 10px rgba(0,0,0,0.5);
        }

        h2 {
          margin-bottom: 0.5rem;
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: 1px;
          
        }

        h3 {
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 1.3rem;
          font-weight: 600;
          color: #f9a825; /* a warm accent color */
        }

        p {
          line-height: 1.5;
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        .know-more {
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          color: #f9a825;
          text-decoration: underline;
          width: fit-content;
        }

        .know-more:hover {
          color: #ffd54f;
        }
      `}</style>
    </div>
  );
};

export default FoodBazar;
