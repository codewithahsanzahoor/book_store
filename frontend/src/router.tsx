import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardLayout from "./layouts/DashboardLayout";
import BooksPage from "./pages/BooksPage";
import AuthLayout from "./layouts/AuthLayout";
import HomePage from "./pages/HomePage";
import CreateBookPage from "./pages/CreateBookPage";
import DeleteBookPage from "./pages/DeleteBookPage";
import UpdateBookPage from "./pages/UpdateBookPage";
import PublicLayout from "./layouts/PublicLayout";
import PublicHomePage from "./pages/PublicHomePage";
import BrowseBooksPage from "./pages/BrowseBooksPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import CartPage from "./pages/CartPage";
import UserAccountLayout from "./layouts/UserAccountLayout";
import ProfilePage from "./pages/ProfilePage";
import OrdersPage from "./pages/OrdersPage";
import CheckoutLayout from "./layouts/CheckoutLayout";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import AdminRoute from "./components/AdminRoute";
import UsersPage from "./pages/UsersPage";
import MyOrdersPage from "./pages/MyOrdersPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                index: true,
                element: <PublicHomePage />,
            },
            {
                path: "browse",
                element: <BrowseBooksPage />,
            },
            {
                path: "book/:id",
                element: <BookDetailsPage />,
            },
            {
                path: "cart",
                element: <CartPage />,
            },
            {
                path: "profile",
                element: <UserAccountLayout />,
                children: [
                    {
                        index: true,
                        element: <ProfilePage />,
                    },
                    {
                        path: "orders",
                        element: <MyOrdersPage />,
                    },
                ],
            },
        ],
    },
    {
        path: "/checkout",
        element: <CheckoutLayout />,
        children: [
            {
                index: true,
                element: <CheckoutPage />,
            },
            {
                path: "order-confirmation",
                element: <OrderConfirmationPage />,
            },
        ],
    },
    //? dashboard is the main layout and books is the nested layout , home is the nested layout
    {
        element: <AdminRoute />,
        children: [
            {
                path: "/dashboard",
                element: <DashboardLayout />,
                children: [
                    {
                        index: true,
                        element: <HomePage />,
                    },
                    {
                        path: "books",
                        element: <BooksPage />,
                    },
                    {
                        path: "books/create",
                        element: <CreateBookPage />,
                    },
                    {
                        path: "books/update/:id",
                        element: <UpdateBookPage />,
                    },
                    {
                        path: "books/delete/:id",
                        element: <DeleteBookPage />,
                    },
                    {
                        path: "orders",
                        element: <OrdersPage />,
                    },
                    {
                        path: "users",
                        element: <UsersPage />,
                    },
                ],
            },
        ],
    },
    {
        path: "/login",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <LoginPage />,
            },
        ],
    },
    {
        path: "/register",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <RegisterPage />,
            },
        ],
    },
]);
