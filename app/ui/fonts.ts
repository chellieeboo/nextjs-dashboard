// from google fonts
import { Inter, Lusitana } from 'next/font/google';
// export to use it to otr fiels
//susbsets the latin char (a-z, num)
export const inter = Inter({ subsets: ['latin']});

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],

});