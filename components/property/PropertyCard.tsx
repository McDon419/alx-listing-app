// components/property/PropertyCard.tsx
import React from "react";
import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="w-full h-56 bg-gray-100 overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg">{property.name}</h3>
          <div className="text-sm">⭐ {property.rating.toFixed(2)}</div>
        </div>
        <p className="text-xs text-gray-500">{property.address.city}, {property.address.country}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-sm text-gray-700">${property.price} / night</div>
          {property.discount && (
            <div className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">{property.discount}% off</div>
          )}
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
