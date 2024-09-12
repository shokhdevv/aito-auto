"use client"
import { Footer, Navbar } from '@/components'
import { Client, HydrationProvider } from 'react-hydration-provider'
import { QueryClient, QueryClientProvider } from 'react-query';

const  Layout = ({children}) =>  {
  const queryClient = new QueryClient();

  return (
    <HydrationProvider>
       <QueryClientProvider client={queryClient}>
          <Client>
            <Navbar/>
            {children}
            <Footer/>
          </Client>
       </QueryClientProvider>
    </HydrationProvider>
  )
}
export default Layout
