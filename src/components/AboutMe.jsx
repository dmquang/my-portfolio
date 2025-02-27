import { motion } from "framer-motion";
import { 
    FaPython, FaReact, FaNodeJs, FaDatabase 
} from "react-icons/fa";
import { 
    SiFlask, SiFastapi, SiMysql, SiMongodb, 
    SiMeilisearch, SiTailwindcss, SiQt, SiCplusplus 
} from "react-icons/si";
import { FaTelegram, FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa";
import selfie from "../assets/selfie.jpg";

export default function AboutMe() {
    return (
        <motion.section 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-white mt-10 px-4"
            id="about"
        >
            {/* Tên hiển thị với hiệu ứng mờ và glow */}
            <div className="text-center">
                <h1 className="text-5xl font-bold  text-glow">
                    Rudyy Greyrat
                </h1>
                <p className="mt-3 text-lg">
                    Developer & Tech Enthusiast 🚀
                </p>
            </div>

            <hr className="w-3/4 border-t border-gray-600 opacity-50 my-6" />

            {/* About Me */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5 }}
                className="max-w-2xl text-center"
                id="skills"
            >
                <h2 className="text-3xl font-bold">About Me 🙋🏻‍♂️</h2>
                <div className="flex flex-col md:flex-row items-center mt-4">
                    <img 
                        src={selfie} 
                        alt="Selfie" 
                        className="w-28 h-28 object-cover rounded-3xl shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                    />
                    <p className="mt-3 text-lg leading-relaxed md:ml-6 md:mt-0 text-left">
                        Hi! I'm Rudyy Greyrat, a 17-year-old high school student from Vietnam.  
                        I'm passionate about technology, backend development, and love movies, anime, manga, and rock music.  
                    </p>
                </div>
            </motion.div>

            <hr className="w-3/4 border-t border-gray-600 opacity-50 my-6" />

            {/* Skills */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5 }}
                className="max-w-2xl text-center"
                id="projects"
            >
                <h2 className="text-3xl font-bold">Skills 💻</h2>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
                    {[
                        { name: "Software Dev - Qt5", icon: <SiQt className="text-green-400" size={24} /> },
                        { name: "Backend - Flask", icon: <SiFlask className="text-white" size={24} /> },
                        { name: "Backend - FastAPI", icon: <SiFastapi className="text-blue-500" size={24} /> },
                        { name: "Databases - MySQL", icon: <SiMysql className="text-blue-600" size={24} /> },
                        { name: "Databases - MongoDB", icon: <SiMongodb className="text-green-500" size={24} /> },
                        { name: "Databases - Meilisearch", icon: <SiMeilisearch className="text-purple-500" size={24} /> },
                        { name: "Web Dev - Node.js", icon: <FaNodeJs className="text-green-400" size={24} /> },
                        { name: "Web Dev - React.js", icon: <FaReact className="text-blue-400" size={24} /> },
                        { name: "UI/UX - TailwindCSS", icon: <SiTailwindcss className="text-blue-500" size={24} /> },
                        { name: "Programming - Python", icon: <FaPython className="text-yellow-400" size={24} /> },
                        { name: "Programming - C++", icon: <SiCplusplus className="text-blue-600" size={24} /> }
                    ].map((skill, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg shadow-md hover:shadow-lg transition">
                            {skill.icon}
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            <hr className="w-3/4 border-t border-gray-600 opacity-50 my-6" />

            {/* Projects */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                className="max-w-2xl text-center"
            >
                <h2 className="text-3xl font-bold">Projects 🚀</h2>
                <div className="mt-4 text-lg space-y-3">
                    <p>🔹 <strong>ADB Helper</strong> - Simplifying ADB commands</p>
                    <p>🔹 <strong>BMI Calculator</strong> - Simple and effective BMI tracking</p>
                </div>
            </motion.div>

            <hr className="w-3/4 border-t border-gray-600 opacity-50 my-6" />

            {/* Founder */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                className="max-w-2xl text-center"
                id="contacts"
            >
                <h2 className="text-3xl font-bold">Founder & Projects 🔥</h2>
                <p className="mt-4 text-lg">
                    I am the founder of:  
                    <br /><strong>Jarsoft</strong> – A software development organization.  
                    <br /><strong>XTool</strong> – Programming utilities & automation tools.  
                </p>
            </motion.div>

            <hr className="w-3/4 border-t border-gray-600 opacity-50 my-6" />

            {/* Contacts */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-2xl text-center"
            >
                <h2 className="text-3xl font-bold">Contacts ✉️</h2>
                <div className="flex flex-col items-center gap-4 mt-4 text-xl">
                    {[
                        { icon: <FaTelegram className="text-blue-400" />, name: "@rudyy_greyrat", link: "https://t.me/rudyy_greyrat" },
                        { icon: <FaInstagram className="text-pink-400" />, name: "@_mi.quang_", link: "https://www.instagram.com/_mi.quang_/" },
                        { icon: <FaEnvelope className="text-yellow-400" />, name: "mq.rudyy.08@gmail.com", link: "mailto:mq.rudyy.08@gmail.com" },
                        { icon: <FaGithub className="text-gray-400" />, name: "github.com/dmquang", link: "https://github.com/dmquang" }
                    ].map((contact, index) => (
                        <motion.a 
                            key={index} 
                            href={contact.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-3 p-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-3xl">{contact.icon}</span>
                            <span className="text-white">{contact.name}</span>
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            <hr className="w-3/4 border-t border-gray-600 opacity-50 my-6" />

        </motion.section>
    );
}
