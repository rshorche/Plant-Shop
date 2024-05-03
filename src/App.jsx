import Header from "./parts/Header/Header";
import Footer from "./parts/Footer/Footer";

import { useRoutes } from "react-router-dom";
import routes from "./routes";

export default function App() {
  const router = useRoutes(routes);

  return (
    <div className="max-w-[90rem] mx-auto my-0">
      <Header />
      {router}
      <Footer />
    </div>
  );
}
