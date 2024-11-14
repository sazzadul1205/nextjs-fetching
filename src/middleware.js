import { NextResponse } from "next/server";

const user = true;
const CookiesToken = "next-hero";

export const middleware = (request) => {
  //   if (!user) {
  //     return NextResponse.redirect(new URL("/Login", request.url));
  //   }

  const cookies = request.cookies.get("token");

  if (!cookies || cookies.value !== CookiesToken) {
    return NextResponse.redirect(new URL("/Login", request.url));
  } 

  return NextResponse.next();
};

export const config = {
  matcher: ["/Dashboard", "/Services"],
};
