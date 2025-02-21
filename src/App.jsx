import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./UserContext";
import Spinner from "./components/Spinner";
import { VideoProvider } from "./VideoContext";

// lazy loading
const AppLayout = lazy(() => import("./AppLayout"));
const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const VideoPage = lazy(() => import("./Pages/VideoPage/VideoPage"));
const LoginPage = lazy(() => import("./Pages/LoginPage/LoginPage"));
const ChannelPage = lazy(() => import("./Pages/ChannelPage/ChannelPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <AppLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Spinner />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/videos/:id",
        element: (
          <Suspense fallback={<Spinner />}>
            <VideoPage />
          </Suspense>
        ),
      },
      {
        path: "/channel",
        element: (
          <Suspense fallback={<Spinner />}>
            <ChannelPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Spinner />}>
        <LoginPage />
      </Suspense>
    ),
  },
]);

function App() {
  return (
    <VideoProvider>
      <UserProvider>
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          gutter={12}
          toastOptions={{
            success: {
              duration: 2000,
              style: {
                background: "rgba(7, 97, 37, 0.628)",
                color: "white",
              },
            },
            error: {
              duration: 4000,
              style: {
                background: "rgba(97, 7, 7, 0.705)",
                color: "white",
              },
            },
          }}
        />
      </UserProvider>
    </VideoProvider>
  );
}

export default App;
