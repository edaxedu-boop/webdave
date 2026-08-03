import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  getAdminSession,
  signInAdmin,
  signOutAdmin,
  isUsingLocalAuth,
} from '../lib/socialWorksService';

interface AuthContextValue {
  isAuthenticated: boolean;
  isLoading: boolean;
  isLocalMode: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const refreshSession = useCallback(async () => {
    const session = await getAdminSession();
    setIsAuthenticated(session);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    refreshSession();
  }, [refreshSession]);

  const login = useCallback(async (email: string, password: string) => {
    await signInAdmin(email, password);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(async () => {
    await signOutAdmin();
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({
      isAuthenticated,
      isLoading,
      isLocalMode: isUsingLocalAuth(),
      login,
      logout,
    }),
    [isAuthenticated, isLoading, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
}
