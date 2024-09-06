const Contact: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-6 md:px-12 lg:px-24 bg-gray-600 text-white min-h-screen text-center">
      <h2 className="text-4xl font-extrabold text-blue-400 mb-6">Contact</h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
        I'd love to hear from you! Whether you have a question or just want to
        say hi, feel free to drop a message.
      </p>
      <form className="max-w-xl mx-auto">
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-4 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            className="w-full p-4 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <textarea
            className="w-full p-4 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            placeholder="Your Message"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-blue-600 transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
