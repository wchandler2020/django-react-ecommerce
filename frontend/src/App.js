//react specific imports
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"

//bootstrap imports
import { Container } from "react-bootstrap"
//import user components
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"

function App() {
  return (
    <Router>
      <Header />
        <main className="py-3">
          <Container>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/product/:id" component={ProductPage}/>
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
