import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedPage({ children }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/signup");
    }
  }, [token, navigate]);

  return token ? (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {children}
    </div>
  ) : null;
}

export default ProtectedPage;
