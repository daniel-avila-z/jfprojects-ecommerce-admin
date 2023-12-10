'use client'

// import { UserButton } from '@clerk/nextjs'
// import { Modal } from '@/components/ui/modal'
import { useStoreModal } from '@/hooks/use-store-modal'
import { useEffect } from 'react'

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])
  return null
}

export default SetupPage

// import { Button } from '@/components/ui/button'

// export default function Home () {
//   return (
//     <>
//       <p>Hello Admin Dashboard</p>
//       <div className='p-4'>
//         <Button>Click me</Button>
//       </div>
//     </>
//   )
// }
