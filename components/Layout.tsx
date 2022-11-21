import { Suspense } from "react";
import Nav from "./Nav";

export interface LayoutProps {
  chidren: React.ReactNode;
}

export default function Layout(props: any, {}: LayoutProps) {
  const { children } = props;
  return (
    <>
      <Nav />
      <Suspense fallback={`Loading...`}>
        <main>{children}</main>
      </Suspense>
    </>
  );
}
