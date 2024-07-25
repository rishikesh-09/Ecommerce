// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Carousel from './components/Carousel';

// const App = () => {
//   return (
//     <div className="app-root">
//       <CssBaseline />
//       <Header />
//       <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 2 }}>
//         <Carousel />
//       </Box>
//       <Footer />
//     </div>
//   );
// };

// export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';;
import Products from './components/Products';

const App = () => {
  return (
    <Router>
      <div className="app-root">
        <CssBaseline />
        <Header />
        <Box className="content" sx={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 4 }}>
          <Routes>
            <Route path="/" element={<Carousel />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Box>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
