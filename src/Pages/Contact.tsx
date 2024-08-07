const Contact: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Contact</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
        I'd love to hear from you! Whether you have a question or just want to
        say hi, feel free to drop a message.
      </p>
      <form className="max-w-xl mx-auto">
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-4 rounded border-gray-300"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            className="w-full p-4 rounded border-gray-300"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <textarea
            className="w-full p-4 rounded border-gray-300"
            placeholder="Your Message"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-pink-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-pink-600 transform"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
