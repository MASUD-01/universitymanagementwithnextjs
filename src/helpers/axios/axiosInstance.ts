import { authKey } from "../../constants/storagekey";
import { IGenericErrorResponse, ResponseSuccessType } from "@/types";
import { getFromLocalStorage } from "@/utils/local-storage";
import axios, { AxiosResponse } from "axios";

//50.8 video
//akta intance create kora hosse jekhane amra default kisu use kortaci
const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json"; //formData bade sob kisu application/json(era body te patahi)
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000; // etar mane server crash korle 1 minute por amader janabe

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getFromLocalStorage(authKey);
    //eta amra kortesi authentication er somoy, backend ekhan theke niye nibe
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error); //request er khetre kono error thakle eikhan theke return kore dibe
  }
);

//50.9 video
// Add a response interceptor
//@ts-ignore
instance.interceptors.response.use(
  function (response: AxiosResponse<any, any>): any {
    const responseObject: ResponseSuccessType = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  function (error) {
    const responseObject: IGenericErrorResponse = {
      statusCode: error?.response?.data?.statusCode || 500,
      message: error?.response?.data?.message || "Something went wrong",
      errorMessages: error?.response?.data?.message,
    };
    return responseObject;
    // return Promise.reject(error);
  }
);

export { instance };
