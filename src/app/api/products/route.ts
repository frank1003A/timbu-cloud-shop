import axios from "axios";
import { NextResponse } from "next/server";

const orgId = process.env.ORG_ID;
const appId = process.env.APP_ID;
const appKey = process.env.API_KEY;

const url = `https://api.timbu.cloud/products?organization_id=${orgId}&Appid=${appId}&Apikey=${appKey}`;
export async function GET() {
  try {
    const response = await axios.get(url);
    const data = response.data; // Log the first item in the items array
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
