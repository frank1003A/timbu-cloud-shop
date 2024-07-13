import axios from "axios";
import { NextResponse } from "next/server";
const orgId = process.env.ORG_ID;
const appId = process.env.APP_ID;
const appKey = process.env.API_KEY;
const url = `https://api.timbu.cloud/products/1234?organization_id=123`;

type Params = {
  id: string;
};

export async function GET(request: Request, context: { params: Params }) {
  const id = context.params.id;
  console.log(id);
  try {
    const response = await axios.get(
      `https://api.timbu.cloud/products/${id}?organization_id=${orgId}&reverse_sort=false&Appid=${appId}&Apikey=${appKey}`
    );
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
