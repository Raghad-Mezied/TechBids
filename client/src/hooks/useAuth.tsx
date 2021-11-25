import React, {
  useState, useEffect, useContext, createContext,
} from 'react';
import axios from 'axios';

const authContext = createContext(null);

export const useAuth : any = () => useContext(authContext);

export const usePorvideAuth = () : object => {
  const [user, setUser] = useState<User | null>(null);

  return {
    user,
  };
};
