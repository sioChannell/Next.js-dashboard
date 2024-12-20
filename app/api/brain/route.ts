import { NextRequest, NextResponse } from "next/server";

export interface Message {
  sender: "user" | "brian";
  content: string;
}

const API_URL = "https://api.brianknows.org/api/v0/agent";
const API_KEY = "brian_ojVMQC3S7BqF7aXo2";

export async function GET() {
  return NextResponse.json({ message: "Hello, World!" });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "X-Brian-Api-Key": API_KEY || "",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: body.prompt,
      address: body.address,
      messages: body.messages,
    }),
  });

  const data = await response.json();
  console.log(data);
  return NextResponse.json(data);
}
