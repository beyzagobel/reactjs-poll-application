import { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [poll, setPoll] = useState("");

  const data = {
    poll,
    setPoll,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};
export const usePoll = () => useContext(Context);
export default Provider;
