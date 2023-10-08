import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './screens/sections/HomeHeder';
import About from './screens/sections/About';
import Mission from './screens/sections/Mission';
import Blog from './screens/sections/Blog';
import Contact from './screens/sections/Contact';
import Faq from './screens/sections/Faq';
import MapMarker from './screens/sections/MapMarker';
import Facts from './screens/sections/Facts';
import TopSection from './screens/sections/TopSection';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
function AppRouter() {
  return (
    <Routes>
      <Route path="/layout" element={<Layout />}>
        <Route path="about" element={<About />} />
        <Route path="mission" element={<Mission />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="mapmarker" element={<MapMarker />} />
        <Route path="facts" element={<Facts />} />
        <Route path="topsection" element={<TopSection />} />
        <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterScreen />} />
      </Route>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRouter;
