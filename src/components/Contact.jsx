import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";
import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();

  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setloading] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setloading(true);

    emailjs
      .send(
        "service_0u2xelj",
        "template_zxyq70j",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "oaZ25h2KdYJXiQeTX"
      )
      .then(
        () => {
          setloading(false);
          alert("Thank you. I will get back to you as soon as possible");

          setform({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setloading(false);
          console.error("EmailJS FULL ERROR:", error);
          alert(error?.text || error?.message || JSON.stringify(error));
        }
      );
  };

  return (
    <>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        
        {/* LEFT SIDE */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handlesubmit}
            className="mt-12 flex flex-col gap-8"
          >
            {/* Name */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handlechange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            {/* Email */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handlechange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            {/* Message */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handlechange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-purple-600 transition transform hover:scale-105"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>

          {/* 🔥 SOCIAL ICONS */}
          <div className="mt-10 flex gap-7 items-center">
            
            {/* GitHub */}
            <a
              href="https://github.com/MrNuthan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-purple-400 transition transform hover:scale-125"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/nuthan-n-v-8055c045"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-blue-500 transition transform hover:scale-125"
            >
              <FaLinkedin />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/__mr_goat_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-pink-500 transition transform hover:scale-125"
            >
              <FaInstagram />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919353152892"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-green-400 transition transform hover:scale-125"
            >
              <FaWhatsapp />
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      {/* 🔥 PROFESSIONAL FOOTER */}
      <div className="border-t border-gray-700 mt-16 pt-6 text-center text-secondary text-sm tracking-wide">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">Nuthan N V</span>.  
        All Rights Reserved.

        <div className="mt-2 text-xs opacity-70">
          Built with React, Three.js & Tailwind CSS
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
