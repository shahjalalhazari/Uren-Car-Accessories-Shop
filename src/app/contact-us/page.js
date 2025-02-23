import "./contact-us.css";
import GoogleMap from '@/components/ContactUsPage/GoogleMap';
import SecondaryBtn from "@/components/shared/buttons/SecondaryBtn";
import PageBreadcrumb from '@/components/shared/PageBreadcrumb';


export const metadata = {
  title: "Contact Us",
  keywords: ["car", "parts", "car parts", "car accessories", "toyota"],
};

const ContactUsPage = () => {
  return (
    <div className="">
      <PageBreadcrumb breadcrumbLink={"Contact Us"} breadcrumbTitle={"Contact Us"}/>
      <div className="mx-8 my-20">
        {/* Google Map */}
        <GoogleMap/>

        {/* Contact Form & Address Book */}
        <div className="contact-address-layout">

          {/* Contact Form */}
          <div className="contact-form-content ">
            <h1>Tell Us Your <span className="text-primary">Message</span></h1>
            
            <form className="contact-form">
              {/* Name Field */}
              <div className="contact-form-group">
                <label>Your Name <span className='text-red-500'>*</span></label>
                <input type="text" name="contactName" id="ContactName" required />
              </div>
              {/* Email Field */}
              <div className="contact-form-group">
                <label>Your Email <span className='text-red-500'>*</span></label>
                <input type="email" name="contactEmail" id="contactEmail" required />
              </div>
              {/* Subject Field */}
              <div className="contact-form-group">
                <label>Subject <span className='text-red-500'>*</span></label>
                <input type="text" name="contactSubject" id="contactSubject" required />
              </div>
              {/* Message Area */}
              <div className="contact-form-group">
                <label>Message <span className='text-red-500'>*</span></label>
                <textarea name="contactMessage" id="contactMessage" required/>
              </div>
              <SecondaryBtn text={"Send"}/>
            </form>
          </div>

          {/* Address Book */}
          <div className="">
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;