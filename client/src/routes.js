import Admin from "./pages/Admin";
import {
    Admin_Route,
    Basket_Route,
    Device_Route,
    Login_Route,
    Registration_Route,
    Shop_Route,
    Ware_Route
} from "./utils/constants";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import WarePage from "./pages/WarePage";

export const authRoutes = [
    {
        path: Admin_Route,
        Component: Admin
    },
    {
        path: Basket_Route,
        Component: Basket
    },
];
export const publicRoutes = [
    {
        path: Shop_Route,
        Component: Shop
    },
    {
        path: Ware_Route + '/:id',
        Component: WarePage
    },
    {
        path: Login_Route,
        Component: Auth
    },
    {
        path: Registration_Route,
        Component: Auth
    },
];