import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p>404 / Lost in the grid</p>
      <h1>Nothing<br />lives <em>here.</em></h1>
      <Link href="/">Return to portfolio →</Link>
    </main>
  );
}
