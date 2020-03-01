import {
    AuthenticationContext,
    adalFetch,
    withAdalLogin,
    AdalConfig
  } from "react-adal";
  
  export const adalConfig: AdalConfig = {
    tenant: "14d71d65-f596-4eae-be30-27f079bf8d4b",
    clientId: "14d71d65-f596-4eae-be30-27f079bf8d4b",
    endpoints: {
      api: "14d71d65-f596-4eae-be30-27f079bf8d4b"
    },
    cacheLocation: "localStorage"
  };
  
  export const authContext = new AuthenticationContext(adalConfig);
  
  export const adalApiFetch = (fetch: any, url: string, options: object) => {
    if (adalConfig.endpoints)
      return adalFetch(
        authContext,
        adalConfig.endpoints.api,
        fetch,
        url,
        options
      );
    else throw "API End Points Missing";
  };
  
  if (!adalConfig.endpoints) throw "API End Points Missing";
  
  export const withAdalLoginApi = withAdalLogin(
    authContext,
    adalConfig.endpoints.api
  );
  