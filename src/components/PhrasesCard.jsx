import React from "react";

function PostsCard({ postRandom }) {
  
  return (
    
      <p className="card">{postRandom.phrase}</p>
   
  );
}

export default PostsCard;