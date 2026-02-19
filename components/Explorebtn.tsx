'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Explorebtn = () => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="mt-7 mx-auto bg-dark-100 border border-dark-200 hover:border-primary/50 text-white rounded-full px-8 py-4 flex items-center gap-3 transition-colors shadow-xl group"
        >
            <a href="#events" className="flex items-center gap-3 w-full h-full">
                <span className="font-semibold tracking-wide uppercase text-sm">Explore Events</span>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ChevronDown size={20} className="text-primary group-hover:scale-120 transition-transform" />
                </motion.div>
            </a>
        </motion.button>
    )
}
export default Explorebtn;

