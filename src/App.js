import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css' 
import "font-awesome/css/font-awesome.min.css";
import Home from "./components/Home";


import { PicProvider } from "./components/PicContext";

function App() {

  return (
 <PicProvider>

   <Home />
  
 </PicProvider>
 
  );
}

export default App;
