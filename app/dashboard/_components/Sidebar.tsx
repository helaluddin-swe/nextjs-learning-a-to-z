import Link from "next/link"

const Sidebar = () => {
  return (
    <div className="border-r-2 border-gray-500 bg-gray-300 h-screen p-4 ">
      <ul className="flex flex-col gap-2">
        <li>
      <Link href="/dashboard/customers">Customer</Link>
        </li>
        <li>
      <Link href="/dashboard/invoices">Invoices</Link>
        </li>
        </ul>
    </div>
  )
}
export default Sidebar