import dynamic from "next/dynamic";
import { Suspense } from "react";

import Nav from "./Nav";

const Content = dynamic(() => import("./Content"), {
  suspense: true,
});

export interface LayoutProps {
  chidren: React.ReactNode;
}

export default function Layout(props: any, {}: LayoutProps) {
  const { children } = props;
  return (
    <>
      <Suspense fallback={`Loading...`}>
        <Nav />
        <Content>{children}</Content>
      </Suspense>
    </>
  );
}
