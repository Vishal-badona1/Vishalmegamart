import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "../Image/imageSlice";
import productSlice from "../Product/productSlice";
import viewProduct from "../Product/viewProduct";
import Getuser from "../User/Getuser";

export default configureStore({
    reducer: {
        image: imageSlice,
        model: productSlice,
        User : Getuser,
         disp : viewProduct
    }
})