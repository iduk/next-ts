import { Suspense } from "react";
import Loading from "./loading";
import SideNav from "./sideNav";


export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
      <SideNav />
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </section>
  );
}