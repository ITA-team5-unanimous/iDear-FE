import {ROUTES} from '@/constants/routes';
import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;
  const accessToken = request.cookies.get('access_token')?.value;

  if (pathname === '/') {
    if (accessToken) {
      return NextResponse.redirect(new URL(ROUTES.MAIN, request.url));
    } else {
      return NextResponse.redirect(new URL(ROUTES.AUTH, request.url));
    }
  }

  if (pathname === ROUTES.AUTH) {
    if (accessToken) {
      return NextResponse.redirect(new URL(ROUTES.MAIN, request.url));
    }
    return NextResponse.next();
  }

  if (
    pathname.startsWith(ROUTES.AUTH_REDIRECT) ||
    pathname.startsWith(ROUTES.COMPLETE)
  ) {
    return NextResponse.next();
  }

  if (!accessToken) {
    return NextResponse.redirect(new URL(ROUTES.AUTH, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
