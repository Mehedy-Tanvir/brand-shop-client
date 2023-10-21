const Faq = () => {
  return (
    <div className="container px-2 mx-auto mt-20 mb-10">
      <h1 className="text-4xl font-medium text-center md:text-5xl">
        Frequently Asked Questions
      </h1>
      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
        <img src="/faq.jpg" alt="" />
        <div className="space-y-4">
          <div className="collapse collapse-arrow bg-orange-50">
            <input type="radio" name="my-accordion-2" />
            <div className="text-xl font-medium collapse-title">
              What is your return policy?
            </div>
            <div className="collapse-content">
              <p>
                Our return policy allows you to return products within 30 days
                of purchase. The item must be in its original condition and
                packaging.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-orange-50">
            <input type="radio" name="my-accordion-2" />
            <div className="text-xl font-medium collapse-title">
              How can I track my order?
            </div>
            <div className="collapse-content">
              <p>
                You can track your order by logging into your account on our
                website. We also provide tracking information via email.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-orange-50">
            <input type="radio" name="my-accordion-2" />
            <div className="text-xl font-medium collapse-title">
              Do you offer warranties on your products?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we offer warranties on most of our electronic products. The
                warranty duration varies by product and is specified on the
                product page.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-orange-50">
            <input type="radio" name="my-accordion-2" />
            <div className="text-xl font-medium collapse-title">
              What payment methods do you accept?
            </div>
            <div className="collapse-content">
              <p>
                We accept various payment methods, including credit/debit cards,
                PayPal, and online payment gateways.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-orange-50">
            <input type="radio" name="my-accordion-2" />
            <div className="text-xl font-medium collapse-title">
              Is international shipping available?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we offer international shipping to many countries. You can
                check if your location is eligible during the checkout process.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-orange-50">
            <input type="radio" name="my-accordion-2" />
            <div className="text-xl font-medium collapse-title">
              What should I do if I receive a defective product?
            </div>
            <div className="collapse-content">
              <p>
                If you receive a defective product, please contact our customer
                support immediately. We will guide you through the return and
                exchange process.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-orange-50">
            <input type="radio" name="my-accordion-2" />
            <div className="text-xl font-medium collapse-title">
              Do you have a physical store where I can see the products in
              person?
            </div>
            <div className="collapse-content">
              <p>
                We primarily operate online, but we do have physical stores in
                select locations. You can check our website for details on store
                locations.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="collapse collapse-arrow bg-orange-50">
            <input type="radio" name="my-accordion-2" />
            <div className="text-xl font-medium collapse-title">
              Can I cancel my order after its been placed?
            </div>
            <div className="collapse-content">
              <p>
                You can cancel your order before it has been shipped. Please
                contact our customer support for assistance.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-orange-50">
            <input type="radio" name="my-accordion-2" />
            <div className="text-xl font-medium collapse-title">
              Do you offer technical support for your products?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we provide technical support for our products. You can
                reach our support team via phone or email.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-orange-50">
            <input type="radio" name="my-accordion-2" />
            <div className="text-xl font-medium collapse-title">
              Is my personal information secure when shopping on your website?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we take data security seriously. Our website uses
                encryption to protect your personal information.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="collapse collapse-arrow bg-orange-50">
            <input type="radio" name="my-accordion-2" />
            <div className="text-xl font-medium collapse-title">
              What is the shipping cost and delivery time?
            </div>
            <div className="collapse-content">
              <p>
                Shipping costs and delivery times vary based on your location
                and the selected shipping method. You can find detailed
                information at checkout.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-orange-50">
            <input type="radio" name="my-accordion-2" />
            <div className="text-xl font-medium collapse-title">
              Do you offer in-store pickup?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we offer in-store pickup for select locations. You can
                choose this option during checkout.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-orange-50">
            <input type="radio" name="my-accordion-2" />
            <div className="text-xl font-medium collapse-title">
              How do I contact customer support?
            </div>
            <div className="collapse-content">
              <p>
                You can contact our customer support team through our Contact Us
                page on the website, via email, or by phone. We are available to
                assist you during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
