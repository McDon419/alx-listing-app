import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const HomePage = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">ALX Listing App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Luxury Apartment" image="assets/placeholder.jpg" />
        <Card title="Beachside Villa" image="assets/placeholder.jpg" />
        <Card title="Cozy Cabin" image="assets/placeholder.jpg" />
      </div>
      <div className="mt-6">
        <Button label="Explore More" onClick={() => alert('Coming Soon!')} />  
      </div>
    </div>
  );
};

export default HomePage;