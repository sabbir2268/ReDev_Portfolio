import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ">
        {/* LEFT: Info & Direct Contacts */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Heading & Text */}
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">
              Let's <span className="text-cyan-400">Connect</span>
            </h2>
            <p className="text-muted leading-relaxed max-w-md">
              I'm always open to new projects, collaborations, or just a
              friendly chat. Reach out via email, phone, or social platforms
              below.
            </p>
          </div>

          {/* Email & Phone */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-300 bg-[#0B1120] p-4 rounded-xl shadow-soft hover:shadow-strong transition">
              <FaEnvelope className="text-cyan-400" />
              <span>mdsabbirrahman2268@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 bg-[#0B1120] p-4 rounded-xl shadow-soft hover:shadow-strong transition">
              <FaPhoneAlt className="text-cyan-400" />
              <span>+880 1955506677</span>
            </div>
          </div>

          {/* Direct Message Icons */}
        </motion.div>

        {/* RIGHT: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0B1120] border border-[#1F2933] rounded-2xl p-10 shadow-soft"
        >
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-[#1F2933] text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-[#1F2933] text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
              rows="4"
              placeholder="Your Message..."
              className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-[#1F2933] text-gray-200 placeholder:text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button
              type="submit"
              className="self-start px-6 py-3 rounded-full bg-cyan-400 text-[#020617] font-medium hover:bg-cyan-300 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
