export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav style={{ width: 300 }}>
        <ul>
          <li>대시보드의 메뉴1</li>
          <li>대시보드의 메뉴2</li>
          <li>대시보드의 메뉴3</li>
        </ul>
      </nav>

      {children}
    </section>
  );
}