import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const UserRoles = ({ cardVariants, users, confirmAction, updateUserRole }) => {
  return (
    <div>
      <motion.div
        className="mb-10 bg-white p-6 rounded-lg shadow-lg"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-blue-950 text-center py-4 rounded-xl mb-4">
          <h2 className="text-xl font-bold font-serif">Manage User Roles</h2>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-950">
              <th className="p-3 text-left text-amber-400">Email</th>
              <th className="p-3 text-left text-amber-400">Current Role</th>
              <th className="p-3 text-left text-amber-400">Change Role</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {users.map((user) => (
                <motion.tr
                  key={user._id}
                  className="border-b text-green-700 border-green-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.role}</td>
                  <td className="p-3">
                    <select
                      onChange={(e) =>
                        confirmAction(() =>
                          updateUserRole(user.email, e.target.value)
                        )
                      }
                      className="w-full p-3 bg-blue-950 rounded-lg border border-green-900 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <option value="">Select Role</option>
                      <option value="user">User</option>
                      <option value="Moderator">Moderator</option>
                      <option value="admin">Admin</option>
                      <option value="other">Other</option>
                    </select>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default UserRoles;
