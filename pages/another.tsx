import { useRouter } from "next/compat/router";

export default function Another({ a }: { a: number }) {
  const router = useRouter();

  return (
    <main>
      <h1>Another - {a}</h1>
      <button onClick={() => router?.push("/", undefined, { shallow: true })}>
        go home page
      </button>

      <button
        onClick={() => router?.push("/ssr", undefined, { shallow: true })}
      >
        go ssr page
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
    revalidate: 30,
  };
};
