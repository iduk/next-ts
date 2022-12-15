"use client";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="card">
      <div className="content">
        <h4>Dashboard Page</h4>
        <div className="description">
          <p>
            Facere voluptate cupiditate vitae similique! Magnam, id. Eius
            necessitatibus praesentium maiores et itaque amet possimus
            repellendus dignissimos totam sed commodi, quidem neque.
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur unde, sed animi rerum vero optio ut quos doloremque
            dolorem molestiae tempora dolore adipisci reiciendis ex sit quae,
            aspernatur aperiam! Id.
          </p>
        </div>
      </div>
      <button onClick={() => router.back()}>Go Back!</button>
    </div>
  );
}
