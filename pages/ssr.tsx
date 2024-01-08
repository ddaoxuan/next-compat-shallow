import { useRouter } from "next/compat/router";

export default function SSRPage({ a }: { a: number }) {
  const router = useRouter();

  return (
    <main>
      <h1>SSR Page - {a}</h1>

      <button
        onClick={() =>
          router?.push(
            {
              pathname: "/",
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
        go home
      </button>
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
        go another
      </button>
    </main>
  );
}

export const getServerSidePRosp = () => {
  console.log("gssp running");
  return {
    props: {
      a: 10,
    },
  };
};
