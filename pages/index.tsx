import { useRouter } from "next/compat/router";

export default function Home({ a }: { a: number }) {
  const router = useRouter();

  return (
    <main>
      <h1>Home - {a}</h1>
      <button
        className="bg-gray-800 rounded my-4 p-4"
        onClick={() => router?.push("/test", undefined, { shallow: true })}
      >
        go test page
      </button>
    </main>
  );
}

export const getStaticProps = () => {
  console.log("gsp running");
  return {
    props: {
      a: 10,
    },
  };
};
