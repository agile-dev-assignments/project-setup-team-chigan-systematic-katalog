import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

/* popout the browser and maximize to see more rows! -> */
const Wishlist = () => {
  return(
    <div className = "Wishlist">
      <h1>Wishlist</h1>
      <Gallery photos={photos} />
    </div>
  )
};

export default Wishlist;
