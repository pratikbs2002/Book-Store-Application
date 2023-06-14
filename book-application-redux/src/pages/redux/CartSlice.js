import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        toast.info("Item is already in the cart", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        state.cartItems.push(item);
        state.totalPrice += item.price;
        toast.success("Item added to cart", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      const updatedCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== item.id
      );
      const updatedTotalPrice = state.totalPrice - item.totalIndividualPrice;

      state.cartItems = updatedCartItems;
      state.totalPrice = updatedTotalPrice;

      toast.warning("Item removed from cart", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity, price } = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === id);

      if (cartItem) {
        const updatedTotalPrice = state.totalPrice + price;
        const updatedCartItem = {
          ...cartItem,
          quantity: cartItem.quantity + quantity,
          totalIndividualPrice: cartItem.totalIndividualPrice + price,
        };

        state.cartItems = state.cartItems.map((item) =>
          item.id === id ? updatedCartItem : item
        );
        state.totalPrice = updatedTotalPrice;

        // if (quantity > 0) {
        //   toast.success("Quantity updated", {
        //     position: "top-center",
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //   });
        // } else {
        //   toast.warning("Quantity updated", {
        //     position: "top-center",
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //   });
        // }
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;

      toast.success("All items are removed from the cart", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity, clearCart } =
  CartSlice.actions;
export default CartSlice.reducer;
