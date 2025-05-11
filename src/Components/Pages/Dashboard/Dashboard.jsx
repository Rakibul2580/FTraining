import React, { useEffect, useState } from "react";
import MyLearning from "./MyLearning/MyLearning";
import axios from "axios";
import AdminDashboard from "./AdminDashboard/AdminDashboard";

const data = [
  {
    category: "Development",
    id: 1,
    items: ["Frontend", "Backend"],
  },
  {
    category: "Design",
    id: 2,
    items: ["UI/UX", "Prototyping"],
  },
  {
    category: "Marketing",
    id: 3,
    items: ["On-page", "Off-page"],
  },
  {
    category: "Business",
    id: 4,
    items: ["Agile", "Scrum"],
  },
  {
    category: "Finance",
    id: 5,
    items: ["Tax", "Audit"],
  },
  {
    category: "Health",
    id: 6,
    items: ["Diet", "Wellness"],
  },
];

const Dashboard = () => {
  const [user, setUser] = useState(null);
  // ব্যবহারকারী তথ্য ফেচ করা
  const fetchUserInfo = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await axios.get("http://localhost:5000/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Fetch user failed:", error);
        localStorage.removeItem("token");
        setUser(null);
      }
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <div>
      {user && user.role === "admin" ? (
        <AdminDashboard user={user} data={data} />
      ) : (
        <MyLearning user={user} />
      )}

      {/* <MyLearning /> */}
      {/* <AdminDashboard /> */}
    </div>
  );
};

export default Dashboard;
