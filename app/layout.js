import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Tính thuế thu nhập cá nhân - LifeOff",
  openGraph: {
    title: "Tính thuế thu nhập cá nhân - LifeOff",
    description:
      "Tính thuế thu nhập cá nhân online 2023, Tính thuế TNCN Online 2023, Thuế thu nhập tiền lương, Thuế thu nhập tiền công, Tính Online thuế thu nhập,Tiện ích tính thuế thu nhập, Thhuế thu nhập cá nhân công thức mới",
    images: [
      {
        url: "https://i.ibb.co/XYWjTb6/preview.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tính thuế thu nhập cá nhân - LifeOff",
    description:
      "Tính thuế thu nhập cá nhân online 2023, Tính thuế TNCN Online 2023, Thuế thu nhập tiền lương, Thuế thu nhập tiền công, Tính Online thuế thu nhập,Tiện ích tính thuế thu nhập, Thhuế thu nhập cá nhân công thức mới",
    images: ["https://i.ibb.co/XYWjTb6/preview.png"],
    creator: "@techlensglobal",
  },
  metadataBase: new URL("https://demo.useliftoff.com"),
  themeColor: "#FFF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
