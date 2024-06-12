import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import BlogList from "./components/BlogList";
import BlogView from "./components/BlogView";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    index: true,
                    element: <BlogList />
                },
                {
                    path: "/:postId",
                    element: <BlogView />
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
}

export default Router;