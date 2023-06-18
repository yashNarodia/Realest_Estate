import React,{useState,useEffect} from 'react'
import {Helmet} from 'react-helmet'
import axios from 'axios'
import {Link} from 'react-router-dom'
const ListingDetails = ([props]) => {
  const  [listings,setListings] = useState({})
  const [realtor,setRealtor] = useState({})
  const [price,setPrice] = useState(0)
   
  const numberwithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    const slug = props.match.params.id;
    const config ={
      headers :{
        'Authorization' : `Bearer ${localStorage.getItem('token')}`
      }
    }
    axios.get(`http://localhost:8000/api/listings/${slug}`,config)
    .then(res => {
      setListings(res.data)
      setPrice(numberwithCommas(res.data.price))
    })
    .catch(err => {})
  }, [props.match.params.id]);

  useEffect(() =>{
    const id = listings.realtor
    const config ={
      headers :{
        'Authorization' : `Bearer ${localStorage.getItem('token')}`
      }
    };
    if(id){
      axios.get(`http://localhost:8000/api/realtors/${id}`,config)
      .then(res => {
        setRealtor(res.data)
      })
      .catch(err => {})
    }
  },[listings.realtor]);

  const diplsayInteriorImages = () => {
    let images = []
    images.push(
      <div key={1} className='row'>
        <div className='col-1-of-3'>
          {
            listings.photo1 ? (
              <div className='listingdetail__display'>
                <img className='listingdetail_display__image' src={listings.photo1} alt='' />
              </div>
            ) : null
          }
        </div>
        <div className='col-1-of-3'>
          {
            listings.photo2 ? (
              <div className='listingdetail__display'>
                <img className='listingdetail_display__image' src={listings.photo2} alt='' />
              </div>
            ) : null
          }
        </div>
        <div className='col-1-of-3'>
          {
            listings.photo3 ? (
              <div className='listingdetail__display'>
                <img className='listingdetail_display__image' src={listings.photo3} alt='' />
              </div>
            ) : null
          }
        </div>
      </div>
    )

    images.push(
      <div key={2} className='row'>
        <div className='col-1-of-3'>
          {
            listings.photo4 ? (
              <div className='listingdetail__display'>
                <img className='listingdetail_display__image' src={listings.photo4} alt='' />
              </div>
            ) : null
          }
        </div>
        <div className='col-1-of-3'>
          {
            listings.photo5 ? (
              <div className='listingdetail__display'>
                <img className='listingdetail_display__image' src={listings.photo5} alt='' />
              </div>
            ) : null
          }
        </div>
        <div className='col-1-of-3'>
          {
            listings.photo6 ? (
              <div className='listingdetail__display'>
                <img className='listingdetail_display__image' src={listings.photo6} alt='' />
              </div>
            ) : null
          }
        </div>
      </div>
    )

    images.push(
      <div key={1} className='row'>
        <div className='col-1-of-3'>
          {
            listings.photo7 ? (
              <div className='listingdetail__display'>
                <img className='listingdetail_display__image' src={listings.photo7} alt='' />
              </div>
            ) : null
          }
        </div>
        <div className='col-1-of-3'>
          {
            listings.photo8 ? (
              <div className='listingdetail__display'>
                <img className='listingdetail_display__image' src={listings.photo8} alt='' />
              </div>
            ) : null
          }
        </div>
        <div className='col-1-of-3'>
          {
            listings.photo9 ? (
              <div className='listingdetail__display'>
                <img className='listingdetail_display__image' src={listings.photo9} alt='' />
              </div>
            ) : null
          }
        </div>
      </div>
    )
    images.push(
      <div key={1} className='row'>
        <div className='col-1-of-3'>
          {
            listings.photo10 ? (
              <div className='listingdetail__display'>
                <img className='listingdetail_display__image' src={listings.photo10} alt='' />
              </div>
            ) : null
          }
        </div>
      </div>
    )

    return images
  }
  return (
    <div className='listingdetail'>
      <Helmet>
        <title>Realest Estate - Listing | {`${listings.title}`}</title>
        <meta
          name='description'
          content='Listing Details'
        />
      </Helmet>
      <div className='listingdetail__header'>
        <h1 className='listingdetail__title'>{listings.title}</h1>
        <p className='listingdetail__location'>{listings.city}, {listings.state}, {listings.zipcode}</p> 
      </div>
      <div className='row'>
        <div className='listingdetail__breadcrumb'>
          <Link className='listingdetail__breadcrumb__link' to='/'>Home</Link> / {listings.title}
        </div>
      </div>
      <div className='row'>
        <div className='col-3-of-4'>
          <div className='listingdetail__display'>
            <img className='listingdetail__display__image' src={listings.photo_main} alt='' />
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='listingdetail__display'>
            <img className='listingdetail__display__image' src={realtor.photo} alt='' />
          </div>
          <h3 className='listingdetail__realtor'>{realtor.name}</h3>
          <p className='listingdetail__contact'>{realtor.phone}</p>
          <p className='listingdetail__contact'>{realtor.email}</p>
          <p className='listingdetail__about'>{realtor.description}</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-1-of-2'>
          <ul className='listingdetail__list'>
            <li className='listingdetail__list__item'>Home Type: {listings.home_type}</li>
            <li className='listingdetail__list__item'>Price: ${price}</li>
            <li className='listingdetail__list__item'>Bedrooms: {listings.bedrooms}</li>
            <li className='listingdetail__list__item'>Bathrooms: {listings.bathrooms}</li>
            <li className='listingdetail__list__item'>Square Feet: {listings.sqft}</li> 
          </ul>
        </div>
        <div className='col-1-of-2'>
          <ul className='listingdetail__list'>
            <li className='listingdetail__list__item'>Sale Type: {listings.sale_type}</li>
            <li className='listingdetail__list__item'>Address: {listings.address}</li>
            <li className='listingdetail__list__item'>City: {listings.city}</li>
            <li className='listingdetail__list__item'>State: {listings.state}</li>
            <li className='listingdetail__list__item'>Zipcode: {listings.zipcode}</li>
          </ul>
        </div>
      </div>
      <div className='row'>
        <p className='listingdetail__description'>{listings.description}</p>
      </div>
      {diplsayInteriorImages()}
    </div>
  )
}

export default ListingDetails