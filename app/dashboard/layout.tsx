import React from "react"
import Sidebar from "./_components/Sidebar"

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden h-screen">
      <div className="flex-none w-full md:w-64"> 
        <Sidebar/>
      </div>
      <div className="p-6 md:p-12 md:overflow-y-auto grow">{children}</div>
    </div>
  )
}
export default DashboardLayout