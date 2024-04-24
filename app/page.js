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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 ">
          {/* Example block for one image */}
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-white">
            <Image
              src="/cry.png"
              alt="Photo 2"
              width={260} // Same dimensions as the first image
              height={260}
              layout="responsive"
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
            />
            {hideDescriptions ? null : (
              <div className="">
                <h3 className=" px-2 pt-4 text-xs font-semibold">
                  Stunning Landscapes
                </h3>

                <div>
                  <p className="text-gray-600 mt-1 text-[10px] p-2">
                    Explore the beauty of landscapes through our photography.
                  </p>
                </div>
              </div>
            )}
          </div>
          {/* Example block for one image */}
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-white">
            <Image
              src="/cry.png"
              alt="Photo 2"
              width={260} // Same dimensions as the first image
              height={260}
              layout="responsive"
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
            />
            {hideDescriptions ? null : (
              <div className="">
                <h3 className=" px-2 pt-4 text-xs font-semibold">
                  Stunning Landscapes
                </h3>

                <div>
                  <p className="text-gray-600 mt-1 text-[10px] p-2">
                    Other responsive settings correctly. Here's how to do it
                    without introducing new classes:
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-white">
            <div className="">
              {' '}
              <Image
                src="/cabane.jpg"
                alt="Photo 2"
                width={260} // Same dimensions as the first image
                height={260}
                layout="responsive"
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
              />
            </div>

            {hideDescriptions ? null : (
              <div className="">
                <h3 className=" px-2 pt-4 text-xs font-semibold">
                  Stunning Landscapes
                </h3>

                <div>
                  <p className="text-gray-600 mt-1 text-[10px] p-2">
                    Explore the beauty of landscapes through our photography.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Repeat similar blocks for other images */}
          {/* Example block for one image */}
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-white">
            <Image
              src="/cry.png"
              alt="Photo 2"
              width={260} // Same dimensions as the first image
              height={260}
              layout="responsive"
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
            />
            {hideDescriptions ? null : (
              <div className="">
                <h3 className=" px-2 pt-4 text-xs font-semibold">
                  Stunning Landscapes
                </h3>

                <div>
                  <p className="text-gray-600 mt-1 text-[10px] p-2">
                    Explore the beauty of landscapes through our photography.
                  </p>
                </div>
              </div>
            )}
          </div>
          {/* Example block for one image */}
          {/* Example block for one image */}
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-white">
            {' '}
            <Image
              src="/cabane.jpg"
              alt="Photo 2"
              width={260} // Same dimensions as the first image
              height={260}
              layout="responsive"
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
            />
            {hideDescriptions ? null : (
              <div className="">
                <h3 className=" px-2 pt-4 text-xs font-semibold">
                  Stunning Landscapes
                </h3>

                <div>
                  <p className="text-gray-600 mt-1 text-[10px] p-2">
                    Explore the beauty of landscapes through our photography.
                  </p>
                </div>
              </div>
            )}
          </div>
          {/* Example block for one image */}

          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-white">
            <Image
              src="/cry.png"
              alt="Photo 2"
              width={260} // Same dimensions as the first image
              height={260}
              layout="responsive"
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
            />

            {hideDescriptions ? null : (
              <div className="">
                <h3 className=" px-2 pt-4 text-xs font-semibold">
                  Stunning Landscapes
                </h3>

                <div>
                  <p className="text-gray-600 mt-1 text-[10px] p-2">
                    Explore the beauty of landscapes through our photography.
                  </p>
                </div>
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
