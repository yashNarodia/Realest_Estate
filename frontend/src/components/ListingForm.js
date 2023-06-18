/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import * as  Loader from "react-loader-spinner";
import PropTypes from "prop-types";

const ListingForm = (props) => {
  const [formData, setFormData] = useState({
    sale_type: "For Sale",
    price: "Rs 0+",
    bedrooms: "0+",
    home_type: "House",
    bathrooms: "0+",
    sqft: "1000+",
    days_listed: "1 or less",
    has_photos: "1+",
    open_house: "false",
    keywords: "",
  });

  const {
    sale_type,
    price,
    bedrooms,
    home_type,
    bathrooms,
    sqft,
    days_listed,
    has_photos,
    open_house,
    keywords,
  } = formData;

  const [loading, setLoading] = useState(false);

  const OnChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    axios.defaults.headers = {
      "Content-Type": "application/json",
    };

    setLoading(true);
    axios
      .post("http://localhost:8000/api/listings/search", {
        sale_type,
        price,
        bedrooms,
        home_type,
        bathrooms,
        sqft,
        days_listed,
        has_photos,
        open_house,
        keywords,
      })
      .then((res) => {
        setLoading(false)
        props.setListings(res.data);
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        setLoading(false);
        window.scrollTo(0, 0);
      });
  };
  return (
    <form className="listingform" onSubmit={(e) => onSubmit(e)}>
      <div className="row">
        <div className="col-1-of-6">
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="Sale_type">
              Sale or Rent
            </label>
            <select
              className="listingform__select"
              name="sale_type"
              value={sale_type}
              onChange={(e) => OnChange(e)}
            >
              <option>For Sale</option>
              <option>For Rent</option>
            </select>
          </div>
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="sqft">
              Sqft
            </label>
            <select
              className="listingform__select"
              name="sqft"
              value={sqft}
              onChange={(e) => OnChange(e)}
            >
              <option>1000+</option>
              <option>1200+</option>
              <option>1500+</option>
              <option>2000+</option>
              <option>Any</option>
            </select>
          </div>
        </div>

        <div className="col-1-of-6"></div>
        <div className="col-1-of-6">
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="price">
              Minimum Price
            </label>
            <select
              className="listingform__select"
              name="price"
              value={price}
              onChange={(e) => OnChange(e)}
            >
              <option>Rs 0+</option>
              <option>Rs 15,00,000+</option>
              <option>Rs 20,00,000+</option>
              <option>Rs 50,00,000+</option>
              <option>Rs 1,00,00,000+</option>
              <option>Rs 2,50,00,000+</option>
              <option>Rs 5,00,00,000+</option>
              <option>Any</option>
            </select>
          </div>
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="days_listed">
              Days Listed
            </label>
            <select
              className="listingform__select"
              name="days_listed"
              value={days_listed}
              onChange={(e) => OnChange(e)}
            >
              <option>1 or less</option>
              <option>2 or less</option>
              <option>5 or less</option>
              <option>10 or less</option>
              <option>20 or less</option>
              <option>Any</option>
            </select>
          </div>
        </div>

        <div className="col-1-of-6">
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="bedrooms">
              Bedrooms
            </label>
            <select
              className="listingform__select"
              name="bedrooms"
              value={bedrooms}
              onChange={(e) => OnChange(e)}
            >
              <option>0+</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
          </div>

          <div className="listingform__section">
            <label className="listingform__label" htmlFor="has_photos">
              Has Photos
            </label>
            <select
              className="listingform__select"
              name="has_photos"
              value={has_photos}
              onChange={(e) => OnChange(e)}
            >
              <option>1+</option>
              <option>3+</option>
              <option>5+</option>
              <option>10+</option>
            </select>
          </div>
        </div>

        <div className="col-1-of-6">
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="home_type">
              Home Type
            </label>
            <select
              className="listingform__select"
              name="home_type"
              value={home_type}
              onChange={(e) => OnChange(e)}
            >
              <option>House</option>
              <option>Condo</option>
              <option>Townhouse</option>
            </select>
          </div>

          <div className="listingform__section">
            <label className="listingform__label" htmlFor="keywords">
              Keywords
            </label>
            <input
              className="listingform_input"
              type="text"
              name="keywords"
              value={keywords}
              onChange={(e) => OnChange(e)}
            />
          </div>
        </div>
        <div className="col-1-of-6">
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="bathrooms">
              Baths
            </label>
            <select
              className="listingform__select"
              name="bathrooms"
              value={bathrooms}
              onChange={(e) => OnChange(e)}
            >
              <option>0+</option>
              <option>1+</option>
              <option>2+</option>
              
            </select>
          </div>

          <div className="listingform__altsection">
            <label className="listingform__label" htmlFor="open_house">
              Open Houses
            </label>
            <input
              className="listingform_checkbox"
              type="checkbox"
              name="open_house"
              value={open_house}
              onChange={(e) => OnChange(e)}
            />
          </div>
        </div>
        <div className="col-1-of-6">
          {loading ? 
            <div className="listingform__loader">
              <Loader.Oval 
                type="Oval"
                color="#424242"
                height={50}
                width={50}
              />
            </div>:
            <button className="listingform__button listingform__button--primary">Save</button>
          }
        </div>
      </div>
    </form>
  );
};

ListingForm.propTypes = {
  setListings : PropTypes.func.isRequired
}
export default ListingForm;
