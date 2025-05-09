"use client";
import { useState } from "react";
import ATMCardDisplay from "@/components/user/profile/ATMCardDisplay";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import PasswordField from "@/components/shared/fields/PasswordField";

const ClientProfilePage = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
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
              From your account dashboard you can view your recent orders,
              manage your shipping and billing addresses and edit your password
              and account details.
            </p>
          </div>
        )}

        {activeTab === "Orders" && (
          <div className="orders">
            <h6 className="profile-heading">MY ORDERS</h6>
            <p className="body-text mt-4">
              Here you will get all the ordered information.
            </p>
            <div className="ordered-list mt-6 lg:mt-8">
              <div className="ordered-list-item">
                <div className="item-head">
                  <p>
                    <span className="text-highlight">Order #4563</span> <br />
                    Date: 18 Apr 2025
                  </p>
                  <p className="item-price">AED 999.99</p>
                </div>
                <div className="item-body">
                  <div className="item-body-content">
                    <p>
                      Delivery On <br />{" "}
                      <span className="text-highlight">21 Apr 2025</span>
                    </p>
                    <div className="badge badge-soft badge-primary rounded-none">
                      On Hold
                    </div>
                  </div>
                  <div className="item-body-imgs">
                    <Image
                      src={"/images/product/small-size/1.jpg"}
                      alt=""
                      width={60}
                      height={60}
                    />
                    <Image
                      src={"/images/product/small-size/2.jpg"}
                      alt=""
                      width={60}
                      height={60}
                    />
                    <Image
                      src={"/images/product/small-size/3.jpg"}
                      alt=""
                      width={60}
                      height={60}
                    />
                    <Image
                      src={"/images/product/small-size/4.jpg"}
                      alt=""
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
                <div className="item-footer uren-transition">
                  <FaRegStar /> <p>Rate Products</p>
                </div>
              </div>
              <div className="ordered-list-item">
                <div className="item-head">
                  <p>
                    <span className="text-highlight">Order #4563</span> <br />
                    Date: 18 Apr 2025
                  </p>
                  <p className="item-price">AED 999.99</p>
                </div>
                <div className="item-body">
                  <div className="item-body-content">
                    <p>
                      Delivery On <br />{" "}
                      <span className="text-highlight">21 Apr 2025</span>
                    </p>
                    <div className="badge badge-soft badge-primary rounded-none">
                      On Hold
                    </div>
                  </div>
                  <div className="item-body-imgs">
                    <Image
                      src={"/images/product/small-size/1.jpg"}
                      alt=""
                      width={60}
                      height={60}
                    />
                    <Image
                      src={"/images/product/small-size/2.jpg"}
                      alt=""
                      width={60}
                      height={60}
                    />
                    <Image
                      src={"/images/product/small-size/3.jpg"}
                      alt=""
                      width={60}
                      height={60}
                    />
                    <Image
                      src={"/images/product/small-size/4.jpg"}
                      alt=""
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
                <div className="item-footer uren-transition">
                  <FaRegStar /> <p>Rate Products</p>
                </div>
              </div>
              <div className="ordered-list-item">
                <div className="item-head">
                  <p>
                    <span className="text-highlight">Order #4563</span> <br />
                    Date: 18 Apr 2025
                  </p>
                  <p className="item-price">AED 999.99</p>
                </div>
                <div className="item-body">
                  <div className="item-body-content">
                    <p>
                      Delivery On <br />{" "}
                      <span className="text-highlight">21 Apr 2025</span>
                    </p>
                    <div className="badge badge-soft badge-primary rounded-none">
                      On Hold
                    </div>
                  </div>
                  <div className="item-body-imgs">
                    <Image
                      src={"/images/product/small-size/1.jpg"}
                      alt=""
                      width={60}
                      height={60}
                    />
                    <Image
                      src={"/images/product/small-size/2.jpg"}
                      alt=""
                      width={60}
                      height={60}
                    />
                    <Image
                      src={"/images/product/small-size/3.jpg"}
                      alt=""
                      width={60}
                      height={60}
                    />
                    <Image
                      src={"/images/product/small-size/4.jpg"}
                      alt=""
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
                <div className="item-footer uren-transition">
                  <FaRegStar /> <p>Rate Products</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Addresses" && (
          <div className="addresses">
            <p>
              The following addresses will be used on the checkout page by
              default.
            </p>
            <div className="addresses-layout mt-6 lg:mt-8">
              <div>
                <h6 className="profile-heading mb-2">Billing Address</h6>
                <p>
                  <strong>Apartment: </strong>Ewrat Holdings Inc. Building #26 -
                  2nd Floor.
                </p>
                <p>
                  <strong>Street / Area: </strong>Al Waha St. Al Quoz 3.
                </p>
                <p>
                  <strong>City: </strong>Al Quoz
                </p>
                <p>
                  <strong>State: </strong>Dubai
                </p>
                <p>
                  <strong>Zip Code: </strong>00000
                </p>
                <p>
                  <strong>Country: </strong>Unite Arab Emirates
                </p>
              </div>
              <div>
                <h6 className="profile-heading mb-2">Shipping Address</h6>
                <p>
                  <strong>Apartment: </strong>Ewrat Holdings Inc. Building #26 -
                  2nd Floor.
                </p>
                <p>
                  <strong>Street / Area: </strong>Al Waha St. Al Quoz 3.
                </p>
                <p>
                  <strong>City: </strong>Al Quoz
                </p>
                <p>
                  <strong>State: </strong>Dubai
                </p>
                <p>
                  <strong>Zip Code: </strong>00000
                </p>
                <p>
                  <strong>Country: </strong>Unite Arab Emirates
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Payment Methods" && (
          <div className="payment-methods">
            <h6 className="profile-heading">Saved Payment Methods</h6>
            <div className="payment-methods-layout mt-6">
              <div className="single-payment-card w-full">
                <ATMCardDisplay
                  cardNumber="1234567812345678"
                  cardHolder="John Doe"
                  expiry="12/26"
                  cardType="VISA"
                />
                <div className="card-actions">
                  <button className="uren-transition">EDIT</button>
                  <button className="uren-transition">DELETE</button>
                </div>
              </div>
              <div className="single-payment-card">
                <ATMCardDisplay
                  cardNumber="1234567812345678"
                  cardHolder="Shahjalal Hazari"
                  expiry="12/26"
                  cardType="MASTER CARD"
                />
                <div className="card-actions">
                  <button className="uren-transition">EDIT</button>
                  <button className="uren-transition">DELETE</button>
                </div>
              </div>
              <div className="single-payment-card">
                <ATMCardDisplay
                  cardNumber="1234567812345678"
                  cardHolder="John Doe"
                  expiry="12/26"
                  cardType="VISA"
                />
                <div className="card-actions">
                  <button className="uren-transition">EDIT</button>
                  <button className="uren-transition">DELETE</button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mx-auto mt-6 lg:mt-8">
              <button className="uren-transition profile-page-btn">
                Add New
              </button>
            </div>
          </div>
        )}

        {activeTab === "Account Details" && (
          <div className="account-details">
            <h6 className="profile-heading mb-6 lg:mb-8">Account Details</h6>
            <form className="account-details-form">
              <div className="grid md:grid-cols-2 gap-x-6 lg:gap-x-8">
                <div className="form-group">
                  <label htmlFor="f-name">
                    First Name: <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="f-name"
                    defaultValue={"Shahjalal"}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="l-name">
                    Last Name: <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="l-name"
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
              <div className="w-full md:w-1/2 lg:w-1/3 mx-auto">
                <input
                  type="submit"
                  value="Update Changes"
                  className="uren-transition profile-page-btn"
                />
              </div>
            </form>
            <h6 className="profile-heading mb-6 lg:mb-8 mt-8">
              Change Password
            </h6>
            <form className="change-password-form">
              <PasswordField
                label={"Current Password"}
                name={"current-password"}
                placeholder={"Enter Current Password"}
              />
              <div className="grid md:grid-cols-2 gap-x-6 lg:gap-x-8">
                <PasswordField
                  label={"New Password"}
                  name={"new-password"}
                  placeholder={"Enter New Password"}
                />
                <PasswordField
                  label={"New Confirm Password"}
                  name={"new-confirm-password"}
                  placeholder={"Enter New Confirm Password"}
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 mx-auto">
                <input
                  type="submit"
                  value="Update Password"
                  className="uren-transition profile-page-btn"
                />
              </div>
            </form>
          </div>
        )}

        {activeTab === "Logout" && (
          <div className="text-red-500 font-semibold">
            You have been logged out.
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientProfilePage;
