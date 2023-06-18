import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Listings from "./containers/Listings";
import ListingDetails from "./containers/ListingDetails";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import NotFound from "./components/NotFound";
import Layout from "./hocs/Layout";

import { Provider } from "react-redux";
import Store from "./store";

import "./sass/Main.scss";

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/listings" element={<Listings />} />
            <Route exact path="/listings/:id" element={<ListingDetails />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
