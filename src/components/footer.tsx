import React from "react";
import Image from "next/image";
import icons from "@/../../public/Frame 741.png";
import send from "@/../../public/icon-send.png";
import google from "@/../../public/GooglePlay.png";
import qrcode from "@/../../public/Qrcode 1.png";
import appstore from "@/../../public/AppStore.png";

const Footer = () => {
  return (
    <footer className="text-[#fafafa] body-font bg-black">
      <div className="container px-6 py-12 mx-auto">
        <div className="flex flex-wrap justify-between gap-8">
          {/* Exclusive Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
            <h2 className="text-2xl font-bold font-inter mb-4">Exclusive</h2>
            <h3 className="text-lg font-medium font-poppins mb-2">Subscribe</h3>
            <p className="text-sm font-normal font-poppins mb-4">
              Get 10% off your first order
            </p>
            <div className="flex items-center border border-gray-600 rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-sm text-white bg-transparent focus:outline-none"
              />
              <button className="p-2 bg-black">
                <Image src={send} alt="send" width={20} height={18} />
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
            <h3 className="text-lg font-medium font-poppins mb-4">Support</h3>
            <p className="text-sm font-normal mb-2">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className="text-sm font-normal mb-2">exclusive@gmail.com</p>
            <p className="text-sm font-normal">+88015-88888-9999</p>
          </div>

          {/* Account Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
            <h3 className="text-lg font-medium font-poppins mb-4">Account</h3>
            <ul className="space-y-2">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>

          {/* Quick Link Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
            <h3 className="text-lg font-medium font-poppins mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Download App Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
            <h3 className="text-lg font-medium font-poppins mb-4">Download App</h3>
            <p className="text-sm text-gray-400 mb-4">Save $3 with App New User Only</p>
            <div className="flex items-center gap-4">
              <Image src={qrcode} alt="QR Code" width={80} height={80} />
              <div>
                <Image src={google} alt="Google Play" width={100} height={38} />
                <Image src={appstore} alt="App Store" width={100} height={38} className="mt-2" />
              </div>
            </div>
            <Image src={icons} alt="Social Icons" className="mt-6" />
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-sm text-gray-400">
          Copyright Rimel 2022. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
