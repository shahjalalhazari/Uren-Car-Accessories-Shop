import React, { useState } from 'react';

const TagInputField = ({ tags, setTags, label }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleAddTag = () => {
    const newTag = input.trim().toLowerCase();

    if (!newTag) {
      setError("Tag cannot be empty.");
      return;
    }

    if (tags.includes(newTag)) {
      setError("Tag already added.");
      return;
    }

    if (tags.length >= 10) {
      setError("Maximum 10 tags allowed.");
      return;
    }

    setTags([...tags, newTag]);
    setInput("");
    setError("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
    setError("");
  };

  return (
    <fieldset className="fieldset form-group">
      <label className="fieldset-legend">
        {label} <span>*</span>
      </label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type tag name then press Enter"
        className="mb-2"
      />
      <div className="input-tags">
        {tags?.map((tag, index) => (
          <span key={index} className="single-tag">
            {tag}
            <button
              type="button"
              onClick={() => removeTag(index)}
              className="font-bold text-secondary"
            >
              ×
            </button>
          </span>
        ))}
        <span className="text-secondary text-xs">{error}</span>
      </div>
    </fieldset>
  );
};

export default TagInputField;