interface ContentProps {
  chidren: React.ReactNode;
}

export default function Content(props: any, {}: ContentProps) {
  const { children } = props;
  return <main>{children}</main>;
}
