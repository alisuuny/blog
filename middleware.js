import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();

  if (url.pathname.startsWith('/blog')) {
    const newPath = url.pathname.replace('/blog', '') || '/';
    const target = `https://skrypterblog.seoversehq.com${newPath}${url.search}`;
    return NextResponse.rewrite(target);
  }

  return NextResponse.next();
}
