// import React, { useState, useRef, useEffect } from 'react';

// export default function Navbar() {
//   const [isHovered, setIsHovered] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const sidebarRef = useRef();

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     }

//     if (menuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [menuOpen]);

//   return (
//     <>
//       {menuOpen && (
//         <div ref={sidebarRef} className="sidebar">
//           <h4>Menu</h4>
//           <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Categories</a></li>
//             <li><a href="#">Offers</a></li>
//             <li><a href="#">Contact</a></li>
//           </ul>
//         </div>
//       )}

//       <nav className="navbar">
//         <div className="left-section">
//           <button 
//             onClick={() => setMenuOpen(!menuOpen)} 
//             aria-label="Toggle menu"
//             className="menu-btn"
//           >
//             &#9776;
//           </button>
//           <span className="browse-text">Explore</span>
//         </div>

//         <h2 className="logo">Food Bazar</h2>

//         <div className="right-section">
//           <a href="#" className="pricing-link">Pricing</a>
//           <button
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             className={`sign-in-btn ${isHovered ? 'hovered' : ''}`}
//           >
//             Sign In
//           </button>
//         </div>
//       </nav>

//       <style>{`
//         .sidebar {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 220px;
//           height: 100vh;
//           background-color: #f9f9f9;
//           padding: 1.5rem 1.2rem;
//           box-shadow: 2px 0 8px rgba(0,0,0,0.15);
//           z-index: 1000;
//           border-top-right-radius: 12px;
//           border-bottom-right-radius: 12px;
//           font-family: Arial, sans-serif;
//         }

//         .sidebar h4 {
//           margin-bottom: 1.5rem;
//           color: #333;
//           font-weight: 700;
//           font-size: 1.3rem;
//           border-bottom: 1px solid #ddd;
//           padding-bottom: 0.5rem;
//         }

//         .sidebar ul {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }

//         .sidebar ul li {
//           margin-bottom: 1rem;
//         }

//         .sidebar ul li a {
//           color: #555;
//           text-decoration: none;
//           font-weight: 600;
//           transition: color 0.3s ease;
//         }

//         .sidebar ul li a:hover {
//           color: #f9a825;
//         }

//         .navbar {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 1rem 2rem;
//           background-color: #fff8e1; /* very light warm */
//           border-bottom: 2px solid #f9a825;
//           box-shadow: 0 2px 6px rgba(0,0,0,0.05);
//           font-family: Arial, sans-serif;
//           position: relative;
//           z-index: 10;
//         }

//         .left-section {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//         }

//         .menu-btn {
//           font-size: 1.6rem;
//           background: none;
//           border: none;
//           cursor: pointer;
//           color: #f9a825;
//           transition: color 0.3s ease;
//           padding: 0;
//         }

//         .menu-btn:hover {
//           color: #c17900;
//         }

//         .browse-text {
//           font-weight: 600;
//           color: #444;
//           user-select: none;
//         }

//         .logo {
//           font-weight: 900;
//           color: #f9a825;
//           font-size: 1.8rem;
//           letter-spacing: 2px;
//           margin: 0;
//         }

//         .right-section {
//           display: flex;
//           align-items: center;
//           gap: 1.5rem;
//         }

//         .pricing-link {
//           text-decoration: none;
//           color: #444;
//           font-weight: 600;
//           font-size: 1rem;
//           transition: color 0.3s ease;
//         }

//         .pricing-link:hover {
//           color: #f9a825;
//           text-decoration: underline;
//         }

//         .sign-in-btn {
//           padding: 0.5rem 1.4rem;
//           background-color: #f9a825;
//           color: #222;
//           border: none;
//           border-radius: 25px;
//           font-weight: 700;
//           cursor: pointer;
//           box-shadow: 0 3px 7px rgba(249,168,37,0.6);
//           transition: background-color 0.3s ease, box-shadow 0.3s ease;
//           user-select: none;
//         }

//         .sign-in-btn.hovered,
//         .sign-in-btn:focus {
//           background-color: #c17900;
//           box-shadow: 0 5px 15px rgba(193,121,0,0.8);
//           outline: none;
//           color: white;
//         }

//         /* Responsive */
//         @media (max-width: 600px) {
//           .navbar {
//             flex-direction: column;
//             gap: 0.8rem;
//           }
//           .right-section {
//             gap: 1rem;
//           }
//           .browse-text {
//             font-size: 0.9rem;
//           }
//           .logo {
//             font-size: 1.4rem;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

// export default App;
// import React from 'react'

// const App = () => {
  
//   const [data,setData] = React.useState(1);
//   const clicked=()=>{
//     setData(data+1);
//   }
//   return (
//     <div>
//       {data}
//       <button onClick={clicked}>Click</button>
//     </div>
//   )
// }

// export default App
// import React,{memo} from 'react'

// const App = () => {
//   console.log("a");
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default memo(a)
