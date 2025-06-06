import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import WhatsNew from './WhatsNew';
import PopularCollections from './PopularCollections';
import FoodBazar from './FoodBazar';
import PopularSearch from './PopularSeach';
import footer from './footer';

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <WhatsNew />
      <PopularCollections/>
      <FoodBazar/>
      <PopularSearch/>
      {footer()}
    </div>
  );
}
export default App;
 
