'use client'; // This marks the entire file as a Client Component
import Image from 'next/image';

import { useState } from 'react';
function ImageWithCaption() {
  const [hideDescriptions, setHideDescriptions] = useState(false);

  const handleDescriptionToggle = () => {
    setHideDescriptions(!hideDescriptions);
  };

  return (
    <main className="bg-gray-50 font-sans leading-normal tracking-normal">
      <div className="space-x-4 p-4">
        <label>
          <input
            type="checkbox"
            checked={hideDescriptions}
            onChange={handleDescriptionToggle}
          />
          Hide all Descriptions
        </label>
      </div>
      <nav className="bg-white shadow">{/* Existing nav content */}</nav>

      <main className=" mx-auto px-1 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {/* Example block for one image */}
          <div className="overflow-hidden shadow-lg rounded-sm cursor-pointer m-auto p-2 bg-white">
            <Image
              src="/cry.png"
              alt="Photo 1"
              width={250}
              height={100}
              layout="responsive"
            />
            {hideDescriptions ? null : (
              <div className="p-4">
                <h3 className="text-xs font-semibold">Stunning Landscapes</h3>

                <p className="text-gray-600 mt-2 text-[10px]">
                  Explore the beauty of landscapes through our photography.
                </p>
              </div>
            )}
          </div>
          {/* Example block for one image */}
          <div className="overflow-hidden shadow-lg rounded-sm cursor-pointer m-auto p-2 bg-white">
            <Image
              src="/cry.png"
              alt="Photo 1"
              width={250}
              height={100}
              layout="responsive"
            />
            {hideDescriptions ? null : (
              <div className="p-4">
                <h3 className="text-xs font-semibold">Stunning Landscapes</h3>

                <p className="text-gray-600 mt-2 text-[10px]">
                  Explore the beauty of landscapes through our photography.
                </p>
              </div>
            )}
          </div>

          {/* Repeat similar blocks for other images */}
        </div>
      </main>

      <footer className="bg-white shadow mt-20 p-4 text-center">
        <p className="text-gray-700 text-[10px]">
          © 2024 PhotographyBlog. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

export default ImageWithCaption;
