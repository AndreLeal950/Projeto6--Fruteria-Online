import { Button } from "@chakra-ui/react";
import React, {Fragment} from "react";
import { Outlet } from "react-router-dom";
import {Link as ReachLink} from "react-router-dom";







function Layout() {
  return (
    <Fragment>
    <Button as={ReachLink} to="/">Home</Button>
    <Button as={ReachLink} to="/cart">Carrinho</Button>
     
    <Outlet/>
  </Fragment>

  );
}

export default Layout;
