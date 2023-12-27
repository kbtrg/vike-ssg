// Environment: server

import { renderToString } from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vike/server";

async function onRenderHtml(pageContext: any) {
  const { Page, pageProps } = pageContext;
  const viewHtml = dangerouslySkipEscape(
    renderToString(
      <Page {...pageProps} />
    )
  )

  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="page-view">${viewHtml}</div>
      </body>
    </html>`;
}

export default onRenderHtml