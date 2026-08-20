import { LoaderCircle } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <LoaderCircle
      className="mx-auto my-10 animate-spin text-primary"
      size={40}
    />
  );
}
