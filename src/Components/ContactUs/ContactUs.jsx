const ContactUs = () => {
  return (
    <div className="px-2 py-12 bg-[var(--contact_background)]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-medium text-center md:text-6xl">
          Contact Nexus
        </h2>
        <div className="grid items-center grid-cols-1 gap-8 mt-10 md:grid-cols-2">
          <img src="/contact-us.jpg" alt="" />

          <div>
            <p className="mt-6 mb-6 text-lg text-[var(--contact_text2)]">
              Have questions or need assistance? Feel free to reach out to us.
              We are here to help you with your tech needs.
            </p>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block font-medium text-[var(--contact_text1)]"
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
                  className="block font-medium text-[var(--contact_text1)]"
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
                  className="block font-medium text-[var(--contact_text1)]"
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
            <div className="mt-10 text-left">
              <h3 className="mb-2 text-2xl font-semibold text-[var(--contact_text1)]">
                Contact Information
              </h3>
              <p className="text-[var(--contact_text2)]">
                <strong>Address:</strong> 123 Nexus Street, Tech City, 12345
              </p>
              <p className="text-[var(--contact_text2)]">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="text-[var(--contact_text2)]">
                <strong>Email:</strong> info@nexus-techstore.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
