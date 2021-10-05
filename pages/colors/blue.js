import Link from 'next/link';
import { branchTrackCustomEvent } from '../branch'

export default function Blue() {
  return (
    <>
      <h1 className="blue">BLUE</h1>
      <button onClick={() => {branchTrackCustomEvent('custom event', {foo: 'bar'})}}>Click Create Custom Event</button>
      <p>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </p>
    </>
  )
}