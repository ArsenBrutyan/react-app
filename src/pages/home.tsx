import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Preloader } from 'components/common/Preloader';

const HomeContent = lazy(async () => import('components/content/Home'));

const Home: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}>
            <Suspense fallback={<Preloader />}>
                <HomeContent />
            </Suspense>
        </motion.div>
    );
};

export default Home;
