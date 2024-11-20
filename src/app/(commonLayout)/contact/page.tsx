/* eslint-disable @typescript-eslint/no-explicit-any */

import ContactForm from "@/components/page/contactus/ContactForm";

const ContactUs = () => {
  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white py-16 px-6">
      {/* Header Section */}
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-green-700 mb-6">
          Contact Plantify
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Have questions, need support, or want to share feedback? Get in touch,
          and lets grow together!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-12">
        <ContactForm />
      </div>

      {/* Contact Details Section */}
      <div className="bg-white rounded-xl shadow-lg mt-16 p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">
          Get in Touch with Us
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Email</h3>
            <p className="text-gray-600">support@plantify.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
            <p className="text-gray-600">+880-9876-543210</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Office Address
            </h3>
            <p className="text-gray-600">
              123 Plantify Avenue, Green City, Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <iframe
          className="w-full h-[300px] rounded-xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9096102059584!2d90.39834811543294!3d23.75080209456764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b4fcf1f4d9%3A0xd6fbfa81d21c8b4!2sDhaka%20City%20Corporation!5e0!3m2!1sen!2sbd!4v1698868102167!5m2!1sen!2sbd"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          Let’s Connect!
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          We value every message we receive and strive to respond as quickly as
          possible. Join the Plantify journey today!
        </p>
        <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all">
          Send a Message
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
