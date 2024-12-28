import React from "react";

const Footer = () => {
    return (
        <footer id="footer" className="bg-neutral text-white py-8 mt-20">
            <div className="container mx-auto flex flex-col md:flex-row justify-between gap-16">
                <div className="mb-8 md:mb-0 flex-1">
                    <h2 className="text-lg font-bold mb-4">About Me</h2>
                    <p className="text-gray-400">
                        I&apos;m is a passionate developers creating stunning
                        front-end designs and seamless user experiences.
                    </p>
                </div>

                <div className="flex-1">
                    <h2 className="text-lg font-bold mb-4 ml-20 px-2">
                        Contact Me
                    </h2>
                    <div className="text-gray-200">
                        <div className="flex space-x-6 justify-center items-center mt-4">
                            <a
                                href="https://www.linkedin.com/in/ferdianto-/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-700 hover:text-blue-600"
                            >
                                <i className="bx bxl-linkedin text-2xl"></i>
                                <span className="ml-2">LinkedIn</span>
                            </a>

                            <a
                                href="https://github.com/Ferdianto22"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-700 hover:text-gray-300"
                            >
                                <i className="bx bxl-github text-2xl"></i>
                                <span className="ml-2">GitHub</span>
                            </a>

                            <a
                                href="https://www.instagram.com/ferdiantoz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-700 hover:text-pink-500"
                            >
                                <i className="bx bxl-instagram text-2xl"></i>
                                <span className="ml-2">Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
                © 2024 My Website. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
