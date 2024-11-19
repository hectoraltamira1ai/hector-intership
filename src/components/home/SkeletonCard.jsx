// SkeletonCard.jsx
import React from "react";
import Skeleton from ".././UI/Skeleton"; 
import '../../css/styles/skeletonCard.css'; 

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <Skeleton width="100%" height="200px" borderRadius="8px"  />
      <div className="skeleton-coll-pp">
        <Skeleton width="50px" height="50px" borderRadius="50%" />
      </div>
      <Skeleton width="60%" height="24px" borderRadius="4px" className="mb-2" />
      <Skeleton width="40%" height="20px" borderRadius="4px" className="mb-2" />
    </div>
  );
};

export default SkeletonCard;


