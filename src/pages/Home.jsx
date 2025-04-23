import React, { useCallback, useState } from "react";
import Heading from "../components/heading/Heading";
import web from "../assets/loti/web.json";
import Lottie from "lottie-react";
import Animation_Word from "../components/Home_Word/Animation_Word";
import { motion } from 'framer-motion';
import { fadeIn } from "../animation";


const MemoizedLottie = React.memo(({ animationData }) => (
    <Lottie animationData={animationData} loop={true} className="w-full sm:w-full md:w-95 lg:w-full me-12" />
));
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSummary = useCallback(() => setIsOpen((prev) => !prev), []);


    return (
        <>
            <Heading title="Home" />
            <motion.div className="Home  overflow-hidden"
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.1 }}
            >
                <div className="hero flex flex-col lg:flex-row items-center gap-3 md:px-4 pb-10 ">
                    {/* Content Section */}
                    <div className="content w-full lg:w-1/5 text-center lg:text-left">
                        <div className="info md:p-5 p-2 flex flex-col gap-3 ">
                            <Animation_Word />
                        </div>
                    </div>

                    {/* Lottie Animation Section */}
                    <div className="lottie  lg:w-5/5 w-full flex justify-center  ">
                        <MemoizedLottie animationData={web} />
                    </div>
                </div>

                {/* Open and Close Paragraph */}
                <div className="w-full mx-auto ">
                    <button
                        className="w-full rounded bg-green-600 hover:bg-gray-800 px-6 py-2 text-sm font-medium uppercase text-white shadow-md transition duration-150 ease-in-out  focus:outline-none focus:ring focus:ring-gray-400 cursor-pointer"
                        onClick={toggleSummary}
                        aria-expanded={isOpen}
                        aria-controls="collapseSummary"
                    >
                        Summary About Me
                    </button>
                    <div
                        id="collapseSummary"
                        className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
                    >
                        <div className="p-4 rounded mt-2 opacity-80 hover:opacity-100 ">
                            <p className="md:text-xl text-md ">
                                Frontend Developer | <span className="font-semibold md:text-xl text-sm">React & Vue</span> | Passionate About Building Interactive Experiences with
                                <span className="font-semibold md:text-xl text-sm"> 2 years of experience</span> crafting sleek, responsive, and engaging user interfaces. I thrive on turning designs into dynamic,
                                high-performance web applications <span className="font-semibold md:text-xl text-sm">using React, Vue.js, HTML, CSS, JavaScript, and TypeScript</span>, ensuring users have seamless and visually stunning experiences.
                            </p>
                            <br />
                            <p className="md:text-xl text-md font-semibold">Tech Stack & Skills:</p>
                            <ul className="list-disc list-inside space-y-1 ">
                                <li className="md:text-xl text-sm"><span className="font-semibold ">Frontend:</span> React.js, Vue.js, JavaScript (ES6+), TypeScript</li>
                                <li className="md:text-xl text-sm"><span className="font-semibold ">UI & Styling:</span> Tailwind CSS, Sass, Bootstrap, Material UI</li>
                                <li className="md:text-xl text-sm"><span className="font-semibold ">State Management:</span> Redux, Tanstack</li>
                                <li className="md:text-xl text-sm"><span className="font-semibold ">Tools & Workflow:</span> Git, Vite, Figma</li>
                            </ul>
                            <br />
                            <p className="md:text-xl text-md font-semibold">Always Growing:</p>
                            <p>The web evolves fast, and so do I. I'm constantly exploring new technologies, best practices, and performance optimization techniques to enhance my craft.</p>
                        </div>
                    </div>
                </div>

            </motion.div>
        </>
    );
};

export default Home;
