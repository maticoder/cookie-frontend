import { motion } from "framer-motion";

import { animation } from "../utils/animations.js";

export default (Component) => (props) => {
  return (
    <motion.div
      initial="enter"
      animate="animate"
      exit="exit"
      variants={animation}
    >
      <Component {...props} />
    </motion.div>
  );
};
