import './App.css';
import Tempwelcomepage from './components/Tempwelcomepage';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import LoginSuccess from './pages/LoginSuccess';
import SubmitEmailOtp from './pages/SubmitEmailOtp';
import { useState } from 'react';
import Thanku from './pages/Thanku';
import ErrorBoundary from './components/ErrorBoundary';
import React from 'react';
function App() {


  return (
    <Router>
      <ErrorBoundary>
        <div className="App">


          {/* <Tempwelcomepage/> */}
          {/* <Loading/> */}
          <Routes>
            <Route path="/" element={<Tempwelcomepage />} />
            <Route path='signup' element={<Signup/>}/>
            <Route path='signup/LoginSuccess' element={<LoginSuccess/>}/>
            <Route path='signup/submitemailotp' element={<SubmitEmailOtp/>}/>
            <Route path='signup/submitemailotp/thankyou' element={<Thanku/>}/>
            <Route path='signup/oops' element={<ErrorBoundary/>}/>
          </Routes>    
          <Footer/>
        </div>
      </ErrorBoundary>
      
    </Router>

    
  );
}

export default App;





// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';

// const pageVariants = {
//   initial: { opacity: 0, x: '100vw' },
//   in: { opacity: 1, x: 0 },
//   out: { opacity: 0, x: '-100vw' }
// };

// const pageTransition = {
//   type: 'tween',
//   ease: 'anticipate',
//   duration: 0.5
// };

// function App() {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode="wait">
//       {/* Ensure Routes has valid Route children */}
//       <Routes location={location} key={location.pathname}>
//         {/* Ensure element prop contains a valid JSX element */}
//         <Route
//           path="/"
//           element={
//             <motion.div
//               initial="initial"
//               animate="in"
//               exit="out"
//               variants={pageVariants}
//               transition={pageTransition}
//             >
//               <Tempwelcomepage />
//             </motion.div>
//           }
//         />
//         <Route
//           path="/signup"
//           element={
//             <motion.div
//               initial="initial"
//               animate="in"
//               exit="out"
//               variants={pageVariants}
//               transition={pageTransition}
//             >
//               <Signup />
//             </motion.div>
//           }
//         />
//          <Route
//           path='signup/LoginSuccess' 
//           element={
//             <motion.div
//               initial="initial"
//               animate="in"
//               exit="out"
//               variants={pageVariants}
//               transition={pageTransition}
//             >
//               < LoginSuccess/>
//             </motion.div>
//           }
//         />
//       </Routes>
//     </AnimatePresence>
//   );
// }

// export default function MainApp() {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// }
