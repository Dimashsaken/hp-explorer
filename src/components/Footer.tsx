'use client';

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-900 shadow-inner mt-auto">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Harry Potter Explorer
        </p>
      </div>
    </footer>
  );
} 