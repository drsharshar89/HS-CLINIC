import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Layout } from './components/Layout';
const Home = lazy(() => import('@/app/pages/Home').then((module) => ({ default: module.Home })));
const About = lazy(() => import('@/app/pages/About').then((module) => ({ default: module.About })));
const Services = lazy(() =>
  import('@/app/pages/Services').then((module) => ({ default: module.Services }))
);
const Technology = lazy(() =>
  import('@/app/pages/Technology').then((module) => ({ default: module.Technology }))
);
const Contact = lazy(() =>
  import('@/app/pages/Contact').then((module) => ({ default: module.Contact }))
);
const DigitalSmileDesign = lazy(() => import('@/app/pages/DigitalSmileDesign'));
const DentalTourism = lazy(() => import('@/app/pages/DentalTourism'));
const SanityStudio = lazy(() => import('@/app/pages/SanityStudio'));
const NotFound = lazy(() =>
  import('@/app/pages/NotFound').then((module) => ({ default: module.NotFound }))
);

// Simple loading fallback
const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-slate-950 text-amber-400">
    <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-current"></div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<PageLoader />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<PageLoader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: 'services',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: 'technology',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Technology />
          </Suspense>
        ),
      },
      {
        path: 'digital-smile-design',
        element: (
          <Suspense fallback={<PageLoader />}>
            <DigitalSmileDesign />
          </Suspense>
        ),
      },
      {
        path: 'dental-tourism',
        element: (
          <Suspense fallback={<PageLoader />}>
            <DentalTourism />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<PageLoader />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/studio',
    element: (
      <Suspense fallback={<PageLoader />}>
        <SanityStudio />
      </Suspense>
    ),
  },
]);
