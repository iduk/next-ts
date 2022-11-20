import Image from "next/image";
import PixelDuk from "public/pixelduk.svg";
import styles from "styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <Image src={PixelDuk} width={100} height={100} alt="iduk" />
        </div>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">ASSH</a>
        </h1>

        <code className={styles.code}>pages/index.tsx</code>
        <div className={styles.description}>
          <p>
            모든 국민은 직업선택의 자유를 가진다. 국회는 국민의
            보통·평등·직접·비밀선거에 의하여 선출된 국회의원으로 구성한다.
            국가는 대외무역을 육성하며, 이를 규제·조정할 수 있다. 모든 국민은
            인간다운 생활을 할 권리를 가진다.
          </p>
          <ol className={styles.list}>
            <h5>Plugins +</h5>
            <li>@next/font</li>
            <li>@next/image (여전히불편..)</li>
            <li>@emotion/styled</li>
            <li>Sass</li>
          </ol>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Powered by</span>
          <span className={styles.logo}>
            <Image src="/pixelduk.svg" alt="Logo" width={24} height={24} />
          </span>
        </a>
      </footer>
    </div>
  );
}
