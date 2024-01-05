import { useRouter } from "next/compat/router";

export default function Another({ a }: { a: number }) {
  const router = useRouter();

  return (
    <main>
      <h1>Another - {a}</h1>
      <button
        className="bg-gray-800 rounded my-4 p-4"
        onClick={() => router?.push("/", undefined, { shallow: true })}
      >
        go home page
      </button>
    </main>
  );
}

export const getStaticProps = () => {
  console.log("gsp running");
  return {
    props: {
      a: 20,
    },
  };
};
