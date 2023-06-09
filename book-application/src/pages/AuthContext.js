import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  console.log("hello");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("currentUser"));
    const storedLogin = JSON.parse(sessionStorage.getItem("isLogin"));

    if (storedUser && storedLogin) {
      setCurrentUser(storedUser);
      setIsLogin(storedLogin);
    }
  }, []);

  const register = (userData) => {
    setCurrentUser(userData);
    setIsLogin(true);
    sessionStorage.setItem("currentUser", JSON.stringify(userData));
    sessionStorage.setItem("isLogin", true);

    console.log(userData);

    const storedData = JSON.parse(localStorage.getItem("userData")) || [];
    const updatedData = [...storedData, userData];
    localStorage.setItem("userData", JSON.stringify(updatedData));

    toast.success("Registration successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate(`/login`);
  };

  const login = (email, password) => {
    const storedData = JSON.parse(localStorage.getItem("userData")) || [];
    const user = storedData.find(
      (userData) => userData.email === email && userData.password === password
    );

    if (user) {
      sessionStorage.setItem("currentUser", JSON.stringify(user));
      sessionStorage.setItem("isLogin", "true");
      setCurrentUser(user);
      setIsLogin(true);
      toast.success("Login successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate(`/`);
    } else {
      toast.error("Login Failed", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  //   const logout = () => {
  //     setCurrentUser(null);
  //     setIsLogin(false);
  //     sessionStorage.removeItem("currentUser");
  //     sessionStorage.removeItem("isLogin");
  //   };

  const updateProfile = (updatedData) => {
    const storedData = JSON.parse(localStorage.getItem("userData")) || [];
    const userIndex = storedData.findIndex(
      (userData) => updatedData.id === userData.id
    );

    if (userIndex !== -1) {
      storedData[userIndex] = {
        id: updatedData.id,
        name: updatedData.name,
        email: updatedData.email,
        mobileNumber: updatedData.mobileNumber,
        city: updatedData.city,
        password: updatedData.password,
      };

      localStorage.setItem("userData", JSON.stringify(storedData));
      sessionStorage.setItem("currentUser", JSON.stringify(updatedData));
    }
  };

  const authContextValue = {
    currentUser,
    isLogin,
    setCurrentUser,
    setIsLogin,
    register,
    login,
    // logout,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <ToastContainer />
      {children}
    </AuthContext.Provider>
  );
};
