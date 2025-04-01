import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const products = createContext();

function reducer(state, action) {
  if (action.type === "dataRecieved")
    return {
      ...state,
      productsData: action.payload,
    };

  if (action.type === "addtocart") {
    const { product, quantity } = action.payload;

    const IndexProductId = state.cart.find(
      (item) => item.product.id === product.id,
    );
    // console.log(IndexProductId);
    // console.log(product.id);
    // console.log(state.cart);

    if (IndexProductId) {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        ),
      };
    } else {
      return {
        ...state,
        cart: [...state.cart, { product, quantity }],
      };
    }
  }

  if (action.type === "decreaseQuantityfromCart") {
    const { product } = action.payload;
    // console.log(product.id);
    

    const IndexProductId = state.cart?.find(
      (item) => item.product.id === product.id,
    );

    if (IndexProductId) {
      return {
        ...state,
        cart: state.cart?.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity}
            : item,
        ),
      };
    }
  }
  if (action.type === "increaseQuantityfromCart") {
    const { product } = action.payload;

    const IndexProductId = state.cart.find(
      (item) => item.product.id === product.id,
    );

    if (IndexProductId) {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    }
  }
}
export function ProductProvider({ children }) {
  const [count, setCount] = useState(1);

  // const [quantity, setQuantity] = useState(count);

  function handleIncrement() {
    setCount((count) => count + 1);
  }
  function handleDecrement() {
    setCount((count) => (count > 1 ? count - 1 : count));
  }
  const initialState = {
    productsData: [],
    cart: [],
  };

 
  


  const [{ productsData, cart }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("http://localhost:2000/products");
        const data = await res.json();
        console.log(data);

        dispatch({ type: "dataRecieved", payload: data });
      } catch (error) {
        console.error("Error fetching products");
      }
    }

    getProducts();
  }, []);
  return (
    <products.Provider
      value={{
        productsData,
        dispatch,
        count,
        handleIncrement,
        handleDecrement,
        cart,
      }}
    >
      {children}
    </products.Provider>
  );
}

export function useProducts() {
  const context = useContext(products);

  if (context === undefined)
    throw new Error("Product context was used ouside the ProductProvider");

  return context;
}
