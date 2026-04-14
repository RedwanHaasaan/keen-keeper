import { useContext } from "react";
import { KeeperContext } from "../context/KeeperContext";


const useKeeper = () => {
  const context = useContext(KeeperContext);

  if (!context) {
    throw new Error("useKeeper must be used within a KeeperContextProvider");
  }

  return context;
};

export default useKeeper;