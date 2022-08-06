import React from "react";
import "./previewCard.css";

function PreviewCard({ details }) {
  const { url, title, description, image, favicon } = details;

  const finalImage = image ? image : favicon;

  if (!title && !image && !finalImage) {
    return <h1 className="notValid">Please enter a valid link!</h1>;
  }

  return (
    <div className="card">
      {finalImage ? (
        <img src={finalImage} alt="Failed to Load Image" />
      ) : (
        <div className="noImage"> </div>
      )}

      <div className="detailsBox">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <a href={url} target="_blank">
          Open Link
        </a>
      </div>
    </div>
  );
}

export default PreviewCard;
