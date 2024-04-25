import { createStore } from 'vuex';
import groceryData from '../public/assets/grocery.json';


const fetchData =  () => {
 
  return groceryData;
};

export const store = createStore({
  modules: {
    cart: {
      namespaced: true,
      state: {
        cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
        groceryData: JSON.parse(localStorage.getItem('groceryData')) || [],
        itemQuantities: JSON.parse(localStorage.getItem('itemQuantities')) || {},
        isCartUpdated: false, 
      },
      mutations: {
        addToCart(state, item) {
         
          const existingItem = state.cartItems.find((i) => i.id === item.id);
          if (existingItem) {
            existingItem.quantity += 1;
          } else {
            state.cartItems.push({ ...item, quantity: 1 });
          
          }
          localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        setCartUpdated(state, value) {
          state.isCartUpdated = value;
        },
        setGroceryData(state, data) {
          state.groceryData = data;
         
          localStorage.setItem('groceryData', JSON.stringify(state.groceryData));
        },
        setCartItems(state, items) {
          state.cartItems = items;
         
        }, 
        setItemQuantity(state, { id, quantity }) {
          const item = state.cartItems.find((i) => i.id === id);
          if (item) {
            item.quantity = quantity;
        
            // Update itemQuantities and cartItems in local storage and state
            state.itemQuantities[id] = quantity;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
          }
        },
        removeItemFromCart(state, index) {
          state.cartItems.splice(index, 1);
          localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

      },
      actions: {
         loadGroceryData({ commit }) {
          try {
            const data =  fetchData();
            
            commit('setGroceryData', data);
          } catch (error) {
            console.error('Error loading grocery data:', error);
          }
        },
        addToCart({ commit, dispatch, getters }, itemId) {
          const item = getters.getItemById(itemId);
      
          if (item && item.id) {
            commit('addToCart', item);
            dispatch('updateCart');
          } else {
            console.error(`Item with ID ${itemId} not found.`);
          }
        },
        updateCart({ commit, getters }) {
          const computedItems = getters.cartItemsWithDetails;
          commit('setCartItems', computedItems);
        },
        setItemQuantity({ commit }, payload) {
          commit('setItemQuantity', payload);
        }, 
        removeItem({ commit, state }, itemId) {
          const index = state.cartItems.findIndex((item) => item.id === itemId);

          if (index !== -1) {
            commit('removeItemFromCart', index);
          } else {
            console.error(`Item with ID ${itemId} not found in cart.`);
          }
        },
      },
      getters: {
        getItemById: (state) => (itemId) => {
          const item = Array.isArray(state.groceryData)
            ? state.groceryData.reduce((acc, category) => {
                const foundItem = category.items.find((item) => item.id === itemId);
                return foundItem || acc;
              }, null)
            : null;
       
          return item ;
        },
        
        cartItemsWithDetails: (state) => {
          return state.cartItems
            .map((cartItem) => {
              const item = state.groceryData.reduce((acc, category) => {
                const foundItem = category.items.find((item) => item.id === cartItem.id);
                if (foundItem) {
                  return foundItem;
                }
                return acc;
              }, null);

              return item ? { ...item, quantity: cartItem.quantity } : null;
            })
            .filter((item) => item !== null);
        },
      },
    },
    orderDetails :{
      namespaced: true,
      state: {
        selectedPaymentMethod: null,
        addresses: {},
      },
    mutations: {
      setPaymentMethod(state, paymentMethod) {
        state.selectedPaymentMethod = paymentMethod;
      },
      setAddresses(state, addresses) {
        state.addresses = addresses;
      },
    }
    },
    // PriceData : {
    //   namespaced: true,
    //   state: {
    //     price: []
    //   },
    //   mutations: {
    //     setPrice(state, price) {
    //       state.price.push(price)
    //     },
    //   }
    // },
    
  },
});
store.dispatch('cart/loadGroceryData');

export default store;