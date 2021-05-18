import axios from "axios";

import { API_URL } from "../constants/apiConstants";

const instance = axios.create({
    baseURL: API_URL,

});

export const findAllProducts = () => {
    return instance.get("/products");
}

export const findProductById = (id) => {
    return instance.get("/products/" + id);
}