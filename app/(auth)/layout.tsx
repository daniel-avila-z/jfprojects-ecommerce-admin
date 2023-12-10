export default function AuthLayout ({
  children
}: {
    // eslint-disable-next-line no-undef
    children:React.ReactNode
}) {
  return (
    <div className='flex items-center justify-center h-full'>
      {children}
    </div>
  )
}
