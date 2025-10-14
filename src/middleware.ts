import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log(`metodo: ${request.method}, url: ${request.nextUrl.pathname}`);

  const response = NextResponse.next();

  // CORS - Permitir peticiones desde cualquier origen (configurable)
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS',
  );
  response.headers.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization',
  );

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: response.headers });
  }

  return response;
}

export const config = {
  matcher: ['/characters/:path*', '/api/:path*'],
};
