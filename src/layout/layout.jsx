"use client"
import { Footer, Navbar } from '@/components'
import { Client, HydrationProvider } from 'react-hydration-provider'
import { QueryClient, QueryClientProvider } from 'react-query';
import {store} from '@/store'
import {Provider} from 'react-redux'
const  Layout = ({children}) =>  {
  const queryClient = new QueryClient();

  return (
    <HydrationProvider>
       <QueryClientProvider client={queryClient}>
           <Provider store={store}>
               <Client>
                   <Navbar/>
                   {children}
                   <Footer/>
               </Client>
           </Provider>

       </QueryClientProvider>
    </HydrationProvider>
  )
}
export default Layout
