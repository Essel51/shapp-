export async function joinHousehold(code: string) {
  const res = await fetch("/api/join", {
    method: "POST",
    body: JSON.stringify({ code })
  });

  return res.json();
}
