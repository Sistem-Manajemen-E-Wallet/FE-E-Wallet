import {
  ReactNode,
  createContext,
  useMemo,
  useState,
  useCallback,
  useEffect,
} from "react";

import { useToast } from "@/components/ui/use-toast";
import { ProfileType, userProfile } from "@/utils/api/users";
import Cookies from "js-cookie";

interface Context {
  token: string;
  user: Partial<ProfileType>;
  changeToken: (token?: string) => void;
}

interface Props {
  children: ReactNode;
}

const contextValue = {
  token: "",
  user: {},
  changeToken: () => {},
};

const TokenContext = createContext<Context>(contextValue);

export function TokenProvider({ children }: Readonly<Props>) {
  const { toast } = useToast();

  const [token, setToken] = useState(Cookies.get("token") ?? "");
  const [user, setUser] = useState<Partial<ProfileType>>({});

  useEffect(() => {
    if (token !== "") {
      getProfile();
    }
  }, [token]);

  const getProfile = useCallback(async () => {
    try {
      const result = await userProfile();
      setUser(result.data.data);
    } catch (error) {
      toast({
        title: "Oops! Something went wrong.",
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  }, [token]);

  const changeToken = useCallback((token?: string) => {
    const newToken = token ?? "";
    const tokenBase64 = btoa(newToken);
    setToken(tokenBase64);
    if (tokenBase64) {
      Cookies.set("token", tokenBase64, { expires: 2 });
    } else {
      Cookies.remove("token");
      setUser({});
    }
  }, []);

  const tokenContextValue = useMemo(
    () => ({
      token,
      user,
      changeToken,
    }),
    [token, user, changeToken]
  );

  return (
    <TokenContext.Provider value={tokenContextValue}>
      {children}
    </TokenContext.Provider>
  );
}

export default TokenContext;
