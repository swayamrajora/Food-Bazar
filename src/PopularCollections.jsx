import React from 'react';

const foodItems = [
  {
    name: 'Pizza',
    image: 'https://images6.alphacoders.com/412/412226.jpg',
  },
  {
    name: 'Burger',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'White Sauce Pasta',
    image: 'https://th.bing.com/th/id/OIP.wjmwzDQ87Zl1Lt1mLswrFgHaE7?rs=1&pid=ImgDetMain',
  },
  {
    name: 'Sushi',
    image: 'https://th.bing.com/th/id/OIP.L0S4qCrWUao4sxr72X3WggHaEo?rs=1&pid=ImgDetMain',
  },
  {
    name: 'Fries',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Salad',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
  },
   {
    name: 'Tacos',
    image: 'https://static.vecteezy.com/system/resources/previews/030/679/761/large_2x/tacos-high-quality-4k-ultra-hd-hdr-free-photo.jpg',
  },
  {
    name: 'Pancakes',
    image: 'https://i.pinimg.com/originals/98/ed/25/98ed2555ad13106540a1a7c8c47abd58.jpg',
  },
  {
    name: 'Donuts',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Steak',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Ramen',
    image: 'https://images6.alphacoders.com/132/1322091.png',
  },
  {
    name: 'Vegetable Bowl',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Grilled Sandwich',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },

];

const PopularCollections = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Popular Collections</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {foodItems.map((item, index) => (
          <div className="food-card" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="overlay">{item.name}</div>
          </div>
        ))}
      </div>


      <style>{`
        .food-card {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .food-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .food-card .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          font-weight: 600;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .food-card:hover img {
          transform: scale(1.05);
        }

        .food-card:hover .overlay {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default PopularCollections;
