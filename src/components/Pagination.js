import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const limit = 12;

function Pagination({ renderItems, setRenderItems, items }) {
  const [page, setPage] = useState(1);
  const offset = limit * (page - 1);
  const renderArray = [];

  useEffect(() => {
    for (let i = offset; i < offset + limit; i++) {
      if (i === items.length - 1) {
        setRenderItems(renderArray);
        return;
      }
      renderArray.push(items[i]);
    }
    setRenderItems(renderArray);
  }, [page]);
  console.log(items);
  return (
    <div>
      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        <ArrowBackIcon />
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        <ArrowForwardIcon />
      </button>
      <br></br>
    </div>
  );
}

export default Pagination;
