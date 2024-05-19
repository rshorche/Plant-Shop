import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import Blog from "./pages/Blog";
import MainBlog from "./pages/MainBlog";
import OurService from "./pages/OurService";

export default [
  { path: "/", element: <Home /> },
  { path: "/AboutUs", element: <AboutUs /> },
  { path: "/OurTeam", element: <OurTeam /> },
  { path: "/Blog", element: <Blog /> },
  { path: "/Blog/:BlogID", element: <MainBlog /> },
  { path: "/OurService", element: <OurService /> },

];
