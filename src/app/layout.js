import { Inter, Roboto, Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--montserrat', weight: ['100', '200', '300'] })
const roboto = Roboto({ subsets: ['latin'], variable: '--roboto',  weight: ['100', '300', '400'] })
const inter = Inter({ subsets: ['latin'],  })

import { register } from 'swiper/element/bundle'

register(); 
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Provider from './Provider'

export const metadata = {
  title: 'Smart steps',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html className={`${inter.className} ${roboto.variable} ${montserrat.variable}`} lang="pt-br">
       
      <body >
        
        <Provider> 
       
          {children}
        
        </Provider>
      </body>
    </html>
  )
}
