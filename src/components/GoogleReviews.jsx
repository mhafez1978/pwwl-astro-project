import React, { useState, useEffect } from "react";

function GoogleReviewsComponent({ apiKey, placeId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://api.allorigins.win/get?url=${encodeURIComponent(
            `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`
          )}`
        );

        if (response.ok) {
          const data = await response.json();
          const parsedData = JSON.parse(data.contents);

          if (parsedData.result && parsedData.result.reviews) {
            setReviews(parsedData.result.reviews);
          }
        } else {
          console.error("Error fetching Google reviews:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching Google reviews:", error);
      }
    };

    fetchReviews();
  }, [apiKey, placeId]);

  return (
    <div className="container">
      <div
        className="row owl-carousel testimonial-carousel wow fadeInUp"
        data-wow-delay="0.1s"
      >
        {reviews.map((review, index) => (
          <div
            className="testimonial-item text-center"
            key={review.id}
            style={{
              position: "relative",
              border: "1px solid orange",
              height: "50%",
              width: "200px",
              overflow: "hidden",
              padding: "20px",
              fontSize: "50%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="testimonial-text bg-light text-center p-4 mb-4">
              <p className="mb-0">{review.text}</p>
            </div>
            <img
              className="bg-light rounded-circle p-2 mx-auto mb-2"
              src="/assets/img/testimonial-1.webp"
              style={{ width: "80px", height: "80px" }}
              alt={review.author_name}
            />
            <div className="mb-2">
              <small className="fa fa-star text-secondary"></small>
              <small className="fa fa-star text-secondary"></small>
              <small className="fa fa-star text-secondary"></small>
              <small className="fa fa-star text-secondary"></small>
              <small className="fa fa-star text-secondary"></small>
            </div>
            <h5 className="mb-1">{review.author_name}</h5>
            <p className="m-0">Rating: {review.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GoogleReviewsComponent;
