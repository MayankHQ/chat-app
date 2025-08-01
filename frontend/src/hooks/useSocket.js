import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";

const useSocket = () => {
  const ctx = useContext(SocketContext);
  if (!ctx) throw new Error("useSocket must be used inside SocketProvider");
  return ctx;
};

export default useSocket;
