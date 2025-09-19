"use client"
import SecondaryBtn from "@/components/shared/buttons/SecondaryBtn";
import { useState } from "react";
import { FaStar } from "react-icons/fa";


const DetailsTabs = ({ description, reviews = [] }) => {
  const [activeTab, setActiveTab] = useState("description");
  const [newRating, setNewRating] = useState(0);

  // HANDLE RATING STARS FOR NEW REVIEW.
  const handleStarClick = (rating) => {
    setNewRating((prev) => ({ ...prev, rating }));
  };

  return (
    <div>
      {/* TAB NAVIGATION ITEMS */}
      <ul className="product-details-tabs">
        {/* DESCRIPTION BTN */}
        <li
          className={`details-tabs-heading uren-transition ${
            activeTab === "description" ? "text-primary" : ""
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </li>
        {/* DIVIDER */}
        <li>
          <div className=""></div>
        </li>
        {/* REVIEWS BTN */}
        <li
          className={`details-tabs-heading uren-transition ${
            activeTab === "reviews" ? "text-primary" : ""
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews ({reviews.length})
        </li>
      </ul>

      {/* DESCRIPTION & REVIEWS CONTENT */}
      <div className="details-tab-content">

        {/* PRODUCT DESCRIPTION */}
        {activeTab === "description" && 
          <>
            {(description === null || description === "") ? (
              <p className="content">No Description Found</p>
            ) : (
              <p className="content">{description}</p>
            )}
          </>
        }

        {/* PRODUCT REVIEWS */}
        {activeTab === "reviews" && <div className="reviews-layout">

          {/* REVIEW LIST */}
          {reviews.length > 0 ? (
            <ul className="reviews-list">
              {reviews?.map((review, index) => (
                <li key={index} className="product-review">
                  <p className="content">{review.comment}</p>
                  <div className="content">
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
                    <p className="">
                      by{" "}
                      <span className="font-semibold">{review.reviewerName}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="content">No reviews yet.</p>
          )}

          {/* NEW REVIEW FORM */}
          <form className="review-form">
            <h3 className="tab-content-heading">Tell Your Opinion</h3>
            {/* NAME INPUT */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            {/* COMMENT INPUT */}
            <textarea
              name="comment"
              placeholder="Your Opinion"
              rows="2"
              required
            ></textarea>

            {/* STAR RATING INPUT */}
            <div className="flex gap-2 mb-4">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  className={`cursor-pointer text-sm lg:text-base ${
                    i < newRating ? "text-primary" : "text-body"
                  }`}
                  onClick={() => handleStarClick(i + 1)}
                />
              ))}
            </div>

            {/* SUBMIT BTN */}
            <SecondaryBtn text={"Submit Review"} />
          </form>
        </div>}
      </div>
    </div>
  );
};

export default DetailsTabs;