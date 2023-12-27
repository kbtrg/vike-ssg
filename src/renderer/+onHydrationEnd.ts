// Environment: browser

// The onHydrationEnd() hook is called after the onRenderClient() hook finishes rendering the
// first page the user navigates to. (The onHydrationEnd() hook isn't called upon subsequent
// page navigation.)
async function onHydrationEnd(pageContext: any) {
  console.log('The page is now interactive')
}

export default onHydrationEnd