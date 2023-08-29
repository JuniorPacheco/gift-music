import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginService } from "../services/auth";

const initialUserState = {
  email: "",
  name: "",
  token: "",
};

const useUserStore = create((set) => ({
  user: initialUserState,
  loading: false,
  login: async (infoLogin) => {
    set({loading: true})
    try{
      const newUser = await loginService(infoLogin)
      console.log(newUser)
      set({newUser})
      return true
    }catch(e){
      console.log(e)
      return false
    }finally{
      set({loading: false})
    }
  },
}));

export {
  useUserStore
}