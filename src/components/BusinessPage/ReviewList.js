import { Fragment, useContext } from 'react';
import { YelpContext } from 'YelpContext';
import ReviewListItem from './ReviewListItem';
import Sort from 'components/Sort';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import "styles/ReviewList.scss";

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
})(Rating);

export default function ReviewList(props) {

  const { sortBy } = useContext(YelpContext);

  const reviews = props.reviews.map(review => {

    return <ReviewListItem
      username={review.username}
      social_distancing={review.socialdistancing}
      transaction_process={review.socialdistancing}
      cleanliness={review.cleanliness}
      overall_rating={review.overall_rating}
      date={review.date}
      helpful_count={review.helpful_count}
      description={review.description}
      id={review.id}
      picture={review.profile_pic}
      user_id={review.user_id}
      venue_name={review.venue_name || ''}
      isProfile={props.isProfile || null}
      isHome={props.isHome || null}
      profileHelpCount={props.profileHelpCount}
      venue_id={review.venue_id || ''}
      profileDeleteReview={props.profileDeleteReview}
    />;
  });

  const sortOptions = [
    {
      id: "overall_rating",
      value: "Safe Score"
    },
    {
      id: "helpful_count",
      value: "Helpful Count"
    },
    {
      id:'date',
      value: 'Date'
    }
  ];

  const handleSort = (property) => {
    sortBy(props.reviews,
      property,
      false, 'review');
  };
  return (
    <div className="reviews-list-container">
      <div className='sort-group'>
        <h3><strong>Reviews</strong></h3>
        <Sort sortOptions={sortOptions}
          defaultOption={sortOptions[0].id}
          onClick={handleSort} />
      </div>
      { !props.isProfile && (
        <div className="venue-avg-ratings">
          <div className="overall-rating-container">
            <div className="rating-label">
              Overall Rating 
            </div>
            <div className="rating-data">
              <Box component="fieldset" mb={0} pb={0} pt={0} borderColor="transparent">
                { isNaN(Number(props.avgRatings.overall_rating)) ? "N/A" 
                : <StyledRating
                    name="customized-color"
                    size="small"
                    value={Number(props.avgRatings.overall_rating)}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    readOnly
                  />}
              </Box>
            <div className="review-count">
              ({ props.reviews && props.reviews.length } reviews)
            </div>
            </div>
          </div>
          <div className="other-rating-container">
            <div className="rating-label">
              Cleanliness
            </div>
              <Box component="fieldset" mb={0} pb={0} pt={0} borderColor="transparent">
                { isNaN(Number(props.avgRatings.cleanliness)) ? "N/A" 
                : <StyledRating
                    name="customized-color"
                    size="small"
                    value={Number(props.avgRatings.cleanliness)}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    readOnly
                  />}
              </Box>
          </div>
          <div className="other-rating-container">
            <div className="rating-label">
              Transaction Process
            </div>
              <Box component="fieldset" mb={0} pb={0} pt={0} borderColor="transparent">
                { isNaN(Number(props.avgRatings.transactionprocess)) ? "N/A" 
                : <StyledRating
                    name="customized-color"
                    size="small"
                    value={Number(props.avgRatings.transactionprocess)}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    readOnly
                  />}
              </Box>
          </div>
          <div className="other-rating-container">
            <div className="rating-label">
              Social Distancing
            </div>
              <Box component="fieldset" mb={0} pb={0} pt={0} borderColor="transparent">
                { isNaN(Number(props.avgRatings.socialdistancing)) ? "N/A" 
                : <StyledRating
                    name="customized-color"
                    size="small"
                    value={Number(props.avgRatings.socialdistancing)}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    readOnly
                  />}
              </Box>
          </div>
        </div>
      )}
      {reviews}
    </div>
  );

}