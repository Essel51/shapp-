import HouseholdCodeForm from "@/components/HouseholdCodeForm";

export default function Home() {
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold">Welcome to Shapp</h1>
      <p className="mt-4 text-lg">
        Enter your household code to continue.
      </p>

      <HouseholdCodeForm />
    </main>
  );
}
