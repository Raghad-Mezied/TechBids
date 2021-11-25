import {
  useContext, createContext, ReactElement, ReactChild,
} from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';

const snackContext = createContext<string | null>(null);

export const useSnack = () : any => useContext(snackContext);

type variantType = 'default' | 'error' | 'success' | 'warning' | 'info';

const useProvideSnack = () : any => {
  const { enqueueSnackbar } = useSnackbar();

  const showSnack = (message: string, type?: variantType) : void => {
    enqueueSnackbar(message, { variant: type });
  };

  return {
    showSnack,
  };
};

  interface ProvideSnackProps {
    children: ReactChild
  }

const ContextProvider = ({ children } : ProvideSnackProps) : ReactElement => {
  const snack = useProvideSnack();
  return (
    <snackContext.Provider value={snack}>
      {children}
    </snackContext.Provider>
  );
};

export const ProvideSnack = ({ children } : ProvideSnackProps) : ReactElement => (
  <SnackbarProvider maxSnack={5}>
    <ContextProvider>{children}</ContextProvider>
  </SnackbarProvider>
);
