import { MAIN_ROUTE, LOGIN_ROUTE, CONTACT_ROUTE, COFFEE_HOUSES_ROUTE, 
    COFFEE_HOUSE_CARD_ROUTE, REGISTRATION_ROUTE, PROFILE_USER_ROUTE, 
    PRODUCT_MENU_ROUTE, PRODUCT_ROUTE } from "./utils/consts"
import MainPage from './pages/main/Main';
import Auth from './components/authorization/Authorization'
import ContactsPage from './pages/contacts/Contacts';
import CoffeeHouses from './pages/coffeeHouses/CoffeeHouses';
import CoffeeHousesCard from './pages/coffeeHouseCard/CoffeeHouseCard';
import Regist from './components/registration/Registration';
import ProfileUser from './pages/profileUser/ProfileUser';
import ProductsMenu from './pages/menuProducts/MenuProducts';
import ProductCard from './components/productCard/ProductCard';

// страницы на которые может перейти авторизованный пользователь //
export const authRoutes = [
    {
        path: PROFILE_USER_ROUTE,
        Component: ProfileUser
    },
]

// страницы на которые может перейти каждый пользователь
export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: CONTACT_ROUTE,
        Component: ContactsPage
    },
    {
        path: COFFEE_HOUSES_ROUTE,
        Component: CoffeeHouses
    },
    {
        path: COFFEE_HOUSE_CARD_ROUTE,
        Component: CoffeeHousesCard
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Regist
    },
    {
        path: PRODUCT_MENU_ROUTE,
        Component: ProductsMenu
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductCard
    }
]
