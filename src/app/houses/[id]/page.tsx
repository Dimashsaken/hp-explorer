'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { House } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';

export default function HouseDetailPage() {
  const { id } = useParams<{ id: string }>();
  
  const { data: house, isLoading, error } = useQuery<House>({
    queryKey: ['house', id],
    queryFn: async () => {
      const response = await fetch(`/api/houses?id=${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch house details');
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

  if (!house) {
    return <div className="text-center py-10">House not found</div>;
  }

  const getPrimaryColor = () => {
    return house.colors[0].toLowerCase() === 'scarlet' ? '#BF4040' : 
           house.colors[0].toLowerCase() === 'yellow' ? '#F0C75E' : 
           house.colors[0].toLowerCase() === 'blue' ? '#5555FF' : 
           house.colors[0].toLowerCase() === 'green' ? '#2E8B57' : '#FFFFFF';
  };

  const getSecondaryColor = () => {
    return house.colors[1].toLowerCase() === 'gold' ? '#FFD700' : 
           house.colors[1].toLowerCase() === 'black' ? '#333333' : 
           house.colors[1].toLowerCase() === 'bronze' ? '#CD7F32' : 
           house.colors[1].toLowerCase() === 'silver' ? '#C0C0C0' : '#FFFFFF';
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        href="/houses"
        className="inline-flex items-center text-gray-300 hover:text-amber-400 mb-6"
      >
        <FaArrowLeft className="mr-2" />
        Back to Houses
      </Link>

      <div 
        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden" 
        style={{ 
          borderTop: `4px solid ${getPrimaryColor()}`,
          borderBottom: `4px solid ${getSecondaryColor()}`
        }}
      >
        <div className="p-8">
          <div className="flex items-center gap-4 mb-4">
            <Image 
              src={`/images/${house.name.toLowerCase()}.svg`} 
              alt={`${house.name} logo`}
              width={80}
              height={80}
              className="w-20 h-20"
            />
            <h1 
              className="text-4xl font-bold" 
              style={{ color: getPrimaryColor() }}
            >
              {house.name}
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3 text-gray-200">About {house.name}</h2>
                <p className="text-gray-300">{house.description}</p>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3 text-gray-200">Traits</h2>
                <div className="flex flex-wrap gap-2">
                  {house.traits.map((trait, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-700 rounded-full"
                      style={{ color: getPrimaryColor() }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-700 rounded-lg p-6 space-y-4">
                <div>
                  <span className="text-gray-400">Founded by:</span>
                  <p className="text-lg font-medium text-gray-200">{house.founder}</p>
                </div>
                
                <div>
                  <span className="text-gray-400">House Colors:</span>
                  <div className="flex items-center mt-1 gap-2">
                    <div 
                      className="w-6 h-6 rounded-full" 
                      style={{ backgroundColor: getPrimaryColor() }}
                    ></div>
                    <span className="text-gray-200">{house.colors[0]}</span>
                    <div 
                      className="w-6 h-6 rounded-full ml-2" 
                      style={{ backgroundColor: getSecondaryColor() }}
                    ></div>
                    <span className="text-gray-200">{house.colors[1]}</span>
                  </div>
                </div>
                
                <div>
                  <span className="text-gray-400">Element:</span>
                  <p className="text-lg font-medium text-gray-200">{house.element}</p>
                </div>
                
                <div>
                  <span className="text-gray-400">Animal:</span>
                  <p className="text-lg font-medium text-gray-200">{house.animal}</p>
                </div>
                
                <div>
                  <span className="text-gray-400">Common Room:</span>
                  <p className="text-lg font-medium text-gray-200">{house.commonRoom}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 