import { BrowserRouter, Routes, Route } from "react-router-dom";

import {LoginView, HomeView} from "../pages"

const Router =()=>{
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginView />} />
            <Route path="/home" element={<HomeView />} />
          </Routes>
        </BrowserRouter>
      );
}

export default Router