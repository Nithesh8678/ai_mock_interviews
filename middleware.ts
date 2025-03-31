// Temporarily disabled middleware for authentication

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get("session")?.value;
  const pathname = request.nextUrl.pathname;

  // Public paths that don't require authentication
  const authPaths = ["/sign-in", "/sign-up"];

  // Check if the user is on an auth page and has a valid session
  if (authPaths.includes(pathname) && sessionCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/sign-in", "/sign-up"],
};
