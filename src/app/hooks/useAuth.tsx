import React, { createContext, useContext, useState, useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface AuthUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  tenantName: string;
  // Membership fields — populated after plan lookup
  tier: "basic" | "standard" | "premium" | null;
  planCode: string | null;
  stripeCustomerId: string | null;
}

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// Mock session — swap this block for a real API call once your auth backend
// is integrated. The shape of AuthUser above should match your API response.
// ─────────────────────────────────────────────────────────────────────────────

const MOCK_SESSION: AuthUser = {
  id: "usr_001",
  firstName: "Jane",
  lastName: "Smith",
  email: "jane.smith@acmecorp.com",
  tenantName: "Acme Corp",
  tier: "standard",
  planCode: "pro_monthly",
  stripeCustomerId: "cus_mock_placeholder",
};

// ─────────────────────────────────────────────────────────────────────────────
// Context
// ─────────────────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextValue>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // On mount: check for a persisted session token.
  // Replace this with a real /api/auth/me call when your auth backend exists.
  useEffect(() => {
    const token = localStorage.getItem("rbp_session_token");
    if (token) {
      // TODO: Replace with: fetch('/api/auth/me', { headers: { Authorization: `Bearer ${token}` } })
      //       .then(r => r.json()).then(setUser)
      setUser(MOCK_SESSION);
    }
    setIsLoading(false);
  }, []);

  const login = async (_email: string, _password: string) => {
    // TODO: Replace with a real POST /api/auth/login call.
    // On success: store the returned token, then call setUser with the response.
    localStorage.setItem("rbp_session_token", "mock_token_replace_with_real");
    setUser(MOCK_SESSION);
  };

  const logout = () => {
    localStorage.removeItem("rbp_session_token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, isLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
