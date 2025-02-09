import { NextResponse } from 'next/server';

export async function POST() {
  try {
    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  }
}
