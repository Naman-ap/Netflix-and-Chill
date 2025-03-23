import { configureStore } from "@reduxjs/toolkit";
import movieReucer from '../store/movieoSlice';
export const store=configureStore({ 

    reducer:{
               movieoData:movieReucer
    
    }
});