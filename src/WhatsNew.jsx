import React from 'react';

const WhatsNew = () => {
  return (
    <>
      <div className="whatsnew-container">
        <h1>What's New</h1>
        <button>Explore Now</button>
      </div>

      <style>{`
        .whatsnew-container {
          margin: 20px;
          padding: 50px;
          border-radius: 12px;
          color: #fff;
          background-image: 
            linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
            url('https://c0.wallpaperflare.com/preview/839/412/980/food-and-drink-pizza-pizzas-tomato.jpg');
          background-size: cover;
          background-position: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          font-family: Arial, sans-serif;
        }

        .whatsnew-container h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-shadow: 0 2px 6px rgba(0,0,0,0.6);
        }

        .whatsnew-container button {
          padding: 12px 30px;
          font-size: 1.1rem;
          font-weight: 600;
          background-color: #f9a825;
          color: #fff;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(249, 168, 37, 0.7);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }

        .whatsnew-container button:hover,
        .whatsnew-container button:focus {
          background-color: #c17900;
          box-shadow: 0 6px 15px rgba(193, 121, 0, 0.85);
          outline: none;
        }
      `}</style>
    </>
  );
};

export default WhatsNew;
