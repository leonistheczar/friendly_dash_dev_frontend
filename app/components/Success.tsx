import { motion, AnimatePresence } from "framer-motion";
type SuccessMessageProps = {
  message: string;
  show: boolean;
};
export const SuccessMessage = ({ message, show }: SuccessMessageProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <p className="p-4 rounded-lg shadow-md text-white text-sm font-semibold bg-green-700">
            {message}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};