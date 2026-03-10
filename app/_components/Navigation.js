import Link from "next/link";
import { auth } from "../_lib/auth";
import { Span } from "next/dist/trace";

export default async function Navigation() {
  const session = await auth();
  console.log("session", session);

  return (
    <nav className="z-10 text-xl">
      <ul className="flex-center gap-16 ">
        <li className="hover:text-accent-400 transition-colors">
          {" "}
          <Link href="/cabins">Cabins</Link>
        </li>
        <li className="hover:text-accent-400 transition-colors">
          {" "}
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-accent-400 transition-colors">
          {session?.user?.image ? (
            <Link href="/account" className="flex items-center gap-4">
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link href="/account">Guest area</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
