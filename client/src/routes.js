import Admin from "./pages/Admin";
import {Admin_Route, Basket_Route, Device_Route, Login_Route, Registration_Route, Shop_Route} from "./utils/constants";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";

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
        path: Device_Route + '/:id',
        Component: DevicePage
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