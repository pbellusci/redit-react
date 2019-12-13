import React from 'react';
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./redux/store";
import './App.css';
import Home from "./components/home";

function App() {
  return (
    <Provider store={store}>
      <Container className='App h-100 d-flex flex-column' fluid={true}>
        <Home />
      </Container>
    </Provider>
  );
}

export default App;
