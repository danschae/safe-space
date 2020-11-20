import "styles/PlaceListItem.scss"
const PlaceListItem = (props) => {
  
  return (
    <div class='result-container'>
      <div class='img-logo'>
      <img src={props.image} alt="Logo" class='venue-image' />
      </div>
      <div class='general-info'>
      <h3 class="venue_name">{props.name}</h3><br />
      <span class='yelp_rating'>Yelp Rating: {props.yelpRating}</span><br />
      <span class='covid_rating'>Safety Rating: NA</span>
  <span class="covid_review_count">{props.reviews.length}</span>
      </div>
      <div class='location'> 
      <span>
        {props.phone}<br />
        {props.address}<br />
        {props.city}
      </span>
      </div>
    </div>
  )
}

export default PlaceListItem;
