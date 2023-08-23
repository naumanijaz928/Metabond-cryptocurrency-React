import { wrapper } from "../wrapper";

export function UserLogin(credentials) {
  return wrapper.post(`accounts/login`, credentials);
}
