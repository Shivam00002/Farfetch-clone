import { Route, Routes } from "react-router-dom";
import { PaymentPage } from "../pages/PaymentPage";
import { AddressPage } from "../pages/AddressPage";
import { WomensPage } from "../pages/womensPage";
import { MensPage } from "../pages/MensPage";
import Account from "../pages/Account";
import CustomizedDialogs from "../components/Navbar/dialog";
import { Home } from "../pages/Home ";
import { Singleproduct } from "../pages/Singleproduct";
import { CartPage } from "../pages/CartPage";
import Admin from "../admin/admin";

export const AllRoutes = () => {
   
    return (
        <div>
           
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={ <CartPage /> } />
                <Route path="/cart/address/payment" element={ <PaymentPage /> } />
                <Route path="/cart/address" element={ <AddressPage /> } />
                <Route path="/womens" element={ <WomensPage /> } />
                <Route path="/mens" element={ <MensPage /> } />
                <Route path="/admin" element={ <Admin /> } />
                <Route path="/account" element={ <CustomizedDialogs ><Account />
                </CustomizedDialogs> } />
                <Route path="/products/:id" element={ <Singleproduct /> } />

            </Routes>
        </div>
    );
};