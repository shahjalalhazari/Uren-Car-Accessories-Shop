"use client"
import {SessionProvider} from "next-auth/react";

const AuthProviders = ({children}) => {
  return <SessionProvider
    refetchInterval = {5 * 60} // REFETCH SESSION EVERY 5 MIN.
    refetchOnWindowFocus = {true} // REFETCH WHEN WINDOW IS ON FOCUS.
  >
    {children}
  </SessionProvider>
}

export default AuthProviders;