"use client";

export default function Hero() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://t.ly/JkTEz')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay for better text readability */}
      <div className="z-10 text-center text-white p-8">
        <h1 className="text-5xl font-bold mb-6">Welcome to Plantify</h1>
        <p className="text-lg mb-8">
          Discover expert gardening tips, advice, and insights to help you grow
          the garden of your dreams.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  );
}
