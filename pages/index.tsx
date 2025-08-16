import React, { useMemo, useState } from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyCard from "@/components/property/PropertyCard";
import Pill from "../components/ui/Pill";

const FILTERS = [
  "Luxury Villa",
  "Pool",
  "Self Checkin",
  "Beachfront",
  "Pet Friendly",
  "Mountain View",
  "City Center",
];

export default function Home() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (label: string) => {
    setSelectedFilters(prev =>
      prev.includes(label) ? prev.filter(x => x !== label) : [...prev, label]
    );
  };

  // Filter logic: include properties that match ANY selected filter (OR).
  const filtered = useMemo(() => {
    if (selectedFilters.length === 0) return PROPERTYLISTINGSAMPLE;
    return PROPERTYLISTINGSAMPLE.filter(prop =>
      prop.category.some(cat => selectedFilters.includes(cat))
    );
  }, [selectedFilters]);

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="h-64 sm:h-80 md:h-96 bg-cover bg-center flex items-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-2xl sm:text-4xl font-bold">Find your favorite place here!</h1>
            <p className="mt-2 text-sm sm:text-lg">The best prices for over 2 million properties worldwide.</p>
            <button className="mt-4 bg-white text-black py-2 px-4 rounded">Explore</button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 mt-6">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {FILTERS.map(f => (
            <Pill key={f} label={f} active={selectedFilters.includes(f)} onClick={() => toggleFilter(f)} />
          ))}
        </div>
      </section>

      {/* Listing */}
      <section className="container mx-auto px-4 mt-8 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((property) => (
            <PropertyCard key={property.name} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
}

