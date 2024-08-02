import React from "react";
import { getFrameMetadata } from "frog/next";
import type { Metadata } from "next";

const url = process.env.NEXT_PUBLIC_VERCEL_URL!;

if (!process.env.NEXT_PUBLIC_VERCEL_URL) {
  throw new Error("NEXT_PUBLIC_VERCEL_URL is not defined");
}

export async function generateMetadata({
  params,
}: {
  params: { poolId: string; chainId: string; count: string };
}): Promise<Metadata> {
  const frameTags = await getFrameMetadata(
    `${url}/api/donate/${params.chainId}/${params.poolId}/${params.count}`
  );

  return {
    other: frameTags,
  };
}
export default function Donate() {
  return <div />;
}
