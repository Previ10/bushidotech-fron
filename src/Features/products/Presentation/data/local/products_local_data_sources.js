import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useProductLocalStorage = create(
  persist(
    (set) => ({
      shoppingCart: [],
      setProductsInShoppingCart: (products) => set((state) => ({ shoppingCart: [...state.shoppingCart, ...products] })),
      cleanShoppingCart: () => set({ shoppingCart: [] }), // Asegúrate de que esta función esté aquí
    }),
    {
      name: 'product-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);