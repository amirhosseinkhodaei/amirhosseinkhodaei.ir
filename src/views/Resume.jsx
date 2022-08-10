import React from "react";
import { Link } from "react-router-dom";
import { skills, experiences, educations } from "../data";

export const Resume = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="md:w-4/5 w-full print:w-full">
        <div className="mb-5 p-4 border-dark-0 border-b-2 print:hidden">
          <div className="flex justify-between">
            <Link
              className="px-3 py-0.5 bg-light-1 rounded-full text-dark-0 hover:text-light-0
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-light-1"
              to="/">
              Home
            </Link>
            <a
              className="px-3 py-0.5 bg-yellow-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-yellow-0"
              href="/AmirhosseinKhodaei.pdf" target="_blank">
              Download
            </a>
          </div>
        </div>
        <div className="px-5 print:!p-0 divide-y-2 divide-dark-0">
          <div className="pb-4 flex flex-col justify-between md:flex-row print:flex-row">
            <div>
              <p className="print:text-4xl text-4xl font-bold">
                Amirhossein Khodaei
              </p>
              <p className="print:text-2xl text-2xl">Web Developer</p>
            </div>
            <div className="flex flex-col print:text-sm whitespace-nowrap mt-5 md:mt-0 print:mt-0">
              <div className="mb-2 print:mb-1.5">
                <a
                  className="block max-w-[243px] px-3 py-0.5 font-bold bg-blue-0 rounded-full print:text-light-0
                            transition duration-300 hover:bg-black hover:ring-2 hover:ring-blue-0"
                  href="https://amirhosseinkhodaei.ir"
                  title="Webpage">
                  <i class="fas fa-globe-americas text-light-0 mr-1.5" />{" "}
                  amirhosseinkhodaei.ir
                </a>
              </div>
              <div className="mb-2 print:mb-1.5">
                <a
                  className="block max-w-[243px] px-3 py-0.5 font-bold bg-red-0 rounded-full print:text-light-0
                            transition duration-300 hover:bg-black hover:ring-2 hover:ring-red-0"
                  href="mailto:amir76_kh@yahoo.com"
                  title="Email">
                  <i class="fas fa-at text-light-0 mr-1.5" /> amir76_kh@yahoo.com
                </a>
              </div>
              <div className="mb-2 print:mb-1.5">
                <a
                  className="block max-w-[243px] px-3 py-0.5 font-bold bg-blue-0 rounded-full print:text-light-0
                            transition duration-300 hover:bg-black hover:ring-2 hover:ring-blue-0"
                  href="tel:+989120126656"
                  title="Phone">
                  <i class="fas fa-phone text-light-0 mr-1.5" /> +989120126656
                </a>
              </div>
              <div className="flex flex-wrap">
                <a
                  className="px-3.5 mr-2 py-0.5 font-bold bg-dark-2 rounded-full print:text-light-0
                            transition duration-300 hover:bg-black hover:ring-2 hover:ring-dark-2"
                  href="https://github.com/amirhosseinkhodaei"
                  title="Github">
                  <i class="fab fa-github-alt text-light-0" />
                </a>

                <a
                  className="px-3.5 mr-2 py-0.5 font-bold bg-blue-0 rounded-full print:text-light-0
                  transition duration-300 hover:bg-black hover:ring-2 hover:ring-blue-0"
                  href="https://www.linkedin.com/in/amirhossein-khodaei-36141b169/"
                  title="Linkedin">
                  <i class="fab fa-linkedin-in text-light-0" />
                </a>
                <a
                  className="px-3.5 mr-2 py-0.5 font-bold bg-blue-0 rounded-full print:text-light-0
                  transition duration-300 hover:bg-black hover:ring-2 hover:ring-blue-0"
                  href="https://twitter.com/amir76_kh"
                  title="Twitter">
                  <i class="fab fa-twitter text-light-0" />
                </a>
                <a
                  className="px-3.5 py-0.5 font-bold bg-blue-0 rounded-full print:text-light-0
                  transition duration-300 hover:bg-black hover:ring-2 hover:ring-blue-0"
                  href="https://telegram.me/amir76_kh/"
                  title="Telegram">
                  <i class="fab fa-telegram-plane text-light-0" />
                </a>
              </div>
            </div>
          </div>
          <div className="py-4 print:text-sm">
            <p className="mb-3 print:text-xl text-2xl font-bold">About Me</p>
            <div className="text-justify">
              Hi! I'm a Web Developer, currently working as Front-End Developer at{" "}
              <a
                href="https://snappcarfix.com"
                className="text-blue-0 font-bold">
                SnappCarFix
              </a>
              , the largest online platform for car parts and services in Iran. I have around 2 years of experience in software development mainly in Web Development. My aim is to enhance user experience and create new values in addition to delivering a clean scalable code, by being closely in touch with the end-users.
              <ul class="print:text-xs list-disc pl-4 pt-2 grid md:grid-cols-2 print:sm:grid-cols-2">
                <li>Education: Master. Information Security Engineering</li>
                <li>Marriage: Single</li>
                <li>Military Service: Exempted</li>
                <li>Birth Date: 18 March 1998</li>
              </ul>
            </div>
          </div>
          <div className="py-4 print:text-sm">
            <p className="mb-3 print:text-xl text-2xl font-bold">Educations</p>
            <div>
              {educations
                .filter((edu) => edu.showEducations)
                .map((edu) => (
                  <div className="py-2 first:pt-0">
                    <div className="flex justify-between">
                      <div>
                        <li className="print:text-base font-semibold">
                          {edu.title}
                        </li>
                        <div className="whitespace-nowrap sm:hidden">
                          <p className="print:text-xs text-sm font-semibold">
                            {edu.major}
                          </p>
                          <p className="print:text-xs text-sm font-semibold">
                            {edu.startDate} - {edu.endDate}
                          </p>
                        </div>
                      </div>
                      <div className="text-right whitespace-nowrap hidden sm:block">
                        <p className="print:text-xs text-sm font-semibold">
                          {edu.major}
                        </p>
                        <p className="print:text-xs text-sm font-semibold">
                          {edu.startDate} - {edu.endDate}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="py-4 print:text-sm">
            <p className="mb-3 print:text-xl text-2xl font-bold">Skills</p>
            <p className="mb-2">
              In summary, I have experience working with these tools and often
              use them:
            </p>
            <ul class="list-disc pl-4 grid sm:grid-cols-2 md:grid-cols-3 print:sm:grid-cols-3">
              {skills.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="py-4 print:text-sm">
            <p className="mb-3 print:text-xl text-2xl font-bold">Experiences</p>
            <div>
              {experiences
                .filter((exp) => exp.showExperiences)
                .map((exp) => (
                  <div className="py-2 first:pt-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="print:text-lg text-lg font-semibold">
                          {exp.title}
                        </p>
                        <p className="print:text-base font-semibold">
                          {exp.company}
                        </p>
                        <div className="whitespace-nowrap sm:hidden">
                          <p className="print:text-xs text-sm font-semibold">
                            {exp.startDate} - {exp.endDate}
                          </p>
                          <p className="print:text-xs text-sm font-semibold">
                            {exp.location}
                          </p>
                          <p className="print:text-xs text-sm font-semibold">
                            {exp.type}
                          </p>
                        </div>
                        <div className="print:text-xs text-sm">
                          {exp.stack.map((stack) => (
                            <span className="text-green-1 print:text-green-0 font-semibold">
                              {stack},{" "}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right whitespace-nowrap hidden sm:block">
                        <p className="print:text-xs text-sm font-semibold">
                          {exp.startDate} - {exp.endDate}
                        </p>
                        <p className="print:text-xs text-sm font-semibold">
                          {exp.location}
                        </p>
                        <p className="print:text-xs text-sm font-semibold">
                          {exp.type}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 mb-2 text-justify">
                      {exp.about.map((line) => (
                        <span> {line}</span>
                      ))}
                    </div>
                    {exp.links?.length > 0 ? (
                      <div className="flex flex-row flex-wrap">
                        {exp.links.map((link) => (
                          <a
                            className="px-3 py-0.5 mx-1 my-1 font-bold bg-blue-0 rounded-full print:text-light-0
                            transition duration-300 hover:bg-black hover:ring-2 hover:ring-blue-0
                            print:text-sm print:px-2 print:py-0"
                            href={link.href}>
                            {link.title}
                          </a>
                        ))}
                      </div>
                    ) : null}
                    {exp.responsibilities?.length > 0 ? (
                      <div className="mt-2 mb-2 print:text-sm text-justify">
                        <p className="font-bold">{exp.responsible}</p>
                        <ul class="list-disc pl-4">
                          {exp.responsibilities.map((line) => (
                            <li>{line}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {exp.contributions?.length > 0 ? (
                      <div className="mt-2 mb-2 print:text-sm text-justify">
                        <p className="font-bold">{exp.contribution}</p>
                        <ul class="list-disc pl-4">
                          {exp.contributions?.map((line) => (
                            <li>{line}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {exp.achievements?.length > 0 ? (
                      <div className="mt-2 mb-2 print:text-sm text-justify">
                        <p className="font-bold">{exp.achievement}</p>
                        <ul class="list-disc pl-4">
                          {exp.achievements?.map((line) => (
                            <li>{line}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                ))}
            </div>
          </div>
          <div className="py-3 print:text-sm">
            <p className="mb-3 print:text-xl text-xl font-bold">Projects</p>
            <div>
              Check out my site & Github for projects.
              <div class="flex flex-row flex-wrap mt-2">
                <a
                  href="https://amirhosseinkhodaei.ir/#projects"
                  className="px-3 py-0.5 mx-1 my-1 font-bold bg-blue-0 rounded-full print:text-light-0
                            transition duration-300 hover:bg-black hover:ring-2 hover:ring-blue-0">
                  amirhosseinkhodaei.ir/#Projects
                </a>
                <a
                  href="https://github.com/amirhosseinkhodaei"
                  className="px-3 py-0.5 mx-1 my-1 font-bold bg-blue-0 rounded-full print:text-light-0
                            transition duration-300 hover:bg-black hover:ring-2 hover:ring-blue-0">
                  github.com/amirhosseinkhodaei
                </a>
              </div>
            </div>
          </div>
          {/* Note: Projects been commented instead of been removed from resume */}
          {/* <div className="py-4 text-sm">
            <p className="text-xl mb-3 font-bold">Projects</p>
            <div>
              {projects
                .filter((pro) => pro.showExperiences)
                .sort((a, b) => b.orderExperiences - a.orderExperiences)
                .map((pro) => (
                  <div className="py-2 first:pt-0">
                    <div>
                      <p className="text-lg font-semibold">{pro.title}</p>
                    </div>
                    <div className="text-xs">
                      {pro.stack.map((stack) => (
                        <span className="text-green-1 print:text-green-0 font-semibold">
                          {stack},{" "}
                        </span>
                      ))}
                    </div>
                    <div className="mt-1 mb-2">
                      {pro.about.map((line) => (
                        <p>{line}</p>
                      ))}
                    </div>
                    {pro.links ? (
                      <div>
                        <ul class="list-disc pl-3 text-sm">
                          {pro.links.map((link) => (
                            <li className="text-blue-0 font-semibold my-0.5 first:mt-0">
                              <a href={link.href}>{link.title}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                ))}
            </div>
          </div> */}
        </div>
        <div className="print:hidden pb-20"></div>
      </div>
    </div>
  );
};
