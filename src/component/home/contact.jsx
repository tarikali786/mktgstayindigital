import Link from "next/link";
import { Mail, Phone, Globe, Facebook, Instagram, Twitter } from "lucide-react";
import { contactData } from "@/app/data";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white common-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            {contactData.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {contactData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Get In Touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    placeholder="Your name"
                    className="border text-black/80 rounded p-2 w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="border text-black/80 rounded p-2 w-full"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  placeholder="Subject"
                  className="border text-black/80 rounded p-2 w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  className="border text-black/80 rounded p-2 w-full"
                />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded">
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <span className="font-medium text-gray-700">Email</span>
                  <p className="text-gray-600">{contactData.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <span className="font-medium text-gray-700">Phone</span>
                  <p className="text-gray-600">{contactData.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <Globe className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <span className="font-medium text-gray-700">Website</span>
                  <p className="text-gray-600">{contactData.website}</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-700">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
