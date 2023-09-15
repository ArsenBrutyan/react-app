import { UserListContent } from 'components/content/UserList';
import React from 'react';
import { motion } from 'framer-motion';

const UserList: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}>
            <UserListContent />
        </motion.div>
    );
};

export default UserList;
