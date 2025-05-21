import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" title="Logo">
      <Image src='/logo.svg' alt="logo" width={116} height={32} priority/>
    </Link>
  );
}
