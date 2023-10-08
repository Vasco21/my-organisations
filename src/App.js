import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import GlobalStyles from './Styles/GlobalStyles';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import MyNotes from './screens/MyNotes/MyNotes';
import Donate from './screens/sections2/Donation/PopupSample.js';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import Covid from './screens/sections2/Covid';
import Page from './screens/sections2/page-2';
import Contact from './screens/sections/Contact';
import ScrollButton from './scrollToTop/scrollBtn.js';
import AppRouter from './AppRouter';
import Talks from './screens/sections2/Talks';
import Insights from './screens/sections2/Offers';
import AllMembers from './screens/sections2/AllMembers';
import TeamMembers from './screens/sections2/TeamMembersCard/Testimonial';
import Stories from './screens/sections2/Stories';

function App() {
  const [search, setSearch] = useState("");
  return (
    <Router>
      <GlobalStyles />
      <Header setSearch={(s) =>new  setSearch(s)} />
      <main className="App">
        <Routes>
           <Route path="/" element={<LandingPage />} exact />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/layout/*" element={<AppRouter />} />
          <Route
            path="/mynotes"
            element={({ history }) => <MyNotes search={search} history={history} />} // Pass history as a prop here
          />

          <Route path="/payment" element={<Donate />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/talks" element={<Talks />} />
          <Route path="/page" element={<Page />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/covid" element={<Covid />} />
          <Route path="/members" element={<AllMembers />} />
          <Route path="/teamMembers" element={<TeamMembers />} />
        </Routes>
      </main>
      <Footer />
      <ScrollButton />
    </Router>
  );
}

export default App;