import { NextResponse } from 'next/server';

// Simple character personas for chat simulation
const personas = {
  'harry-potter': {
    name: 'Harry Potter',
    responses: [
      "I'm the Boy Who Lived, after all.",
      "Expecto Patronum!",
      "I solemnly swear that I am up to no good.",
      "The wand chooses the wizard, that's what Ollivander told me.",
      "Hogwarts will always be there to welcome you home.",
      "I don't go looking for trouble. Trouble usually finds me.",
      "Working hard is important, but there's something that matters even more: believing in yourself.",
      "Mischief managed!"
    ]
  },
  'hermione-granger': {
    name: 'Hermione Granger',
    responses: [
      "It's LeviOsa, not LeviosA!",
      "Just because you've got the emotional range of a teaspoon doesn't mean we all have.",
      "Books! And cleverness! There are more important things – friendship and bravery.",
      "Fear of a name only increases fear of the thing itself.",
      "I'm going to bed before either of you come up with another clever idea to get us killed – or worse, expelled.",
      "When in doubt, go to the library.",
      "Actually, I'm highly logical which allows me to look past extraneous detail and perceive clearly that which others overlook."
    ]
  },
  'ron-weasley': {
    name: 'Ron Weasley',
    responses: [
      "Bloody hell!",
      "Why spiders? Why couldn't it be 'follow the butterflies'?",
      "Wicked!",
      "She needs to sort out her priorities.",
      "Can I have a look at Uranus too, Lavender?",
      "I'm not going to make jokes during this exam. I have a feeling this paper is laughing at me.",
      "One person can't feel all that at once, they'd explode.",
      "Honestly, am I the only person who's ever bothered to read 'Hogwarts: A History?'"
    ]
  },
  'albus-dumbledore': {
    name: 'Albus Dumbledore',
    responses: [
      "It does not do to dwell on dreams and forget to live.",
      "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
      "Words are, in my not-so-humble opinion, our most inexhaustible source of magic.",
      "It is our choices that show what we truly are, far more than our abilities.",
      "The truth is a beautiful and terrible thing, and should therefore be treated with great caution.",
      "Nitwit! Blubber! Oddment! Tweak!",
      "Ah, music. A magic beyond all we do here!",
      "Alas, earwax!"
    ]
  }
};

export async function POST(request: Request) {
  try {
    const { character, message } = await request.json();
    
    if (!character || !message) {
      return NextResponse.json(
        { error: 'Missing character or message' },
        { status: 400 }
      );
    }
    
    const persona = personas[character as keyof typeof personas];
    
    if (!persona) {
      return NextResponse.json(
        { error: 'Character not found' },
        { status: 404 }
      );
    }
    
    // Simulate thinking time
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Get a random response from the character
    const randomIndex = Math.floor(Math.random() * persona.responses.length);
    const response = persona.responses[randomIndex];
    
    return NextResponse.json({
      character: persona.name,
      response
    });
  } catch (error) {
    console.error('Error in chat:', error);
    return NextResponse.json(
      { error: 'Failed to process chat' },
      { status: 500 }
    );
  }
} 