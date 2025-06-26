import { Outlet } from 'react-router'
import Sidebar from './components/sidebar'

const DashboardLayout = () => {
  return (
    <div className='h-full flex gap-6'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default DashboardLayout
