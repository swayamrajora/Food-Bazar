import React from 'react';
import { CiSearch } from "react-icons/ci";
import { LuImageUp } from "react-icons/lu";

const SearchBar = () => {
  return (
    <>
      <div className="searchbar-container">
        <div className="search-input-group">
          <CiSearch className="search-icon" />
          <input
            type="text"
            aria-label="Search"
            placeholder="Search the largest collection of Indian images"
            className="search-input"
          />
          <select className="search-select" aria-label="Select content type">
            <option>Images</option>
            <option>Videos</option>
          </select>
          <button className="upload-btn" aria-label="Upload">
            <LuImageUp />
          </button>
        </div>
      </div>

      <style>{`
        .searchbar-container {
          padding: 30px 0;
          display: flex;
          justify-content: center;
          border-bottom: 1px solid #ddd;
          background-color: #fff8e1; /* light warm background */
          font-family: Arial, sans-serif;
        }

        .search-input-group {
          display: flex;
          align-items: center;
          max-width: 500px;
          width: 100%;
          background: white;
          border-radius: 30px;
          box-shadow: 0 3px 8px rgba(249, 168, 37, 0.3);
          padding: 0.3rem 0.5rem;
          gap: 0.5rem;
        }

        .search-icon {
          font-size: 1.4rem;
          color: #f9a825;
          margin-left: 0.8rem;
          user-select: none;
        }

        .search-input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 1rem;
          padding: 0.5rem 1rem;
          border-radius: 30px;
          color: #444;
        }

        .search-input::placeholder {
          color: #aaa;
          font-weight: 500;
        }

        .search-input:focus {
          box-shadow: 0 0 5px #f9a825aa;
        }

        .search-select {
          border: none;
          outline: none;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          border-radius: 30px;
          background-color: #f9f9f9;
          cursor: pointer;
          color: #444;
          transition: background-color 0.3s ease;
          user-select: none;
        }

        .search-select:hover,
        .search-select:focus {
          background-color: #fff3b0;
        }

        .upload-btn {
          background-color: #f9a825;
          border: none;
          color: white;
          padding: 0.5rem 0.8rem;
          border-radius: 30px;
          cursor: pointer;
          font-size: 1.3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 3px 7px rgba(249,168,37,0.6);
        }

        .upload-btn:hover,
        .upload-btn:focus {
          background-color: #c17900;
          box-shadow: 0 5px 15px rgba(193,121,0,0.8);
          outline: none;
        }
      `}</style>
    </>
  );
};

export default SearchBar;
