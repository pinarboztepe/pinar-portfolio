import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  const { name, email, message } = data;

  try {
    // Here you would typically integrate with an email service
    // For now, this is a placeholder response
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}