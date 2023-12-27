// Environment: browser

import { hydrate } from "react-dom";

async function onRenderClient(pageContext: any) {
  const { Page, pageProps } = pageContext

  hydrate(
    <Page {...pageProps} />,
    document.getElementById("page-view"),
  );
}

export default onRenderClient