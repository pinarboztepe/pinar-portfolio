import { NextResponse } from 'next/server';

export async function POST() {  // Removed unused req parameter
  try {
    return new Response('Success', { status: 200 });
  } catch {
    return new Response('Error', { status: 500 });
  }
}