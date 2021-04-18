import MainPage from "./componenents/views/MainPage";
import AboutPage from "./componenents/views/AboutPage";
import ContactPage from "./componenents/views/ContactPage";
import ProjectsPage from "./componenents/views/ProjectsPage";
import CompetitionsPage from "./componenents/views/CompetitionsPage";

const routes = [
  { path: "/", component: MainPage, exact: true },
  { path: "/about", component: AboutPage },
  { path: "/contact", component: ContactPage },
  { path: "/competitions", component: CompetitionsPage },
  { path: "/projects", component: ProjectsPage },
];

export default routes;
