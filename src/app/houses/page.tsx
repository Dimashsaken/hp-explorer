'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { House } from '@/types';
import { useQuery } from '@tanstack/react-query';

export default function HousesPage() {
  const { data: houses, isLoading, error } = useQuery<House[]>({
    queryKey: ['houses'],
    queryFn: async () => {
      const response = await fetch('/api/houses');
      if (!response.ok) {
        throw new Error('Failed to fetch houses');
      }
      return response.json();
    }
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center py-10">Error: {(error as Error).message}</div>;
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-amber-400 mb-4">Hogwarts Houses</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-300">
          Explore the four noble houses of Hogwarts School of Witchcraft and Wizardry, each with their own values, traits, and history.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {houses?.map((house) => (
          <Link 
            key={house.id} 
            href={`/houses/${house.id}`}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 block"
          >
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold" style={{ color: house.colors[0].toLowerCase() === 'scarlet' ? '#BF4040' : 
                                                        house.colors[0].toLowerCase() === 'yellow' ? '#F0C75E' : 
                                                        house.colors[0].toLowerCase() === 'blue' ? '#5555FF' : 
                                                        house.colors[0].toLowerCase() === 'green' ? '#2E8B57' : '#FFFFFF' }}>
                {house.name}
              </h2>
              <div className="flex items-center text-gray-300 gap-2">
                <span className="font-medium">Founded by:</span> {house.founder}
              </div>
              <div className="flex items-center text-gray-300 gap-2">
                <span className="font-medium">Animal:</span> {house.animal}
              </div>
              <div className="flex items-center text-gray-300 gap-2">
                <span className="font-medium">Element:</span> {house.element}
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {house.traits.map((trait, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 bg-gray-700 text-xs rounded-full"
                    style={{ color: house.colors[0].toLowerCase() === 'scarlet' ? '#BF4040' : 
                                  house.colors[0].toLowerCase() === 'yellow' ? '#F0C75E' : 
                                  house.colors[0].toLowerCase() === 'blue' ? '#5555FF' : 
                                  house.colors[0].toLowerCase() === 'green' ? '#2E8B57' : '#FFFFFF' }}
                  >
                    {trait}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 line-clamp-3 mt-4">
                {house.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 