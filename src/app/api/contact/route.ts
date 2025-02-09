import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    return new Response('Success', { status: 200 });
  } catch {
    return new Response('Error', { status: 500 });
  }
}