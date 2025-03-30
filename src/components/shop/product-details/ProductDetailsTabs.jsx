"use client"
import SecondaryBtn from "@/components/shared/buttons/SecondaryBtn";
import ProductRating from "@/components/shared/ProductRating";
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
      <ul className="bg-[#eee] p-8 flex gap-x-6 items-center uppercase text-[#999] font-bold mt-8">
        <li
          className={`cursor-pointer uren-transition hover:text-primary ${
            activeTab === "description" ? "text-primary" : ""
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </li>
        <li>
          <div className="border-b-2 border-[#999] w-8"></div>
        </li>
        <li
          className={`cursor-pointer uren-transition hover:text-primary ${
            activeTab === "reviews" ? "text-primary" : ""
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews ({reviews.length})
        </li>
      </ul>

      {/* Tab Content */}
      <div className="p-6 border border-gray-200">
        {activeTab === "description" ? (
          <div>
            <h2 className="text-xl font-bold mb-4">Product Description</h2>
            <p className="text-[#999]">{description}</p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold">Product Reviews</h2>
            <div className="grid grid-cols-2 gap-x-8">
              {/* Reviews List */}
              {reviews.length > 0 ? (
                <ul className="space-y-4">
                  {reviews.map((review, index) => (
                    <li key={index} className="border-b pb-2">
                      <p className="text-dark font-semibold">{review.name}</p>
                      <div className="flex gap-1 text-yellow-500">
                        {Array.from({ length: 5 }, (_, i) => (
                          <FaStar
                            key={i}
                            className={
                              i < review.rating ? "text-primary" : "text-[#999]"
                            }
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No reviews yet.</p>
              )}
              {/* Review Form */}
              <form onSubmit={handleSubmitReview} className="">
                <h3 className="text-xl font-bold mb-2">Write a Review</h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={newReview.name}
                  onChange={handleChange}
                  className="border p-2 w-full mb-2"
                  required
                />
                <textarea
                  name="comment"
                  placeholder="Your Review"
                  value={newReview.comment}
                  onChange={handleChange}
                  className="border p-2 w-full mb-2"
                  rows="3"
                  required
                ></textarea>

                {/* Star Rating Input */}
                <div className="flex gap-2 mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar
                      key={i}
                      className={`cursor-pointer ${
                        i < newReview.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                      onClick={() => handleStarClick(i + 1)}
                    />
                  ))}
                  </div>
                  
                  <SecondaryBtn text={"Submit Review"}/>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsTabs;