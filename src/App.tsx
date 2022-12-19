import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar currentUser={null}/>
    </BrowserRouter>
  )
}