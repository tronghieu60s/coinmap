import CryptoJS from "crypto-js";
import { useCallback, useEffect, useState } from "react";
import apiCaller from "../../core/api";
import { getAuth, setAuth } from "../../core/storage";
import { LoginType } from "../../core/types";
import Login from "../components/Login";

const { REACT_APP_ENCRYPT_TOKEN = "" } = process.env;

export default function LoginContainer() {
  const [input, setInput] = useState<LoginType>({
    email: "",
    password: "",
    remember: false,
  });
  const [login, setLogin] = useState<LoginType | null>(null);

  useEffect(() => {
    const token = getAuth();
    if (token) {
      const bytes = CryptoJS.AES.decrypt(token, REACT_APP_ENCRYPT_TOKEN);
      const decoded = bytes.toString(CryptoJS.enc.Utf8);
      setLogin(JSON.parse(decoded) as LoginType);
    }
  }, []);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInput({ ...input, [name]: value });
    },
    [input]
  );

  const onSubmit = useCallback(
    async (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      const { remember, ...restInput } = input;

      const login = await apiCaller("login", "POST", { data: restInput });

      if (login?.error_code === "SUCCESS") {
        setLogin(restInput);
        const token = CryptoJS.AES.encrypt(
          JSON.stringify(restInput),
          REACT_APP_ENCRYPT_TOKEN
        ).toString();
        setAuth(token, Boolean(remember) ? 365 : 0);
        return;
      }

      alert(login?.message);
    },
    [input]
  );

  console.log(login?.email);

  return (
    <Login
      login={login}
      input={input}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
