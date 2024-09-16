"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Dashboard from '@/components/Dahboard'
import { useSession,signIn , signOut } from 'next-auth/react'
const Dashboardpage = () => {
    const {data:session} = useSession()
    if (!session){
        const router = useRouter()
        router.push('/login')
    }
  return (
    <div>
      
      <Dashboard/>
    </div>
  )
}

export default Dashboardpage
