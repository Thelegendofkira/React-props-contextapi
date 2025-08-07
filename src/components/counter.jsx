import { useState, createContext, useContext } from "react";
const MYContext = createContext();
export default function Counter() {
  return (
    <>
      <ContextProvider>
        <Increase />
        <Decrease />
        <Value />
      </ContextProvider>
    </>
  );
}
function ContextProvider({ children }) {
  const [count, setcount] = useState(0);
  return (
    <MYContext.Provider value={{ count, setcount }}>
      {children}
    </MYContext.Provider>
  );
}
function Increase() {
  const { setcount } = useContext(MYContext);
  function increase() {
    setcount((prev) => prev + 1);
  }
  return <button onClick={increase}>Inc</button>;
}
function Decrease() {
  const { setcount } = useContext(MYContext);
  function decrease() {
    setcount((prev) => prev - 1);
  }
  return <button onClick={decrease}>Dec</button>;
}
function Value() {
  const { count } = useContext(MYContext);
  return <p>{count}</p>;
}
