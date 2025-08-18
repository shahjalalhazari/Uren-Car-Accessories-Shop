import GoogleMapLocation from "@/components/contactUsPage/GoogleMapLocation";
import SecondaryBtn from "@/components/shared/buttons/SecondaryBtn";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import { BiEnvelope, BiHome, BiPhone } from "react-icons/bi";
import "./contact-us.css";
import TextInputField from "@/components/shared/formInputFields/TextInputField";
import TextAreaField from "@/components/shared/formInputFields/TextAreaField";


export const metadata = {
  title: "Contact Us",
  keywords: ["car", "parts", "car parts", "car accessories", "toyota"],
};

const ContactUsPage = () => {

  return (
    <>
      <PageBreadcrumb breadcrumbLink={"Contact Us"} breadcrumbTitle={"Contact Us"}/>
      
      {/* MAIN CONTENT */}
      <div className="uren-container">
        {/* Google Map */}
        <GoogleMapLocation />

        {/* CONTACT FORM & ADDRESS BOOK */}
        <div className="contact-form-layout">

          {/* CONTACT FORM */}
          <div className="contact-form-content">
            <h2 className="contact-page-title">Tell Us Your <span className="text-primary">Message</span></h2>
            
            <form className="contact-form">
              {/* NAME FIELD */}
              <TextInputField label="Your Name" type="text" name="contactName" id="ContactName" required />
              {/* EMAIL FIELD */}
              <TextInputField label="Your Email" type="email" name="contactEmail" id="contactEmail" required />
              {/* SUBJECT FIELD */}
              <TextInputField label="Subject" type="text" name="contactSubject" id="contactSubject" required />
              {/* MESSAGE AREA */}
              <TextAreaField label="Message" name="contactMessage" id="contactMessage" required />
              {/* SUBMIT BUTTON */}
              <SecondaryBtn text={"Send"}/>
            </form>
          </div>

          {/* Address Book */}
          <div className="address-book">
            <h2 className="contact-page-title"><span className="text-primary">Contact</span> Us</h2>
            <p className="address-book-message">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica.</p>
            <div className="contact-blocks">
              <div className="address-block ">
                <h5><BiHome className="text-primary"/> Address:</h5>
                <p>233/26 Ewrat Holdings Inc. Al Waha St. Al Qouz 3. Al Quoz, Dubai - UAE.</p>
              </div>
              <div className="address-block">
                <h5><BiPhone className="text-primary"/> Number:</h5>
                <p><span className="font-semibold">Mobile:</span> +971 58 919 6282</p>
                <p><span className="font-semibold">Phone:</span> +971 58 919 6282</p>
              </div>
              <div className="address-block">
                <h5><BiEnvelope className="text-primary"/> E-mail:</h5>
                <p>shahjalalhazari1@gmail.com</p>
                <p>djangoactivation@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;