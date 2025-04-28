import { NextResponse } from 'next/server';
import { houses } from '@/data/houses';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (id) {
      const house = houses.find(h => h.id === id);
      if (!house) {
        return NextResponse.json(
          { error: 'House not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(house);
    }
    
    return NextResponse.json(houses);
  } catch (error) {
    console.error('Error fetching houses:', error);
    return NextResponse.json(
      { error: 'Failed to fetch houses' },
      { status: 500 }
    );
  }
} 