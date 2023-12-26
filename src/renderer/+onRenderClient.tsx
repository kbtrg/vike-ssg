// Environment: browser

import { hydrate } from "react-dom";
import Wrapper from "../components/Wapper";

async function onRenderClient(pageContext: any) {
  const { Page, data } = pageContext

  hydrate(
    <Wrapper>
      <Page {...data} />
    </Wrapper>,
    document.getElementById("page-view"),
  );
}

export default onRenderClient