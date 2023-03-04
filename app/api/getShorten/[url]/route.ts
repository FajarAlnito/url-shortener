import { NextResponse } from 'next/server'

export interface GetShortenResponse {
  shortened_url: string
}

export async function GET(
  _: Request,
  { params: { url } }: { params: { url: string } }
) {
  const res = await fetch(`${process.env.API_URL}/url/${url}`)
  const result: GetShortenResponse = await res.json()
  return NextResponse.json(result)
}
