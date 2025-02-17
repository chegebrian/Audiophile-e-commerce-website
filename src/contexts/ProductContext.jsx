import { createContext, useContext, useEffect, useReducer } from "react";

const products = createContext();

function reducer(state, action) {
  if (action.type === "dataRecieved")
    return {
      ...state,
      productsData: action.payload,
    };
}
export function ProductProvider({ children }) {
  const initialState = {
    productsData: [],
  };

  const [{ productsData }, dispatch] = useReducer(reducer, initialState);


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
    <products.Provider value={{ productsData, dispatch }}>
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
