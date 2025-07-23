import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
const DownloadResumeButton = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 2000);
  };

  return (
    <motion.a
      href="/assets/Resume.pdf" // Place Resume.pdf in public/assets/
      download
      onClick={handleDownload}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden flex items-center justify-center"
    >
      <AnimatePresence mode="wait">
        {downloading ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="downloading"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img src="assets/download.svg" className="w-5" alt="download done" />
            Resume Downloading...
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="download"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <img src="assets/download.svg" className="w-5" alt="download icon" />
            Download Resume
          </motion.p>
        )}
      </AnimatePresence>
    </motion.a>
  );
};

export default DownloadResumeButton;