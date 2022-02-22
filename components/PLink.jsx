import Link from "next/link"

function PLink({ to, children }) {
  return (
    <Link href={to}>
        <a>{children}</a>
    </Link>
  )
}

export default PLink