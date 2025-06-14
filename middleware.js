import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = new URL(request.url);

  if (url.pathname.startsWith('/blog')) {
    const newPath = url.pathname.replace('/blog', '') || '/';
    const targetUrl = `https://skrypterblog.seoversehq.com${newPath}${url.search}`;
    return NextResponse.rewrite(targetUrl);
  }

  return NextResponse.next();
}
