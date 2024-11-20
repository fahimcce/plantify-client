/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Shape */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-100 to-white -z-10"></div>

      {/* Hero Section */}
      <div className="container mx-auto text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold text-green-700 mb-6">
          Welcome to Plantify
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Transforming your spaces into green havens. Learn, grow, and connect
          with our thriving eco-conscious community.
        </p>
      </div>

      {/* Vision Section */}
      <div className="relative bg-white rounded-t-[60px] shadow-md py-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-6">
              <h2 className="text-4xl font-bold text-green-700 mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600">
                At Plantify, we envision a world where eco-friendly practices
                and sustainable living are part of everyday life. Our mission is
                to inspire a community dedicated to creating greener spaces and
                sharing practical knowledge.
              </p>
            </div>
            <div className="md:w-1/2 p-6">
              <img
                src="https://i.ibb.co/GtVk70y/story.jpg"
                alt="Vision"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave Shape Transition */}
      <div className="bg-gradient-to-t from-green-100 to-white h-20 -mt-6"></div>

      {/* About Us Section */}
      <div className="bg-green-50 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Plantify began in 2023 as a platform dedicated to bringing people
            closer to nature. With our resources and community support, we
            empower everyone to embrace gardening and sustainable living.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white rounded-b-[60px] shadow-md py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-center text-4xl font-bold text-green-700 mb-12">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap justify-center">
            {/* Team Member 1 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-green-100 p-6 rounded-lg shadow-lg text-center">
                <img
                  src="https://i.ibb.co.com/tbzSpqh/c-1.jpg"
                  alt="Sarah Green"
                  className="rounded-full mx-auto mb-4 w-24 h-24"
                />
                <h4 className="text-xl font-bold mb-2 text-green-800">
                  Sarah Green
                </h4>
                <p className="text-sm text-gray-600">Founder & Visionary</p>
                <p className="text-gray-700 mt-3">
                  Sarah is an environmentalist who turned her passion for
                  sustainability into Plantify, inspiring others to live green.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-green-100 p-6 rounded-lg shadow-lg text-center">
                <img
                  src="https://i.ibb.co.com/tbzSpqh/c-1.jpg"
                  alt="James Willow"
                  className="rounded-full mx-auto mb-4 w-24 h-24"
                />
                <h4 className="text-xl font-bold mb-2 text-green-800">
                  James Willow
                </h4>
                <p className="text-sm text-gray-600">Design Specialist</p>
                <p className="text-gray-700 mt-3">
                  James ensures our platform stays user-friendly and visually
                  engaging, blending design with functionality.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-green-100 p-6 rounded-lg shadow-lg text-center">
                <img
                  src="https://i.ibb.co.com/tbzSpqh/c-1.jpg"
                  alt="Maria Bloom"
                  className="rounded-full mx-auto mb-4 w-24 h-24"
                />
                <h4 className="text-xl font-bold mb-2 text-green-800">
                  Maria Bloom
                </h4>
                <p className="text-sm text-gray-600">Community Manager</p>
                <p className="text-gray-700 mt-3">
                  Maria connects our members, fostering collaboration and
                  inspiring a sense of community among Plantify users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-green-700 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Join Us on the Journey</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Be a part of the Plantify movement and make the world greener, one
          plant at a time. Sign up today to learn, share, and grow with us.
        </p>
        <button className="bg-white text-green-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
