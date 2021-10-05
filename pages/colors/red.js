import Link from 'next/link';

export default function Red() {
  return (
    <>
      <h1 className="red">RED</h1>
      <p>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </p>
    </>
  )
}