import "./contact-us.css";
import GoogleMap from '@/components/ContactUsPage/GoogleMap';
import SecondaryBtn from "@/components/shared/buttons/SecondaryBtn";
import PageBreadcrumb from '@/components/shared/PageBreadcrumb';
import { BiEnvelope, BiHome, BiPhone } from "react-icons/bi";


export const metadata = {
  title: "Contact Us",
  keywords: ["car", "parts", "car parts", "car accessories", "toyota"],
};

const ContactUsPage = () => {
  return (
    <div>
      <PageBreadcrumb breadcrumbLink={"Contact Us"} breadcrumbTitle={"Contact Us"}/>
      <div className="uren-container">
        {/* Google Map */}
        <GoogleMap/>

        {/* Contact Form & Address Book */}
        <div className="contact-layout">

          {/* Contact Form */}
          <div className="contact-form-content">
            <h2 className="contact-page-title">Tell Us Your <span className="text-primary">Message</span></h2>
            
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
          <div className="bg-[#eee] p-6 lg:p-8 h-fit">
            <h2 className="contact-page-title"><span className="text-primary">Contact</span> Us</h2>
            <p className="address-book-message">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.</p>
            <div className="space-y-4 lg:space-y-6">
              <div className="address-block ">
              <h5><BiHome /> Address:</h5>
              <p>233/26 Ewrat Holdings Inc. Al Waha St. Al Qouz 3. Al Quoz, Dubai - UAE.</p>
            </div>
            <div className="address-block">
              <h5><BiPhone /> Number:</h5>
              <p><span className="font-semibold">Mobile:</span> +971 58 919 6282</p>
              <p><span className="font-semibold">Phone:</span> +971 58 919 6282</p>
            </div>
            <div className="address-block">
              <h5><BiEnvelope /> E-mail:</h5>
              <p>shahjalalhazari1@gmail.com</p>
              <p>djangoactivation@gmail.com</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;