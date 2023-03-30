import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { VERIFIER_TOKEN } from "../Api/Mutation/MutationAuth";
import LoadingPage from "../Pages/LoadingPage";

export default function PrivateRouter() {
  const [token, setToken] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [verifierToken, { error }] = useMutation(VERIFIER_TOKEN);

  const verifyLogin = () => {
    setIsLoading(true);
    verifierToken({
      variables: {
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        setToken(res.data);
        localStorage.setItem("usename",res.data.verifierToken)
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) verifyLogin();
    else {
      setIsLoading(false);
      setToken(false);
    }
  }, [verifierToken]);

  if (isLoading) return <LoadingPage />;
  if (error) return <p>{error.message}</p>;

  return token ? <Outlet /> : <Navigate to={"/"} />;
}
