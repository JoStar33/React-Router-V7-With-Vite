import React, { Suspense } from "react";
import { Await } from "react-router";
import { getFallbackTestFast, getFallbackTestSlow } from "@/apis/fallback";
import {
  fallbackBaseStyle,
  fallbackLoadingStyle,
} from "../fallback/fallback.css";
import type { Route } from "./+types/fallback";

export async function loader({ params }: Route.LoaderArgs) {
  const helloworldSlow = getFallbackTestSlow();
  const helloworldFast = await getFallbackTestFast();
  return {
    helloworldFast,
    helloworldSlow,
  };
}

export default function FallbackPage({ loaderData }: Route.ComponentProps) {
  const { helloworldFast, helloworldSlow } = loaderData;
  return (
    <div className={fallbackBaseStyle}>
      <h2>과연 결과는?</h2>
      <h3>{helloworldFast}</h3>
      <Suspense fallback={<FallbackLoading />}>
        <Await resolve={helloworldSlow}>{(value) => <h3>{value}</h3>}</Await>
      </Suspense>
    </div>
  );
}

function FallbackLoading() {
  return <div className={fallbackLoadingStyle}>로딩중...</div>;
}
