import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-violet-100 via-white to-violet-200 text-gray-700 pt-10 pb-6 px-6 lg:px-20  border-t  border-blue-300">
      <div className=" w-3/4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo + About */}
        <div>
          <Link to="/" className="text-2xl font-bold text-violet-600">
            Daily<span className="text-rose-500">Drafts</span>
          </Link>
          <p className="mt-3 text-sm text-gray-600">
            Your go-to platform for sharing daily thoughts, stories, and inspiration.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-violet-600">Home</Link></li>
            <li><Link to="/add-blog" className="hover:text-violet-600">Add Blog</Link></li>
            <li><Link to="/all-blogs" className="hover:text-violet-600">All Blogs</Link></li>
            <li><Link to="/wishlist" className="hover:text-violet-600">Wishlist</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Contact</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <span>support@dailydrafts.com</span>
            </li>
            <li className="flex gap-3 mt-4">
              <a href="#" className="hover:text-blue-600"><Facebook size={18} /></a>
              <a href="#" className="hover:text-sky-500"><Twitter size={18} /></a>
              <a href="#" className="hover:text-pink-500"><Instagram size={18} /></a>
              <a href="#" className="hover:text-blue-800"><Linkedin size={18} /></a>
            </li>
          </ul>
        </div>

        
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-10 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DailyDrafts. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
