import React from "react";
import { Link } from "react-router-dom";

import { Hero } from "../components/Hero";

export const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div
        id="info"
        className="min-h-screen flex flex-col justify-center items-center">
        <div className="sm:w-[500px] w-screen p-5 py-20 text-lg select-none">
          <p className="mb-4">
            Hi! I'm a Web Developer, currently working as Front-End Developer at
            <a
              className="mx-2 px-2 bg-aqua-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-aqua-0"
              href="https://payampardaz.com">
              PayamPardaz
            </a>
            , where established in 1996 in order to provide technical services in the field of IT & ICT security.
          </p>
          <p className="mb-4">
            Here is my
            <Link
              className="mx-2 px-2 bg-light-1 rounded-full text-dark-0 hover:text-light-0
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-light-1"
              to="/#resume"
              title="Resume">
              Resume
            </Link>
            and
            <Link
              className="mx-2 px-2 bg-light-1 rounded-full text-dark-0 hover:text-light-0
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-light-1"
              to="/#projects"
              title="Projects">
              Projects
            </Link>
            .
            {/* also sometimes i write about things on my
            <Link
              className="mx-2 px-2 bg-light-1 rounded-full text-dark-0 hover:text-light-0
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-light-1"
              to="blog/">
              Blog
            </Link>
            . */}
          </p>
          <p className="mb-4">
            I am available to
            <a
              className="mx-2 px-2 bg-light-1 rounded-full text-dark-0 hover:text-light-0
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-light-1"
              href="tel:+989120126656"
              title="Phone">
              Talk
            </a>
            /
            <a
              className="mx-2 px-2 bg-light-1 rounded-full text-dark-0 hover:text-light-0
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-light-1"
              href="mailto:amir76_kh@yahoo.com"
              title="Email">
              Chat
            </a>
            about anything related to tech. it's always a pleasure to meet new
            people ;]
          </p>
          <div className="mt-5 flex flex-wrap gap-2 leading-snug">
            <a
              className="px-2 bg-dark-3 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-dark-3"
              href="https://github.com/amirhosseinkhodaei"
              title="Github">
              Github
            </a>
            <a
              className="px-2 bg-blue-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-blue-0"
              href="https://www.linkedin.com/in/amirhossein-khodaei-36141b169/"
              title="Linkedin">
              LinkedIn
            </a>
            <a
              className="px-2 bg-blue-1 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-blue-1"
              href="https://twitter.com/amir76_kh"
              title="Twitter">
              Twitter
            </a>
            <a
              className="px-2 bg-blue-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-blue-0"
              href="https://telegram.me/amir76_kh/"
              title="Telegram">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
