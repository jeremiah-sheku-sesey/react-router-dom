import React from "react";

import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";

import  Home  from './pages/Home'
import  About  from './pages/About'
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Books from "./pages/Books";
import BookLayout from "./pages/BookLayout"
import NewOrder from "./pages/NewOrder";
import NotFound from "./pages/NotFound";



function App() {

  const [state, setState] = useState('Hello world')
  useEffect(
    ()=>{
    document.title='app | home'
    }
  );

  
  return (
      
    <>
  
    <NavBar />

    <h1>{ state }</h1>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/about" element={<About /> } / >
          {/* nested Routes */}
        <Route path="/books" element={<BookLayout />}>
            <Route index element={<Books />} />
            <Route path=":id" element={< Books/> } /> 
            <Route path="order" element={<NewOrder/>} />
        </Route>

        {/* <Route path="/books/:id" element={<Books /> } / >
        <Route path="/books" element={<Books /> } / >
        <Route path="/books/order" element={<NewOrder /> } / > */}

        <Route path="/services" element={<Services /> } / >
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  );
}

export default App;
