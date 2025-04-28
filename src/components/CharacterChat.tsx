'use client';

import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

interface CharacterChatProps {
  characterId: string;
  characterName: string;
}

interface Message {
  sender: 'user' | 'character';
  text: string;
}

export default function CharacterChat({ characterId, characterName }: CharacterChatProps) {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'character', text: `Hello! I'm ${characterName}. What would you like to talk about?` }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage: Message = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          character: characterId,
          message: inputValue
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response');
      }
      
      const data = await response.json();
      
      // Add character response
      const characterMessage: Message = { 
        sender: 'character', 
        text: data.response 
      };
      setMessages(prev => [...prev, characterMessage]);
    } catch (error) {
      // Add error message
      const errorMessage: Message = { 
        sender: 'character', 
        text: "Sorry, I couldn't understand that. Let's talk about something else." 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg mt-6">
      <div className="p-4 bg-gray-800 text-amber-400 font-semibold">
        Chat with {characterName}
      </div>
      
      <div className="h-60 p-4 overflow-y-auto flex flex-col gap-3">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`${
              message.sender === 'user' 
                ? 'ml-auto bg-amber-700 text-white' 
                : 'mr-auto bg-gray-600 text-white'
            } rounded-lg px-4 py-2 max-w-[80%]`}
          >
            {message.text}
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-center items-center py-2">
            <div className="animate-pulse flex space-x-1">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-3 border-t border-gray-600 flex">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type your message..."
          className="flex-grow bg-gray-600 text-white px-3 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-amber-400"
        />
        <button
          onClick={handleSendMessage}
          disabled={isLoading || inputValue.trim() === ''}
          className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-r-lg focus:outline-none disabled:opacity-50"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
} 