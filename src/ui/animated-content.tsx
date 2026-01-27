import { motion } from 'framer-motion';

import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

const AnimatedContent = ({ children }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.6 }}
    viewport={{ amount: 0.2, once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    {children}
  </motion.div>
);

export default AnimatedContent;
