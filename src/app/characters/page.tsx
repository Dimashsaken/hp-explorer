'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Character } from '@/types';
import Link from 'next/link';
import { FaSearch, FaStar } from 'react-icons/fa';

export default function CharactersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const savedFavorites = localStorage.getItem('favorites');
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    }
    return [];
  });
  
  const ITEMS_PER_PAGE = 12;

  const { data: characters = [], isLoading, error } = useQuery<Character[]>({
    queryKey: ['characters', searchQuery],
    queryFn: async () => {
      const apiUrl = searchQuery 
        ? `/api/characters?name=${encodeURIComponent(searchQuery)}`
        : '/api/characters';
      
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch characters');
      }
      return response.json();
    }
  });

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(id)
        ? prev.filter(fav => fav !== id)
        : [...prev, id];
      
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const totalPages = Math.ceil(characters.length / ITEMS_PER_PAGE);
  const paginatedCharacters = characters.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-amber-400 mb-4">Characters</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-300">
          Discover the witches, wizards, and magical beings from the world of Harry Potter.
        </p>
      </div>

      <div className="relative max-w-md mx-auto mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search characters..."
          className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {paginatedCharacters.length === 0 ? (
        <div className="text-center py-10 text-gray-400">
          No characters found. Try a different search term.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginatedCharacters.map((character) => (
              <div 
                key={character.id} 
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-amber-500/10 transition-shadow duration-300"
              >
                <div className="relative">
                  <div 
                    className="h-48 bg-gray-700 flex items-center justify-center overflow-hidden"
                    style={{
                      backgroundImage: character.image ? `url(${character.image})` : 'none',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {!character.image && (
                      <span className="text-gray-500 text-lg">No image available</span>
                    )}
                  </div>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      toggleFavorite(character.id);
                    }}
                    className="absolute top-2 right-2 p-2 rounded-full bg-gray-800/70 hover:bg-gray-700"
                  >
                    <FaStar className={favorites.includes(character.id) ? "text-amber-400" : "text-gray-400"} />
                  </button>
                </div>
                
                <div className="p-4">
                  <Link href={`/characters/${character.id}`}>
                    <h3 className="text-lg font-semibold text-white hover:text-amber-400 transition-colors mb-1">
                      {character.name}
                    </h3>
                  </Link>
                  
                  {character.house && (
                    <div className="mb-2">
                      <span 
                        className="px-2 py-1 text-xs rounded-full" 
                        style={{
                          backgroundColor: 
                            character.house.toLowerCase() === 'gryffindor' ? '#740001' :
                            character.house.toLowerCase() === 'hufflepuff' ? '#ecb939' :
                            character.house.toLowerCase() === 'ravenclaw' ? '#222f5b' :
                            character.house.toLowerCase() === 'slytherin' ? '#1a472a' :
                            '#333',
                          color: 
                            character.house.toLowerCase() === 'hufflepuff' ? '#000' : '#fff'
                        }}
                      >
                        {character.house}
                      </span>
                    </div>
                  )}
                  
                  <div className="text-sm text-gray-400">
                    {character.patronus && (
                      <div className="mb-1">
                        <span className="font-medium">Patronus:</span> {character.patronus}
                      </div>
                    )}
                    {character.alive !== undefined && (
                      <div className="mb-1">
                        <span className="font-medium">Status:</span> {character.alive ? 'Alive' : 'Deceased'}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <div className="join">
                <button
                  className="join-item btn bg-gray-700 hover:bg-gray-600 border-gray-600"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  «
                </button>
                <button className="join-item btn bg-gray-700 border-gray-600">
                  Page {currentPage} of {totalPages}
                </button>
                <button
                  className="join-item btn bg-gray-700 hover:bg-gray-600 border-gray-600"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  »
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
} 