import { createContext } from "react";
import { useAuth } from "../hooks/auth.hook";

function noop(jwt?:any, id?:any){}


export const AuthContext =createContext({
    token: null,
    userId:null,
    login: noop,
    logout: noop,
    isAuthenticated:false
})