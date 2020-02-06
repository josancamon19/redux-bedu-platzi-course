import React from "react";
import Menu from "./Menu";

const Layout = (props) => (
    <>
        <Menu/>
        {props.children}
    </>
);

export default Layout;
