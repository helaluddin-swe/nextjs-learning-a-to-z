"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Sidebar = () => {
  const pathname=usePathname()

  return (
    <div className="border-r-2 border-gray-500 bg-gray-300 h-screen p-4 ">
      <ul className="flex flex-col gap-2">
        <li>
      <Link href="/dashboard/customers" className={`${pathname==="/dashboard/customers" ?"text-red-500":""}`}>Customer</Link>
        </li>
        <li>
      <Link href="/dashboard/invoices" className={`${pathname==="/dashboard/invoices" ?"text-red-500":""}`}>Invoices</Link>
        </li>
        </ul>
    </div>
  )
}
export default Sidebar