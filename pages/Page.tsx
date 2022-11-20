import styled from "@emotion/styled";
import Image from "next/image";

export default function Page() {
  return (
    <PageWrapper>
      <h1>Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        magnam blanditiis veniam facilis quisquam corporis nostrum temporibus,
        corrupti ratione possimus neque sed id. Deleniti, saepe. Laudantium nisi
        dolores labore aperiam!
      </p>

      <div>
        <Image
          src={"/giphy.gif"}
          alt=".."
          width={400}
          height={400}
          style={{ maxWidth: 400 }}
        />
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 1rem;

  img {
    display: block;
    margin: auto;
    max-width: 100%;
    width: 100%;
    height: auto;
  }
`;
