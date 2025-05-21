import { useRouter } from "next/router";

export default function User() {
  const router = useRouter();
  const segments = router.query.slug as string[];

  return (
    <>
      <h2>USER {segments?.join('/')} BLOG PAGE</h2>
    </>
  );
}
