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
      <div className="p-4 ">
        <label className=" uppercase text-sm flex items-center">
          <input
            type="checkbox"
            className="mr-1"
            checked={hideDescriptions}
            onChange={handleDescriptionToggle}
          />
          <a>Hide all Descriptions</a>
        </label>
      </div>
      <nav className="bg-white shadow">{/* Existing nav content */}</nav>

      <section className=" mx-auto p-1">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
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
        </div>
      </section>

      <footer className="bg-white shadow mt-20 p-4 text-center">
        <p className="text-gray-700 text-[10px]">
          © 2024 PhotographyBlog. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

export default ImageWithCaption;
