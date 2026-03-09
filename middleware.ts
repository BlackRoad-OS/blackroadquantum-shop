// © 2026 BlackRoad OS, Inc. — Proprietary. All rights reserved.
// Contributor access control — all API routes require a valid BLACKROAD_API_KEY
// unless the route is /api/health or /api/auth.
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_API_PREFIXES = ['/api/health', '/api/auth']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only gate /api/* routes that are not public
  if (pathname.startsWith('/api/')) {
    const isPublic = PUBLIC_API_PREFIXES.some((prefix) => pathname.startsWith(prefix))
    if (!isPublic) {
      const apiKey = request.headers.get('x-blackroad-api-key')
      const validKey = process.env.BLACKROAD_API_KEY
      if (!validKey || apiKey !== validKey) {
        return NextResponse.json(
          {
            error: 'Unauthorized. A valid BlackRoad OS contributor API key is required.',
            info: 'Contact BlackRoad OS, Inc. to receive access via the converter API.',
          },
          { status: 401 }
        )
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
}
