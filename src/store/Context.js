import { useState } from "react";
import { createContext } from "react";

export const FirebaseContext = createContext(null);
export const AuthContext = createContext(null);

const Context = ({ children }) => {
  const [user, setUser] = useState("");
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Context;
