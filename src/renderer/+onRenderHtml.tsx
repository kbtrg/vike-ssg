// Environment: server

import { renderToString } from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import WrapperComponent from "../components/WapperComponent";

async function onRenderHtml(pageContext: any) {
  const { Page, pageProps } = pageContext;
  const viewHtml = renderToString(
    <WrapperComponent>
      <Page {...pageProps} />
    </WrapperComponent>
  );

  const title = "Vite SSR";

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(viewHtml)}</div>
      </body>
    </html>`;
}

export default onRenderHtml