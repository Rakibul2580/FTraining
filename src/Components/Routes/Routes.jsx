import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import PrivacyPolicy from "../Pages/Privacy/Privacy";
import TermsOfService from "../Pages/TermsOfService/TermsOfService";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import SignUp from "../Pages/SignUp/SignUp";
import ProtectedRoute from "../Pages/ProtectedRoute/ProtectedRoute";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import CourseDetail from "../Pages/Dashboard/MyLearning/CourseDetail";
import CoursesView from "../Pages/Dashboard/MyLearning/CoursesView";
import Video from "../Pages/Dashboard/MyLearning/Video";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CPD30 from "../Pages/Dashboard/MyLearning/CPD30";
import CPD33 from "../Pages/Dashboard/MyLearning/CPD33";
import CC_Videos from "../Pages/Dashboard/MyLearning/CC_Videos";
import Enrollment from "../Pages/Dashboard/MyLearning/Enrollment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          // <ProtectedRoute>
          <Home />
          // </ProtectedRoute>
        ),
      },
      {
        path: "/privacy-policy",
        element: (
          <ProtectedRoute>
            {" "}
            <PrivacyPolicy />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "/terms-of-service",
        element: (
          <ProtectedRoute>
            <TermsOfService />
          </ProtectedRoute>
        ),
      },
      {
        path: "/about-us",
        element: (
          <ProtectedRoute>
            {" "}
            <AboutUs />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <ProtectedRoute>
            {" "}
            <ContactUs />{" "}
          </ProtectedRoute>
        ),
      },

      { path: "/SignUp", element: <SignUp /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/reset-password", element: <ResetPassword /> },
      { path: "/course/:title", element: <CourseDetail /> },
      { path: "/courses/:view", element: <CoursesView /> },
      { path: "/courses/CPD 30", element: <CPD30 /> },
      { path: "/courses/CPD 33", element: <CPD33 /> },
      { path: "/courses/CC&Videos", element: <CC_Videos /> },
      { path: "/videos/:view", element: <Video /> },
      { path: "/enrollment/:title", element: <Enrollment /> },
    ],
  },
  {
    path: "/Dashboard",
    element: (
      // <ProtectedRoute>
      <Dashboard />
      // {/* </ProtectedRoute> */}
    ),
  },
]);
