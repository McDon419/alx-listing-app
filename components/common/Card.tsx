import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, image }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="mt-2 text-lg font-semibold">{title}</h2>
    </div>
  );
};

export default Card;
