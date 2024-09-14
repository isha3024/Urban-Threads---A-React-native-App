import React, {createContext, useContext, useMemo, useState} from 'react';
const context = createContext();

export const MainContextProvider = props => {
  const [id, setId] = useState([]);

  const value = useMemo(() => {
    return {

      id: id,
      setId: setId,
    };
  }, [
    id,
    setId,
  ]);

  return <context.Provider value={value}>{props.children}</context.Provider>;
};

export const useMainContext = () => {
  const value = useContext(context);
  if (value === undefined)
    throw new Error('Tried to use context without a provider');
  return value;
};
