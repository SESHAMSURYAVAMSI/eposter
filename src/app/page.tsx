import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <section className="text-center mt-10">
      <h2 className="text-3xl font-bold">Welcome to ePoster.in</h2>
      <p className="mt-4 text-gray-600">
        This is your homepage content. Add banners, posters, etc. here.
      </p>
    </section>
  );
}
