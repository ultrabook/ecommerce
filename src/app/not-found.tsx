"use client";

import Error from "next/error";

export default function NotFound404() {
  return (
    <>
      <Error statusCode={404} withDarkMode={false} />
    </>
  );
}
