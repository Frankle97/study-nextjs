import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello Next World!</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Client</Link>
        </li>
      </ul>
    </div>
  )
}
