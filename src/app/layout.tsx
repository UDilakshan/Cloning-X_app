import LeftBar from "@/components/LeftBar";
import "./globals.css";
import RightBar from "@/components/RightBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Added viewport meta tag to fix zoom issue on mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="text- leading-normal">
      <div className="container mx-auto px-4">
      <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto flex justify-between pt-5">
      
      <div className="px-1 xsm:px-4 xxl:px-8 ">
          <LeftBar />
        </div>
        <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray ">
          {children}
        </div>
        <div className="hidden lg:flex ml-4 md:ml-8 flex-1 ">
          <RightBar />
        </div>
      </div>
      </div>

      </body>
    </html>
  );
}
