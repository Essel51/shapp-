"use client";

import { useState } from "react";

export default function HouseholdCodeForm() {
  const [code, setCode] = useState("");

  const submit = () => {
    console.log("Household code entered:", code);
    // Later: call API to join household
  };

  return (
    <div className="mt-6 flex">
      <input
        className="border p-2 rounded w-full"
        placeholder="Household code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        className="ml-2 p-2 bg-blue-600 text-white rounded"
        onClick={submit}
      >
        Continue
      </button>
    </div>
  );
}
