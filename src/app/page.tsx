import Link from 'next/link';
import Image from 'next/image';
import { FaHandSparkles, FaHatWizard, FaDragon } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-amber-400">
          Welcome to the Wizarding World
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          Explore the magical universe of Harry Potter - from the noble houses of Hogwarts to the fascinating characters that inhabit this enchanted realm.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link 
            href="/houses" 
            className="btn btn-primary bg-amber-600 hover:bg-amber-700 border-none px-6 py-3 text-lg font-medium rounded-lg"
          >
            Discover Hogwarts Houses
          </Link>
          <Link 
            href="/characters" 
            className="btn btn-secondary bg-gray-700 hover:bg-gray-800 border-none px-6 py-3 text-lg font-medium rounded-lg"
          >
            Meet the Characters
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-amber-500/20 transition duration-300">
          <div className="text-amber-400 text-4xl mb-4 flex justify-center">
            <FaHatWizard />
          </div>
          <h2 className="text-2xl font-bold mb-3 text-center">Hogwarts Houses</h2>
          <p className="text-gray-300 mb-4">
            Discover the four noble houses of Hogwarts School of Witchcraft and Wizardry, each with their own unique traits, history and values.
          </p>
          <div className="text-center">
            <Link href="/houses" className="text-amber-400 hover:text-amber-300 font-medium">
              Explore Houses &rarr;
            </Link>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-amber-500/20 transition duration-300">
          <div className="text-amber-400 text-4xl mb-4 flex justify-center">
            <FaHandSparkles />
          </div>
          <h2 className="text-2xl font-bold mb-3 text-center">Magical Characters</h2>
          <p className="text-gray-300 mb-4">
            Meet the witches, wizards, and magical beings that populate the wizarding world, from Hogwarts students to powerful sorcerers.
          </p>
          <div className="text-center">
            <Link href="/characters" className="text-amber-400 hover:text-amber-300 font-medium">
              View Characters &rarr;
            </Link>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-amber-500/20 transition duration-300">
          <div className="text-amber-400 text-4xl mb-4 flex justify-center">
            <FaDragon />
          </div>
          <h2 className="text-2xl font-bold mb-3 text-center">Wizarding World</h2>
          <p className="text-gray-300 mb-4">
            Immerse yourself in the rich lore and history of the magical universe created by J.K. Rowling, from Diagon Alley to Hogwarts.
          </p>
          <div className="text-center">
            <Link href="/houses" className="text-amber-400 hover:text-amber-300 font-medium">
              Begin Your Journey &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
