import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

function Navigaion() {
  return (
    <>
      <a href="#about" className="hover:text-purple-300 transition-all">About Me</a>
      <a href="#skills" className="hover:text-purple-300 transition-all">Skills</a>
      <a href="#projects" className="hover:text-purple-300 transition-all">Projects</a>
      <a href="#contacts" className="hover:text-purple-300 transition-all">Contacts</a>
    </>
  )
}

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <motion.nav 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full bg-black/50 dark:bg-gray-900/50 backdrop-blur-md text-white p-4 shadow-lg"
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-purple-400 text-center">WELCOME</div>
  
          <div className="hidden md:flex gap-8 text-lg">
            {Navigaion()}
          </div>
  
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
  
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center gap-4">
            {Navigaion()}
  
          </div>
        )}
      </motion.nav>
    );
  }

export default NavBar;