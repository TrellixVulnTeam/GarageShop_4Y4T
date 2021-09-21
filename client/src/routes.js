import Admin from "./pages/Admin";
import {
    Admin_Route,
    Basket_Route,
    Account_Route,
    Login_Route,
    Registration_Route,
    Shop_Route,
    ShopTypes_Route,
    Ware_Route
} from "./utils/constants";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import ShopTypes from "./pages/ShopTypes";
import Auth from "./pages/Auth";
import WarePage from "./pages/WarePage";
import Account from "./pages/Account";

export const authRoutes = [
    {
        path: Admin_Route,
        Component: Admin
    },
    {
        path: Account_Route,
        Component: Account
    },
    
];
export const publicRoutes = [
    {
        path: Shop_Route,
        Component: Shop
    },
    {
        path: ShopTypes_Route + '/:id',
        Component: ShopTypes
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
    {
        path: Basket_Route,
        Component: Basket
    },
];