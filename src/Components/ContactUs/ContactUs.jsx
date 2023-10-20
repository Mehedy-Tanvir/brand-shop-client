const ContactUs = () => {
  return (
    <div className="px-2 py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-medium text-center md:text-5xl">
              Contact Nexus
            </h2>
            <p className="mt-6 mb-6 text-lg text-gray-600">
              Have questions or need assistance? Feel free to reach out to us.
              We are here to help you with your tech needs.
            </p>
            <div className="text-left">
              <h3 className="mb-2 text-2xl font-semibold text-gray-800">
                Contact Information
              </h3>
              <p className="text-gray-600">
                <strong>Address:</strong> 123 Nexus Street, Tech City, 12345
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> info@nexus-techstore.com
              </p>
            </div>
          </div>
          <div>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 rounded input input-bordered"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 rounded input input-bordered"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 rounded input input-bordered"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-opacity-60"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
