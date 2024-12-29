import { Analytics } from "@vercel/analytics/react";

function MyApp1({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

//export default MyApp1;

import { SpeedInsights } from "@vercel/speed-insights/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp1;
MyApp;
