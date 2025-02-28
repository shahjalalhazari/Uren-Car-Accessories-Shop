"use client"
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';

const Tags = () => {
  const [selectedTag, setSelectedTag] = useState(null);

    return (
      <div>
        <h6 className="blog-aside-title">Tags</h6>
        <hr />
        <div className="tag-list">
          {tagsList.map((tag, index) => (
            <button
              key={index}
              className={`single-tag ${selectedTag === tag && "bg-blue text-white"}`}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            >
              {tag}
              {selectedTag === tag && (
                <BiPlus
                  className="w-4 h-4 cursor-pointer rotate-45"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTag(null);
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    );
};

export default Tags;


const tagsList = ["SUV", "Sport Car", "Toyota", "Nissan", "Hyundai", "Petrol", "Land Cruiser", "Prado", "Dodge", "Dodge Charger", "Dodge Challenger", "Ram", "Ram 1500"]