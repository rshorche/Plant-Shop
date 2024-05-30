import Header from "./parts/Header/Header";
import Footer from "./parts/Footer/Footer";
import ContactUs from "./parts/ContactUs/ContactUsBox";
import { useLocation, useRoutes } from "react-router-dom";
import routes from "./routes";

export default function App() {
  const router = useRoutes(routes);
  const location = useLocation().pathname;
  const adminPanel = ["/cms", "/cms/blogPostEditor"];
  const isOnAdminPanel = adminPanel.includes(location);

  return (
    <div className="max-w-[90rem] mx-auto my-0">
      {!isOnAdminPanel && <Header />}
      {router}
      {!isOnAdminPanel && <ContactUs />}
      {!isOnAdminPanel && <Footer />}
    </div>
  );
}
