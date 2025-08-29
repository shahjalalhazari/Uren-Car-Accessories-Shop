

const Newsletter = () => {
  return (
    <div
        className="newsletter-bg bg-[url('/images/slider/3.jpg')]"
        aria-hidden="true"
      >
        {/* Content Section */}
        <div className="newsletter-content">
          <h2 className="newsletter-heading">Join Our Newsletter Now</h2>
          <p className="text-xs lg:text-sm w-[85%] lg:w-full mx-auto">
            Get E-mail updates about our latest shop and special offers.
          </p>
          <form className="newsletter-form ">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="outline-none"
            />
            <button type="submit" className="newsletter-submit-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
  );
};

export default Newsletter;