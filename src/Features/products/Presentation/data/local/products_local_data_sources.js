import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useProductLocalStorage = create()(
    persist(
        (set, get) => ({

            shoppingCart: [],
            setProductsInShoppingCart:(products)=>set({ shoppingCart: [...get().shoppingCart,...products]}),
            cleanShoppingCart:()=>set({ shoppingCart: []}),
        }),
        
        {
            name: 'product-sotrage',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);

