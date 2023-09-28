import { userinfo } from "@/types";
import { authKey } from "../constants/storagekey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken as string);
};
export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  // console.log(authToken);
  if (authToken) {
    //decoded korle user and role dibe
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};
export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken; // !! (double negetion) true othoba false e retrun kore,eikhane string return kortecilo
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};
