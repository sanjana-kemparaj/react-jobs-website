import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" // Set to dark theme
        toastStyle={{
          backgroundColor: "#1F2937", // bg-gray-800
          color: "#34D399", // text-green-400
          fontFamily: "monospace", // font-mono
        }}
      />
      <Footer />
    </>
  );
};

export default MainLayout;
