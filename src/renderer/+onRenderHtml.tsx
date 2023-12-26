// Environment: server

import { renderToString } from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import Wrapper from "../components/Wapper";

async function onRenderHtml(pageContext: any) {
  const { Page, data } = pageContext;
  const viewHtml = renderToString(
    <Wrapper>
      <Page {...data} />
    </Wrapper>
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