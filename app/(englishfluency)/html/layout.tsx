import HtmlNavbar from "../components/HtmlNavbar";


export default function HtmlLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      lang="en"
      className={` h-full antialiased`}
    >
      <HtmlNavbar/>
      <div className="min-h-full flex flex-col">{children}</div>
    </div>
  );
}
