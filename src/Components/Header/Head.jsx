import React from "react";
import "./Head.css";
import logo from "../../images/Logo.svg";

const Head = () => {
  return (
    <>
      <nav className="header flex justify-between items-center px-9">
        <img src={logo} alt="" />
        <div className="flex text-white gap-12">
          <a className=" hover:text-orange-400" href="/shop">Shop</a>
          <a className=" hover:text-orange-400" href="/order">Order</a>
          <a className=" hover:text-orange-400" href="/inventory">Inventory</a>
          <a className=" hover:text-orange-400" href="/Login">Login</a>
        </div>
      </nav>
    </>
  );
};

export default Head;
