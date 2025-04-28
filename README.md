# Harry Potter Explorer

A magical web application that allows users to explore the universe of Harry Potter, including characters, houses, and more.


## 🧙‍♂️ Overview

Harry Potter Explorer is a web application that provides an immersive experience for Harry Potter fans. The application lets users explore the four Hogwarts houses, discover detailed information about each one, browse through characters from the series, search for specific characters, and add favorites.

## 🚀 Features

- **Home Page**: A welcoming introduction to the magical universe of Harry Potter
- **Houses Page**: Information about the four Hogwarts houses (Gryffindor, Hufflepuff, Ravenclaw, and Slytherin)
- **House Details**: Detailed page for each house showing its traits, colors, founder, and more
- **Characters Page**: Browse through characters from the Harry Potter series
- **Character Search**: Search for characters by name
- **Character Details**: In-depth information about each character
- **Favorites**: Save your favorite characters using local storage
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 🛠️ Technologies Used

- **Next.js**: React framework for server-side rendering and routing
- **TypeScript**: For type-safe code
- **TailwindCSS**: For styling
- **DaisyUI**: TailwindCSS component library
- **React Query**: For data fetching and caching
- **Axios**: For API requests
- **React Icons**: For beautiful icons

## 📦 Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/harry-potter-explorer.git
cd harry-potter-explorer
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## 🏗️ Project Structure

```
/
├── public/            # Static assets
│   └── images/        # Images used in the app (house emblems, screenshot)
├── src/               # Source code
│   ├── app/           # Next.js app router
│   │   ├── api/       # API routes
│   │   ├── houses/    # Houses pages
│   │   ├── characters/# Characters pages  
│   │   └── favorites/ # Favorites page
│   ├── components/    # Reusable components
│   ├── data/          # Static data
│   ├── lib/           # Utility functions
│   ├── services/      # API services
│   └── types/         # TypeScript types
└── README.md          # Project documentation
```

## 🎨 Design & Development Decisions

### Design Approach

The application follows a dark theme with gold/amber accents to reflect the magical and mystical universe of Harry Potter. Each house is color-coded according to its official colors from the books/movies to create an authentic experience.

- **Color Palette**: Dark background with house-specific colors for accents
- **Typography**: Clean, readable fonts for optimal user experience
- **Icons**: Magical-themed icons to enhance the wizarding world atmosphere

### Development Process

1. **Planning**: Define features, user flows, and technical requirements
2. **Structure**: Set up Next.js with TypeScript and required dependencies
3. **API Setup**: Create backend API endpoints to proxy the external Harry Potter API
4. **UI Development**: Implement responsive UI components with TailwindCSS
5. **Data Integration**: Connect UI with API endpoints using React Query
6. **Testing**: Manual testing for functionality and responsiveness
7. **Refinement**: Polish UI, improve performance, and fix bugs

### Technical Choices

- **Next.js App Router**: For modern, optimized page routing and server components
- **TypeScript**: For type safety and better developer experience
- **React Query**: For efficient data fetching, caching, and state management
- **TailwindCSS**: For rapid UI development with consistent styling
- **DaisyUI**: To enhance TailwindCSS with pre-built components
- **Local Storage**: For persisting user favorites without requiring authentication

## 💭 Challenges and Trade-offs

### Challenges Faced

1. **API Limitations**: The Harry Potter API doesn't provide images for all characters
2. **Data Inconsistency**: Some characters have incomplete information
3. **Performance**: Retrieving and filtering a large dataset of characters

### Trade-offs

1. **Server vs. Client Filtering**: Opted for server-side filtering for better performance at the cost of additional API complexity
2. **Image Handling**: Decided to show placeholders for missing images rather than finding alternative sources
3. **Feature Scope**: Focused on core features (houses and characters) over additional content like spells or locations to ensure quality delivery

## 🐞 Known Issues

- Character images are missing for many entries due to API limitations
- The search functionality is case-insensitive but doesn't support fuzzy matching
- Local storage of favorites doesn't sync across devices

## 🔮 Future Enhancements

- Add authentication to allow users to save favorites across devices
- Implement more extensive filtering for characters (by house, status, etc.)
- Add sections for spells, magical objects, and locations
- Integrate with a language model API for an interactive chat with Harry Potter characters

## 📝 License

This project is for educational and demonstration purposes only. Harry Potter and all associated characters and elements are trademarks of and © Warner Bros. Entertainment Inc.

## 🙏 Acknowledgements

- [Harry Potter API](https://hp-api.onrender.com/) for providing character data
- J.K. Rowling for creating the wonderful world of Harry Potter
