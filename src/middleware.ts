import {ROUTES} from '@/constants/routes';
import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export function middleware(request: NextRequest) {
  // const token = request.cookies.get('accessToken')?.value;
  const {pathname} = request.nextUrl;

  if (pathname === '/') {
    return NextResponse.redirect(new URL(ROUTES.AUTH, request.url));
  }

  // 이미 로그인한 사용자가 /auth/login 접근 시 홈으로
  // if (token && pathname.startsWith('/auth')) {
  //   return NextResponse.redirect(new URL('/main', request.url));
  // }

  // 로그인 안 된 사용자가 보호된 페이지 접근 시 로그인으로
  // const isProtectedRoute = !pathname.startsWith('/auth') && pathname !== '/';
  // if (!token && isProtectedRoute) {
  //   return NextResponse.redirect(new URL('/auth/login', request.url));
  // }

  return NextResponse.next();
}

// 미들웨어를 적용할 경로
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
