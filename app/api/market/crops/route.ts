
import { NextResponse } from 'next/server';
import { CROP_REGISTRY } from '@/lib/market-engine';

export async function GET() {
  return NextResponse.json(CROP_REGISTRY);
}
