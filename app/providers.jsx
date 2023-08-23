"use client";

import { ThemeProvider } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class">
      <AnimatePresence>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ delay: 0.3 }}>
          {children}
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
