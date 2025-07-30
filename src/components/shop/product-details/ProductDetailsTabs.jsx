"use client"
import SecondaryBtn from "@/components/shared/buttons/SecondaryBtn";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const ProductDetailsTabs = ({ description, initialReviews = [] }) => {
  const [activeTab, setActiveTab] = useState("description");
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({
    name: "",
    comment: "",
    rating: 0,
  });

  // Handle Star Click for Rating
  const handleStarClick = (rating) => {
    setNewReview((prev) => ({ ...prev, rating }));
  };

  // Handle Form Input Changes
  const handleChange = (e) => {
    setNewReview((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle Review Submission
  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment || newReview.rating === 0) {
      alert("Please fill out all fields and select a rating!");
      return;
    }
    setReviews([...reviews, newReview]);
    setNewReview({ name: "", comment: "", rating: 0 });
  };

  return (
    <div>
      {/* Tabs Navigation */}
      <ul className="product-details-tabs">
        <li
          className={`details-tabs-heading uren-transition ${
            activeTab === "description" ? "text-primary" : ""
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </li>
        <li>
          <div className=""></div>
        </li>
        <li
          className={`details-tabs-heading uren-transition ${
            activeTab === "reviews" ? "text-primary" : ""
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews ({reviews.length})
        </li>
      </ul>

      {/* Tab Contents */}
      <div className="details-tab-content">
        {activeTab === "description" ? (
          <div>
            {description === null ? (
              <p className="text-body text-sm">No Description Found</p>
            ) : (
              <p className="text-body text-sm">{description}</p>
            )}
          </div>
        ) : (
          <div>
            <div className="reviews-layout">
              {/* Reviews List */}
              {reviews.length > 0 ? (
                <ul className="reviews-list">
                  {reviews?.map((review, index) => (
                    <li key={index} className="product-review">
                      <p className="text-body text-sm">{review.comment}</p>
                      <div className="text-sm">
                        <div className="review-stars">
                          {Array.from({ length: 5 }, (_, i) => (
                            <FaStar
                              key={i}
                              className={
                                i < review.rating ? "text-primary" : "text-body"
                              }
                            />
                          ))}
                        </div>
                        <p className="text-body">
                          by{" "}
                          <span className="font-semibold">{review.name}</span>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-body">No reviews yet.</p>
              )}
              {/* Review Form */}
              <form onSubmit={handleSubmitReview} className="review-form">
                <h3 className="tab-content-heading">Write a Review</h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={newReview.name}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="comment"
                  placeholder="Your Review"
                  value={newReview.comment}
                  onChange={handleChange}
                  rows="2"
                  required
                ></textarea>

                {/* Star Rating Input */}
                <div className="flex gap-2 mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar
                      key={i}
                      className={`cursor-pointer text-sm lg:text-base ${
                        i < newReview.rating ? "text-primary" : "text-body"
                      }`}
                      onClick={() => handleStarClick(i + 1)}
                    />
                  ))}
                </div>

                <SecondaryBtn text={"Submit Review"} />
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsTabs;