import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Download from "./components/Download";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/funcionalidades",
    element: <HowItWorks />,
  },
  {
    path: "/recursos",
    element: <Resources />,
  },
  {
    path: "/ajuda",
    element: <Contact />,
  },
  {
    path: "/precos",
    element: <Pricing />,
  },
  {
    path: "/historias",
    element: <Testimonials />,
  },
  {
    path: "/download",
    element: <Download />,
  },
];

export default routes;
