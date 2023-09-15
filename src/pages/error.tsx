import React from 'react';
import { ErrorContent } from 'components/content/Error';
import { motion } from 'framer-motion';

const Error: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}>
            <ErrorContent />
        </motion.div>
    );
};

export default Error;
