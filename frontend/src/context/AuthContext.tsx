import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import {
  clearStoredToken,
  getStoredToken,
  registerUnauthorizedHandler,
  setStoredToken,
} from '../services/api/client.ts';
import { authApi } from '../services/api/endpoints.ts';
import type { MunicipalUserDTO } from '@shared/types/index.ts';

interface AuthContextValue {
  user: MunicipalUserDTO | null;
  isLoading: boolean;
  login: (identifier: string, password: string, rememberSession: boolean) => Promise<void>;
  setupAdmin: (payload: {
    setupKey: string;
    email: string;
    username: string;
    password: string;
    fullName: string;
    designation: string;
  }) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<MunicipalUserDTO | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleForceLogout = useCallback(() => {
    clearStoredToken();
    setUser(null);
  }, []);

  useEffect(() => {
    registerUnauthorizedHandler(handleForceLogout);
    const token = getStoredToken();
    if (!token) {
      setIsLoading(false);
      return;
    }

    authApi
      .me()
      .then((u) => setUser(u))
      .catch(() => {
        clearStoredToken();
        setUser(null);
      })
      .finally(() => setIsLoading(false));
  }, [handleForceLogout]);

  const login = useCallback(
    async (identifier: string, password: string, rememberSession: boolean) => {
      const res = await authApi.login(identifier, password, rememberSession);
      setStoredToken(res.token, rememberSession);
      setUser(res.user);
    },
    []
  );

  const setupAdmin = useCallback(
    async (payload: {
      setupKey: string;
      email: string;
      username: string;
      password: string;
      fullName: string;
      designation: string;
    }) => {
      const res = await authApi.setupAdmin(payload);
      setStoredToken(res.token, false);
      setUser(res.user);
    },
    []
  );

  const logout = useCallback(async () => {
    try {
      await authApi.logout();
    } catch {
      // Ignore logout errors if token already expired
    }
    clearStoredToken();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, setupAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
