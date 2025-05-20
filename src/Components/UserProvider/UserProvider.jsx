import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user info function
  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      const response = await axios.get(
        "https://ftraining-s.vercel.app/api/user",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUser(response.data || null); // Ensure user is null if no data
    } catch (error) {
      console.error("Fetch user failed:", error);
      localStorage.removeItem("token"); // Clear token on error
      setUser(null);
    } finally {
      setLoading(false); // Always end loading state
    }
  };

  // Fetch users info function
  const fetchUsersInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setUsers(null);
        setLoading(false);
        return;
      }

      const response = await axios.get(
        "https://ftraining-s.vercel.app/api/users",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUsers(response.data || null); // Ensure users is null if no data
    } catch (error) {
      console.error("Fetch users failed:", error);
      localStorage.removeItem("token"); // Clear token on error
      setUsers(null);
    } finally {
      setLoading(false); // Always end loading state
    }
  };

  useEffect(() => {
    fetchUserInfo();
    fetchUsersInfo();
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <UserContext.Provider value={{ user, loading, fetchUserInfo, users }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
