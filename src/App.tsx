import { GlobalStyle } from "./styles/globalStyle"
import { Hero } from "./components/hero"
import { Header } from "./components/header"
import { Gifts } from "./components/giftsSession"
	
function App() {
	return (
    <>
      <GlobalStyle />
	    <Hero />
      <Header />
      <Gifts />
    </>
  )
}

export default App
