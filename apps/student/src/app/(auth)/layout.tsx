import {FC,ReactNode} from 'react'
interface AuthlayoutProps {
    children:ReactNode;
}
const Authlayout: FC<AuthlayoutProps> = ({children}) => {
  return (
    <div className='bg-blue-100 p-10 rounded-lg'>
      {children}
    </div>
  )
}

export default Authlayout
