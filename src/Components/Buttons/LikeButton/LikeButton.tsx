import React from 'react';
import { useState } from "react";
import { LikeButtonElement } from "./LikeButton.styles";

export const LikeButton = () => {
  const [like, setLike] = useState(false);

  const toggle = () => {
    setLike(!like);
  };

  return (
    <div>
      <LikeButtonElement onClick={toggle} like={like} />
    </div>
  );
};