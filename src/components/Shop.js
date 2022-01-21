import "../App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import ReactTable from "react-table";
import Contact from "../pages/Contact";
import Footer from "./Footer";
import Nav from "./Nav";
import SlideImage from "../components/SlideImage";
import DataGrid from "@material-ui/data-grid";
import Pagination from "./Pagination";

const styleh4 = {
  color: "black",
  padding: "10px 10px 10px 10px",
  margin: "auto",
  display: "block-inline",
  textDecoration: "none",
};

const img = {
  // border: "5px solid #ddd",
  padding: "20px 20px 15px 15px",
  width: "500px",
  height: "300px",
};
const stylediv = {
  float: "left",
  padding: "30px 30px 30px 30px",
};



function Shop() {
  const [items, setItems] = useState([]);
  const [renderItems, setRenderItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data1 = await fetch(
      `https://localhost:44380/api/Products`
    )
    .then((res)=> res.json())
    .then((json)=>{
      setItems(json)
    });
  };
  console.log(items);
  console.log(renderItems);
  return (
    <div class="shop">
      <Nav />
      <SlideImage />
      <h1>All Product</h1>
      <table style={{ float: "center", Pagination }}>
        <tr>
          <div style={{ width: "100%" }}>
            {renderItems.map((item, index) => (
              <div style={stylediv}>
                <Link style={styleh4} to={`/${item?.productId}`}>
                <img
                  src={item?.thumb}
                  alt="Loading"
                  style={img}
                >
                </img>
                </Link>
                <h4 key={item?.productId} style={styleh4}>
                  
                  {item?.productName}
                </h4>
                <h5>Price: {item?.price}</h5>
              </div>
            ))}
          </div>
        </tr>
      </table>
      <div style={{ width: "100%" }}>
        <Pagination
          renderItems={renderItems}
          setRenderItems={setRenderItems}
          items={items}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
