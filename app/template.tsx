export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <section style={{ border: "1px solid blue", backgroundColor: "#0000FF20" }}>
      <h1>
        Template{" "}
        <small style={{ fontSize: "small" }}>- 템플릿 레이아웃 확인용</small>
      </h1>
      <div>{children}</div>

      <footer style={{ padding: 30, textAlign: 'center' }}>
        <h1>Template: Footer</h1>
      </footer>
    </section>
  );
}
