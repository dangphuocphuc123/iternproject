import "../App.css";
import React from "react";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SvgIcon from "@mui/material/SvgIcon";
import CallIcon from "@mui/icons-material/Call";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import InfoIcon from "@mui/icons-material/Info";
import { Search } from "@mui/icons-material/Search";
import SearchIcon from "@mui/icons-material/Search";
import SearchIconWrapper from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import StyledInputBase from "@mui/icons-material/Style";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { useState, useEffect} from "react";
import { createSvgIcon } from "@mui/material/utils";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";


function Nav() {
  const styleh4 = {
    color: "black",
    padding: "10px 10px 10px 10px",
    margin: "auto",
    display: "block-inline",
    textDecoration: "none",
  };
  
  const [images, setImages] = useState({});
  const [item, setItem] = useState({ name: "", icon: " " });
  const [items, setItems] = useState([]);
  
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

  const top100Films = items.map((item) => ({
    name: item.productName,
    id: item.productId,
  }));

  // console.log(top100Films);
  const filter = createFilterOptions();
  const [value, setValue] = React.useState(null);
  const HomeIcon = createSvgIcon(
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
    "Home"
  );
  const navStyle = {
    color: "white",
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  return (
    <nav style={{ padding: "10px 10px 10px 10px" }}>
      <Link to="/">
        <button>
          <img
            className="image_logo"
            src="https://dbdzm869oupei.cloudfront.net/img/vinylrugs/preview/35257.png"
          ></img>
        </button>
      </Link>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setValue({
              name: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            setValue({
              name: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          const { inputValue } = params;
          const isExisting = options.some(
            (option) => inputValue === option.name
          );
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              inputValue,
              name: `Add "${inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={top100Films}
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.name;
        }}
        renderOption={(props, option) => (
          <Link {...props} to={`/${option.id}`} style={styleh4}>
            {option.name}
          </Link>
        )}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label="Search Product" />
        )}
      />
      );
      <ul className="nav-links">
        <Link to="/"></Link>
        <Link to="/">
          <HomeIcon fontSize="large" color="primary" />
        </Link>
        <Link style={navStyle} to="/shop">
          <IconButton color="primary" aria-label="add to shopping cart">
            <ShoppingBagIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link to="/contact">
          <IconButton color="primary" aria-label="add to shopping cart">
            <CallIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link style={navStyle} to="/about">
          <IconButton color="primary" aria-label="add to shopping cart">
            <InfoIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link to="/cart">
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link to="/signin">
        <IconButton color="primary" aria-label="add to shopping cart">
          <Avatar alt="Loading" src="" option="abc" />
        </IconButton>
      </Link>
      </ul>
    </nav>
  );
}

export default Nav;
