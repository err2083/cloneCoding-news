import React from 'react';
import Route from "react-router-dom/es/Route";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
      <Route path='/:category?' component={NewsPage} />
    );
};

export default App;
