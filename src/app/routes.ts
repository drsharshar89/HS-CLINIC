import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Technology } from "./components/Technology";
import { Contact } from "./components/Contact";
import { Editor } from "./cms/Editor";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "technology", Component: Technology },
      { path: "contact", Component: Contact },
    ],
  },
  {
    path: "/cms",
    Component: Editor,
  }
]);
