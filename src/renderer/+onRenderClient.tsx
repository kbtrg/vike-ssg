// Environment: browser

import { hydrate } from "react-dom";
import WrapperComponent from "../components/WapperComponent";

async function onRenderClient(pageContext: any) {
  const { Page, pageProps } = pageContext

  hydrate(
    <WrapperComponent>
      <Page {...pageProps} />
    </WrapperComponent>,
    document.getElementById("page-view"),
  );
}

export default onRenderClient