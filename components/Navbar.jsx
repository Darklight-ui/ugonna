import Link from "next/link";

export default function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav>
      <ul className="flex gap-6">
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.path} className="hover:text-blue-600">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}