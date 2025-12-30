import { GlobalStyle } from "./styles/globalStyle"
import { Hero } from "./components/hero"
import { Header } from "./components/header"
	
function App() {
	return (
    <>
      <GlobalStyle />
	    <Hero />
      <Header />
    </>
  )
}

export default App
