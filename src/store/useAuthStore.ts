import { create } from "zustand";

export type AuthState = {
    user: boolean
}

export type AuthActions = {
    login: () => void
    logout: () => void
}

export type AuthStoreType = AuthState & AuthActions

export const useAuthStore = create<AuthStoreType>((set, get) => ({
    user: false,
    login: () => {
        set({
            user: true
        })
    },
    logout: () => {
        set({
            user: false
        })
    }
}))