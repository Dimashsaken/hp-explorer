import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name') || '';
    
    const response = await axios.get('https://hp-api.onrender.com/api/characters');
    let characters = response.data;
    
    if (name) {
      characters = characters.filter((character: any) => 
        character.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    
    return NextResponse.json(characters);
  } catch (error) {
    console.error('Error fetching characters:', error);
    return NextResponse.json(
      { error: 'Failed to fetch characters' },
      { status: 500 }
    );
  }
} 