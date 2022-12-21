import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import RoomSelector from './RoomSelector'
import Login from './Login'

const chatRooms = [
  { name: "Cats" },
  { name: "Homework Help"},
  { name: "Scuba Diving"},
];

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <BrowserRouter>
      <Navbar currentUser={currentUser}/>
      {!!currentUser ? <RoomSelector rooms={chatRooms} /> : <Login /> }
    </BrowserRouter>
  )
}