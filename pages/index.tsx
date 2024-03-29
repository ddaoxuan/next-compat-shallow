import { useRouter } from "next/compat/router";

export default function Home({ a }: { a: number }) {
  const router = useRouter();

  return (
    <main>
      <h1>Home - {a}</h1>
      <button
        onClick={() =>
          router?.push(
            {
              pathname: "/another",
              query: {
                a: 1,
              },
            },
            undefined,
            {
              shallow: true,
            },
          )
        }
      >
        go to another page
      </button>

      <button
        onClick={() =>
          router?.push(
            {
              pathname: "/ssr",
              query: {
                a: 1,
              },
            },
            undefined,
            {
              shallow: true,
            },
          )
        }
      >
        go to ssr
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
    revalidate: 30,
  };
};
