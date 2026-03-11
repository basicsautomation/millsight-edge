import { RouterProvider, createRouter } from "@tanstack/react-router";
import { createRootRoute, createRoute } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboards from "./pages/Dashboards";
import Features from "./pages/Features";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Partner from "./pages/Partner";
import Product from "./pages/Product";
import ProductOptions from "./pages/ProductOptions";
import Solutions from "./pages/Solutions";

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const productRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/product",
  component: Product,
});
const howItWorksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/how-it-works",
  component: HowItWorks,
});
const featuresRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/features",
  component: Features,
});
const dashboardsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboards",
  component: Dashboards,
});
const solutionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/solutions",
  component: Solutions,
});
const productOptionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/product-options",
  component: ProductOptions,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const partnerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/partner",
  component: Partner,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  productRoute,
  howItWorksRoute,
  featuresRoute,
  dashboardsRoute,
  solutionsRoute,
  productOptionsRoute,
  aboutRoute,
  partnerRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
