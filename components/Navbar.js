import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const Navbar = () => {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">TEST</div>
  )
}

export default Navbar