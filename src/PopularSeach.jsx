import React from 'react';

const categories = ['Dessert', 'Fast Food', 'Spicy Food', 'Healthy', 'Drinks', 'Vegan', 'Snacks'];

const PopularSearch = () => {
  return (
    <div className="container">
      <h2>Popular Searches</h2>
      <div className="button-group">
        {categories.map((category, index) => (
          <button key={index} className="category-btn">
            {category}
          </button>
        ))}
      </div>

      <style>{`
        .container {
          max-width: 1500px;
          margin: 2rem auto;
          padding: 1rem;
          text-align: center;
          font-family: Arial, sans-serif;
        }

        h2 {
          margin-bottom: 1.5rem;
          font-weight: 700;
          color: #333;
        }

        .button-group {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        .category-btn {
          background-color: #f9a825;
          border: none;
          border-radius: 25px;
          padding: 0.6rem 1.5rem;
          font-size: 1rem;
          color: white;
          cursor: pointer;
          box-shadow: 0 3px 6px rgba(0,0,0,0.2);
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .category-btn:hover {
          background-color: #c17900;
          transform: scale(1.05);
        }

        .category-btn:focus {
          outline: none;
          box-shadow: 0 0 0 3px #ffd54f;
        }
      `}</style>
    </div>
  );
};

export default PopularSearch;
