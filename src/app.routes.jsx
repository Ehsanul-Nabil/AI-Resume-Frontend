

import { Route, Routes } from "react-router-dom";
import Register from "./features/auth/pages/Register";
import Login from "./features/auth/pages/Login";
import Protected from './features/auth/components/Protected';
import Home from './features/interview/pages/Home';
import Interview from './features/interview/pages/Interview';
import Profile from "./features/auth/pages/Profile";



const AppRoutes = () => {
    return (
    <div>
      <main className="flex-1 w-full  mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Protected><Profile /></Protected>} />
          <Route 
            path="/" 
            element={<Protected><Home /></Protected>} 
          />
          <Route 
            path="/interview/:interviewId" 
            element={<Protected><Interview /></Protected>} 
          />
     
           </Routes>
      </main>
            
        </div>
    );
};

export default AppRoutes;