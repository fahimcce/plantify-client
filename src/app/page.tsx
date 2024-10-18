export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {/* Hero Section */}
      <section className="relative bg-green-50">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold text-green-700">
            Welcome to Plantify
          </h1>
          <p className="mt-6 text-xl text-gray-700">
            Your go-to platform for expert gardening tips and advice.
          </p>
          <button className="mt-10 bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-full shadow-lg transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Featured Gardening Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Featured Gardening Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-green-100 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold text-green-700">
                Indoor Plants for Beginners
              </h3>
              <p className="mt-4 text-gray-600">
                Learn how to grow beautiful plants inside your home with minimal
                effort.
              </p>
            </div>
            <div className="bg-green-100 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold text-green-700">
                Watering Your Garden Properly
              </h3>
              <p className="mt-4 text-gray-600">
                Proper watering techniques can make all the difference for
                healthy plants.
              </p>
            </div>
            <div className="bg-green-100 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold text-green-700">
                Seasonal Gardening Hacks
              </h3>
              <p className="mt-4 text-gray-600">
                Maximize your garden’s potential with these seasonal tips and
                tricks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Gardening Journey?
          </h2>
          <p className="text-xl mb-6">
            Join the Plantify community and get access to exclusive tips and
            advice!
          </p>
          <button className="bg-white text-green-600 hover:bg-green-200 py-3 px-8 rounded-full shadow-lg transition duration-300">
            Join Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Plantify. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
}
