import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useAuthenticationStorage = create()(
    persist(
        (set) => ({
            user: null,
            token: null,
            SaveUserLocalData: (user, token) => set({ user: user, token: token }),
            DeleteUserSession: () => set({ user: null, token: null })

        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);

