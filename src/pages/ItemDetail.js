import "../App.css";
import React, { useState, useEffect } from "react";
import { AiFillCrown } from "react-icons/ai";
import Cart from "./Cart";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

function ItemDetail() {
  const pathname = window.location.pathname;
  const id = pathname.split("/", pathname.length);
  useEffect(() => {
    fetchItems();
    console.log(id);
  }, []);

  const [item, setItem] = useState({ name: "", icon: " " });

  const fetchItems = async () => {
    const data1 = await fetch(`https://localhost:44380/api/Products/${id[1]}`)
      .then((res) => res.json())
      .then((json) => {
        setItem(json);
      });
  };
  
  const addCart = () => {};
  console.log(item);
  return (
    <div>
      <Nav />
      <div class="left" style={{ width: "20%", float: "left" }}>
        <img
          src={item.thumb}
          alt="Loading"
          style={{
            width: "600px",
            height: "700px",
            padding: "20px 20px 20px 20px",
          }}
        ></img>
      </div>
      <div
        class="right"
        style={{
          width: "30%",
          float: "left",
          padding: "100px 300px 450px 450px",
        }}
      >
        <h1>Name: {item.productName}</h1>
        <h2>Price: {item.price}</h2>
        <h2>Tittle: {item.title}</h2>
        <h2>SumProduct: {item.sumproduct}</h2>
        <h2>Description: {item.description}</h2>
        <button onClick={addCart}>
          <h3>Add To Cart</h3>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ItemDetail;
