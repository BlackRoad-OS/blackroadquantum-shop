// © 2026 BlackRoad OS, Inc. — Proprietary. All rights reserved.
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      service: 'blackroadquantum-shop',
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  )
}
