import { House } from '@/types';

export const houses: House[] = [
  {
    id: 'gryffindor',
    name: 'Gryffindor',
    founder: 'Godric Gryffindor',
    colors: ['Scarlet', 'Gold'],
    animal: 'Lion',
    element: 'Fire',
    traits: ['Courage', 'Bravery', 'Nerve', 'Chivalry'],
    description: 'Gryffindor values bravery, daring, nerve, and chivalry. Its emblematic animal is the lion, and its colors are scarlet and gold. Minerva McGonagall is the most recent Head of Gryffindor. The Gryffindor common room is located in one of the castle\'s towers (Gryffindor Tower), the entrance is on the seventh floor and is guarded by a portrait of The Fat Lady. She permits entrance if given the correct password.',
    commonRoom: 'Gryffindor Tower',
    imageUrl: '/images/gryffindor.svg'
  },
  {
    id: 'hufflepuff',
    name: 'Hufflepuff',
    founder: 'Helga Hufflepuff',
    colors: ['Yellow', 'Black'],
    animal: 'Badger',
    element: 'Earth',
    traits: ['Hard work', 'Dedication', 'Patience', 'Loyalty', 'Fair play'],
    description: 'Hufflepuff values hard work, dedication, patience, loyalty, and fair play. Its emblematic animal is the badger, and yellow and black are its colors. Pomona Sprout was the Head of Hufflepuff during 1991-1998, Sprout left the post of Head of Hufflepuff and Herbology Professor sometime before 2017 and was replaced by Neville Longbottom. The Hufflepuff common room is accessed through a barrel near the kitchens.',
    commonRoom: 'Near the kitchens',
    imageUrl: '/images/hufflepuff.svg'
  },
  {
    id: 'ravenclaw',
    name: 'Ravenclaw',
    founder: 'Rowena Ravenclaw',
    colors: ['Blue', 'Bronze'],
    animal: 'Eagle',
    element: 'Air',
    traits: ['Intelligence', 'Wisdom', 'Creativity', 'Originality', 'Individuality'],
    description: 'Ravenclaw values intelligence, knowledge, curiosity, creativity and wit. Its emblematic animal is the eagle, and its colors are blue and bronze. The Ravenclaw common room is in one of the castle\'s towers and is accessed through a door with an eagle door knocker. The knocker asks a riddle, and if answered correctly, entry is granted.',
    commonRoom: 'Ravenclaw Tower',
    imageUrl: '/images/ravenclaw.svg'
  },
  {
    id: 'slytherin',
    name: 'Slytherin',
    founder: 'Salazar Slytherin',
    colors: ['Green', 'Silver'],
    animal: 'Serpent',
    element: 'Water',
    traits: ['Ambition', 'Cunning', 'Leadership', 'Resourcefulness'],
    description: 'Slytherin values ambition, cunning, leadership, and resourcefulness. Its emblematic animal is the serpent, and its colors are green and silver. The Slytherin common room is located behind a wall in the dungeons of Hogwarts. The wall opens if the correct password is spoken.',
    commonRoom: 'The Dungeons',
    imageUrl: '/images/slytherin.svg'
  }
]; 