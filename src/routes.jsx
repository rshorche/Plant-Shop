// src/routes.jsx
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import Blog from "./pages/Blog";
import MainBlog from "./pages/MainBlog";
import OurService from "./pages/OurService";
import MainService from "./pages/MainService";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import CmsHome from "./pages/Cms/CmsHome";
import BlogPostEditor from "./pages/Cms/BlogPostEditor";
import Privete from "./pages/Cms/Privete";
import AuthPage from "./pages/AuthPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import PasswordResetForm from "./pages/PasswordResetForm";
import NotFound from "./pages/NotFound";

export default [
  { path: "/", element: <Home /> },
  { path: "/AboutUs", element: <AboutUs /> },
  { path: "/OurTeam", element: <OurTeam /> },
  { path: "/Blog", element: <Blog /> },
  { path: "/Blog/:BlogID", element: <MainBlog /> },
  { path: "/OurService", element: <OurService /> },
  { path: "/OurService/:serviceID", element: <MainService /> },
  { path: "/ContactUs", element: <ContactUs /> },
  { path: "/FAQ", element: <FAQ /> },
  { path: "/Auth", element: <AuthPage /> },
  { path: "/PasswordReset", element: <PasswordResetPage /> },
  { path: "/PasswordResetForm", element: <PasswordResetForm /> },
  {
    path: "/cms",
    element: (
      <Privete>
        <CmsHome />
      </Privete>
    ),
    children: [{ path: "blogPostEditor", element: <BlogPostEditor /> }],
  },
  { path: "*", element: <NotFound /> },
];
