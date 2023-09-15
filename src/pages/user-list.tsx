import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Preloader } from 'components/common/Preloader';

const UserListContent = lazy(async () => import('components/content/UserList'));

const UserList: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}>
            <Suspense fallback={<Preloader />}>
                <UserListContent />
            </Suspense>
        </motion.div>
    );
};

export default UserList;
