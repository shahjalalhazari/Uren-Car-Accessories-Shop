import {NextResponse} from "next/server";
import {getToken} from "next-auth/jwt";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(request) {
  // GET THE TOKEN.
  const token = await getToken({
    req: request, secret: process.env.NEXTAUTH_SECRET,
  });
  // GET THE CURRENT PATH.
  const { pathname } = request.nextUrl;
  // NORMAL USER PROTECTED ROUTES.
  const protectedUserRoutes = ["/user/profile"];
  // ADMIN ONLY ROUTES.
  const adminRoutes = ["/dashboard", "/inventory"];

  
  // BLOCK ACCESS API ROUTES FOR ALL USERS.
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // ALLOW ALL PUBLIC ASSETS (CSS, JS, ETC).
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  

  // HANDLE USER PROTECTED ROUTES.
  if (protectedUserRoutes.some((route) => pathname.startsWith(route))) {
    // IF NOT AUTHENTICATED. REDIRECT TO SIGNIN PAGE AND AFTER SUCCESSFUL LOGIN REDIRECT USER.
    if (!token) {
      const signInUrl = new URL("/user/signin", request.url);
      signInUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(signInUrl);
    }
  }

  // HANDLE ADMIN ONLY ROUTES.
  if (adminRoutes.some((route) => pathname.startsWith(route))) {
    // IF NOT AUTHENTICATED. REDIRECT TO SIGNIN PAGE AND AFTER SUCCESSFUL LOGIN REDIRECT USER.
    if (!token) {
      const signInUrl = new URL("/user/signin", request.url);
      signInUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(signInUrl);
    }

    // IF USER AUTHENTICATED USER IS NOT STAFF OR ADMIN, REDIRECT TO HOME PAGE.
    if (token.role !== "admin" && token.role !== "staff") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // OTHERWISE ALLOW THE USER.
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/api/:path*",
    "/user/profile/:path*",
    "/dashboard/:path*",
    "/inventory/:path*",
  ],
};