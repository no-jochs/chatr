import React from "react";
import { UserInterface } from "./types"
import { Container } from "react-bootstrap"
import { Navbar as BSNavbar, NavbarBrand } from "react-bootstrap"


interface NavbarProps { currentUser: UserInterface | null };

export default function Navbar(props: NavbarProps) {
  return(
    <BSNavbar bg="light" expand="lg">
      <Container>
        <NavbarBrand href="/">Chatr</NavbarBrand>
      </Container>
    </BSNavbar>
  )
}