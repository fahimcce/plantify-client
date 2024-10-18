/* eslint-disable react/jsx-sort-props */
import Image from "next/image";

export default function AboutPage() {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-center justify-center p-8">
        <div className="w-full md:w-1/2 p-4">
          <Image
            src="https://i0.wp.com/saffronsgarden.com/wp-content/uploads/2019/10/acd5e131-ecd7-4e05-ba72-a2ceabe1b6f1.jpg?resize=1080%2C675&ssl=1"
            alt="Beautiful Garden"
            width={600}
            height={400}
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-4">About Plantify</h1>
          <p className="mb-4">
            Plantify is your trusted platform for all things gardening. Whether
            youre a beginner looking for tips or an experienced gardener
            searching for advanced advice, we provide comprehensive,
            easy-to-follow guides that help your plants thrive. From indoor
            plants to seasonal vegetable gardens, Plantify has been nurturing
            green thumbs and inspiring garden enthusiasts since our inception.
          </p>
        </div>
      </div>

      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-2">
          Our Commitment to Your Garden
        </h1>
        <p className="text-gray-600 mb-12">
          Helping you grow a beautiful, sustainable, and thriving garden.
        </p>
        <div className="flex justify-center space-x-8">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs">
            <img
              src="https://placehold.co/100x100"
              alt="Gardening Tools"
              className="mx-auto mb-4 rounded-full"
            />
            <h2 className="text-xl font-bold mb-2">01</h2>
            <h3 className="text-lg font-semibold mb-2">
              Personalized Gardening Tips
            </h3>
            <p className="text-gray-600">
              Receive tailored advice for your specific gardening needs, whether
              youre growing herbs, flowers, or vegetables.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs">
            <img
              src="https://img.freepik.com/free-photo/young-woman-gardening-backyard_53876-14582.jpg"
              alt="Person Gardening"
              className="mx-auto mb-4 rounded-full"
            />
            <h2 className="text-xl font-bold mb-2">02</h2>
            <h3 className="text-lg font-semibold mb-2">
              Garden Planning and Design
            </h3>
            <p className="text-gray-600">
              Learn how to design your perfect garden layout, choose the right
              plants for your climate, and optimize your space.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs">
            <img
              src="https://t.ly/UsrUC"
              alt="Garden Maintenance"
              className="mx-auto mb-4 rounded-full"
            />
            <h2 className="text-xl font-bold mb-2">03</h2>
            <h3 className="text-lg font-semibold mb-2">
              Garden Maintenance Tips
            </h3>
            <p className="text-gray-600">
              Get expert advice on pruning, watering, and pest control to ensure
              your garden stays healthy and vibrant all year round.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
