import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){
              try {
                var theme = localStorage.getItem("theme");
                var preferDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
                if (theme === "dark" || (!theme && preferDark)) {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
              } catch(e) {
                console.error(e);
              }
            })();`
          }} />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
