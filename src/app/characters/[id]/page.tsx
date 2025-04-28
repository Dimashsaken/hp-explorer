'use client';

import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { Character } from '@/types';
import Link from 'next/link';
import { FaArrowLeft, FaStar, FaComments } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import CharacterChat from '@/components/CharacterChat';

export default function CharacterDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const [showChat, setShowChat] = useState(false);
  
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(id));
  }, [id]);

  const { data: characters, isLoading, error } = useQuery<Character[]>({
    queryKey: ['characters'],
    queryFn: async () => {
      const response = await fetch('/api/characters');
      if (!response.ok) {
        throw new Error('Failed to fetch characters');
      }
      return response.json();
    }
  });

  const character = characters?.find(c => c.id === id);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let newFavorites;
    
    if (favorites.includes(id)) {
      newFavorites = favorites.filter((favId: string) => favId !== id);
      setIsFavorite(false);
    } else {
      newFavorites = [...favorites, id];
      setIsFavorite(true);
    }
    
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

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

  if (!character) {
    return <div className="text-center py-10">Character not found</div>;
  }

  const getHouseColor = () => {
    return character.house?.toLowerCase() === 'gryffindor' ? '#740001' :
           character.house?.toLowerCase() === 'hufflepuff' ? '#ecb939' :
           character.house?.toLowerCase() === 'ravenclaw' ? '#222f5b' :
           character.house?.toLowerCase() === 'slytherin' ? '#1a472a' : 
           '#6b7280';
  };

  // Determine if character is one of the main ones we have chat personas for
  const hasChatPersona = ['harry potter', 'hermione granger', 'ron weasley', 'albus dumbledore'].includes(character.name.toLowerCase());
  
  // Convert character name to chat ID format
  const getChatId = () => {
    return character.name.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        href="/characters"
        className="inline-flex items-center text-gray-300 hover:text-amber-400 mb-6"
      >
        <FaArrowLeft className="mr-2" />
        Back to Characters
      </Link>

      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="relative">
                <div 
                  className="w-full h-64 md:h-80 bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden"
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
                <div className="absolute top-2 right-2 flex gap-2">
                  <button 
                    onClick={toggleFavorite}
                    className="p-2 rounded-full bg-gray-800/70 hover:bg-gray-700"
                  >
                    <FaStar className={isFavorite ? "text-amber-400" : "text-gray-400"} />
                  </button>
                  
                  {hasChatPersona && (
                    <button 
                      onClick={() => setShowChat(!showChat)}
                      className="p-2 rounded-full bg-gray-800/70 hover:bg-gray-700"
                    >
                      <FaComments className={showChat ? "text-amber-400" : "text-gray-400"} />
                    </button>
                  )}
                </div>
              </div>
              
              {hasChatPersona && showChat && (
                <CharacterChat 
                  characterId={getChatId()} 
                  characterName={character.name} 
                />
              )}
            </div>

            <div className="md:w-2/3">
              <div className="flex justify-between items-start">
                <h1 className="text-3xl font-bold mb-4 text-white">
                  {character.name}
                </h1>
                {character.house && (
                  <span 
                    className="px-3 py-1 text-sm rounded-full" 
                    style={{
                      backgroundColor: getHouseColor(),
                      color: character.house.toLowerCase() === 'hufflepuff' ? '#000' : '#fff'
                    }}
                  >
                    {character.house}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-6">
                {character.alternate_names && character.alternate_names.length > 0 && (
                  <div>
                    <span className="text-gray-400 text-sm">Alternate Names</span>
                    <p className="text-white">{character.alternate_names.join(', ')}</p>
                  </div>
                )}

                {character.species && (
                  <div>
                    <span className="text-gray-400 text-sm">Species</span>
                    <p className="text-white">{character.species}</p>
                  </div>
                )}

                {character.gender && (
                  <div>
                    <span className="text-gray-400 text-sm">Gender</span>
                    <p className="text-white">{character.gender}</p>
                  </div>
                )}

                {character.dateOfBirth && (
                  <div>
                    <span className="text-gray-400 text-sm">Date of Birth</span>
                    <p className="text-white">{character.dateOfBirth}</p>
                  </div>
                )}

                {character.ancestry && (
                  <div>
                    <span className="text-gray-400 text-sm">Ancestry</span>
                    <p className="text-white">{character.ancestry}</p>
                  </div>
                )}

                {character.eyeColour && (
                  <div>
                    <span className="text-gray-400 text-sm">Eye Color</span>
                    <p className="text-white">{character.eyeColour}</p>
                  </div>
                )}

                {character.hairColour && (
                  <div>
                    <span className="text-gray-400 text-sm">Hair Color</span>
                    <p className="text-white">{character.hairColour}</p>
                  </div>
                )}

                {character.patronus && (
                  <div>
                    <span className="text-gray-400 text-sm">Patronus</span>
                    <p className="text-white">{character.patronus}</p>
                  </div>
                )}

                {character.hogwartsStudent && (
                  <div>
                    <span className="text-gray-400 text-sm">Status</span>
                    <p className="text-white">Hogwarts Student</p>
                  </div>
                )}

                {character.hogwartsStaff && (
                  <div>
                    <span className="text-gray-400 text-sm">Status</span>
                    <p className="text-white">Hogwarts Staff</p>
                  </div>
                )}

                {character.actor && (
                  <div>
                    <span className="text-gray-400 text-sm">Actor</span>
                    <p className="text-white">{character.actor}</p>
                  </div>
                )}

                {character.alive !== undefined && (
                  <div>
                    <span className="text-gray-400 text-sm">Status</span>
                    <p className="text-white">{character.alive ? 'Alive' : 'Deceased'}</p>
                  </div>
                )}
              </div>

              {character.wand && (character.wand.wood || character.wand.core || character.wand.length) && (
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-3 text-amber-400">Wand</h2>
                  <div className="bg-gray-700 p-4 rounded-lg space-y-2">
                    {character.wand.wood && (
                      <div>
                        <span className="text-gray-400 text-sm">Wood</span>
                        <p className="text-white">{character.wand.wood}</p>
                      </div>
                    )}
                    {character.wand.core && (
                      <div>
                        <span className="text-gray-400 text-sm">Core</span>
                        <p className="text-white">{character.wand.core}</p>
                      </div>
                    )}
                    {character.wand.length && (
                      <div>
                        <span className="text-gray-400 text-sm">Length</span>
                        <p className="text-white">{character.wand.length} inches</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 