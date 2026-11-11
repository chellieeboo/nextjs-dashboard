import "@/app/ui/global.css"; /*@ shortcut to root folder, no need ../../ and apply styles to whole app*/
import { inter } from "@/app/ui/fonts";
export default function RootLayout({
  /*create component function to return UI*/
  children, //currently view by user
}: {
  children: React.ReactNode; //TypeScript type
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
