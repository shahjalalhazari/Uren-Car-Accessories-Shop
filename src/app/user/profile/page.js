"use client"
import { useState } from "react";
import "./profile.css";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import ATMCardDisplay from "@/components/user/profile/ATMCardDisplay";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";


const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div>
      <PageBreadcrumb breadcrumbLink={"Profile"} breadcrumbTitle={"My Account"}/>
      <div className="uren-container profile-layout">
      {/* SIDEBAR */}
      <ul className="tab-items">
          {tabs.map((tab) => (
            <li
              key={tab}
              className={`tab-item uren-transition ${
                activeTab === tab ? "bg-primary" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>

      {/* MAIN CONTENT */}
      <div className="main-content">
        {activeTab === "Dashboard" && (
          <div className="dashboard">
            <h6 className="profile-heading">Hello Shahjalal Hazari.</h6>
            <p className="body-text mt-4">
              From your account dashboard you can view your recent orders, manage your shipping and billing addresses
              and edit your password and account details.
            </p>
          </div>
        )}

        {activeTab === "Orders" && (
          <div className="orders">
            <h6 className="profile-heading">MY ORDERS</h6>
            <p className="body-text mt-2">Here you will get all the ordered information. <span className="hidden">For more info please click on details button.</span></p>
              {/* ONLY FOR SMALL SCREEN */}
              <div className="ordered-list">
                <div className="ordered-list-item">
                  <div className="item-head">
                    <p><span className="text-dark-gray font-semibold">Order #4563</span> <br /> Ordered On: 18 Apr 2025</p>
                    <p className="text-dark-gray font-bold lg:text-base">AED 999.99</p>
                  </div>
                  <div className="item-body">
                    <div className="item-body-content">
                      <p>Delivery On <br /> <span className="text-dark-gray">21 Apr 2025</span></p>
                      <p className="bg-blue px-1 py-0.5 text-base-100 text-sm">Confirmed</p>
                    </div>
                    <div className="item-body-imgs">
                      <Image src={"/images/product/small-size/1.jpg"} alt="" width={60} height={60}/>
                      <Image src={"/images/product/small-size/2.jpg"} alt="" width={60} height={60}/>
                      <Image src={"/images/product/small-size/3.jpg"} alt="" width={60} height={60}/>
                      <Image src={"/images/product/small-size/4.jpg"} alt="" width={60} height={60}/>
                    </div>
                  </div>
                  <div className="item-footer">
                    <FaRegStar /> <p>Rate Products</p>
                  </div>
                </div>
                <div className="ordered-list-item">
                  <div className="item-head">
                    <p><span className="text-dark-gray font-semibold">Order #4563</span> <br /> Ordered On: 18 Apr 2025</p>
                    <p className="text-dark-gray font-bold lg:text-base">AED 999.99</p>
                  </div>
                  <div className="item-body">
                    <div className="item-body-content">
                      <p>Delivery On <br /> <span className="text-dark-gray">21 Apr 2025</span></p>
                      <p className="bg-blue px-1 py-0.5 text-base-100 text-sm">Confirmed</p>
                    </div>
                    <div className="item-body-imgs">
                      <Image src={"/images/product/small-size/1.jpg"} alt="" width={60} height={60}/>
                      <Image src={"/images/product/small-size/2.jpg"} alt="" width={60} height={60}/>
                      <Image src={"/images/product/small-size/3.jpg"} alt="" width={60} height={60}/>
                      <Image src={"/images/product/small-size/4.jpg"} alt="" width={60} height={60}/>
                    </div>
                  </div>
                  <div className="item-footer">
                    <FaRegStar /> <p>Rate Products</p>
                  </div>
                </div>
              </div>
          </div>
        )}

        {activeTab === "Addresses" && (
          <div className="addresses text-sm text-body">
            <p>The following addresses will be used on the checkout page by default.</p>
            <div className="grid grid-cols-2 gap-x-8 mt-6">
              <div>
                <h6 className="text-2xl font-bold text-dark-gray uppercase mb-2">Billing Address</h6>
                <p><strong>Apartment: </strong>Ewrat Holdings Inc. Building #26 - 2nd Floor.</p>
                <p><strong>Street / Area: </strong>Al Waha St. Al Quoz 3.</p>
                <p><strong>City: </strong>Al Quoz</p>
                <p><strong>State: </strong>Dubai</p>
                <p><strong>Zip Code: </strong>00000</p>
                <p><strong>Country: </strong>Unite Arab Emirates</p>
              </div>
              <div>
                <h6 className="text-2xl font-bold text-dark-gray uppercase mb-2">Shipping Address</h6>
                <p><strong>Apartment: </strong>Ewrat Holdings Inc. Building #26 - 2nd Floor.</p>
                <p><strong>Street / Area: </strong>Al Waha St. Al Quoz 3.</p>
                <p><strong>City: </strong>Al Quoz</p>
                <p><strong>State: </strong>Dubai</p>
                <p><strong>Zip Code: </strong>00000</p>
                <p><strong>Country: </strong>Unite Arab Emirates</p>
              </div>
            </div>
          </div>
        )}

          {activeTab === "Payment Methods" && (
            <>
              <h6 className="text-2xl font-bold text-dark-gray uppercase mb-8">Saved Payment Methods</h6>
              <div className="grid grid-cols-3 gap-x-8">
                <div className="">
                  <ATMCardDisplay
                  cardNumber="1234567812345678"
                  cardHolder="John Doe"
                  expiry="12/26"
                  cardType="VISA"
                    />
                <p className="text-xs text-center mt-2 uren-transition hover:text-primary">EDIT</p>
                </div>
              </div>
              <button className="secondary-btn mt-8 place-items-center">Add New</button>
            </>
        )}

          {activeTab === "Account Details" && (
            <><h6 className="text-2xl font-bold text-dark-gray uppercase mb-8">Account Details</h6>
          <form className="account-details space-y-6">
            <div className="grid grid-cols-2 gap-x-8">
              <div className="form-group">
                <label htmlFor="fname">
                  First Name: <span>*</span>
                </label>
                <input
                  type="text"
                  name="fname"
                  defaultValue={"Shahjalal"}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lname">
                  Last Name: <span>*</span>
                </label>
                <input
                  type="text"
                  name="lname"
                  defaultValue={"Hazari"}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email <span>*</span>
              </label>
              <input
                type="email"
                  name="email"
                  defaultValue={"shahjalalhazari1@gmail.com"}
                required
              />
                </div>
                <input type="submit" value="Update Details" className="secondary-btn" />
              </form>
                <button className="secondary-btn mt-8">Change Password</button>
              </>
        )}

        {activeTab === "Logout" && (
          <div className="text-red-500 font-semibold">You have been logged out.</div>
        )}
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;

const tabs = [
  "Dashboard",
  "Orders",
  "Addresses",
  "Payment Methods",
  "Account Details",
  "Logout",
];