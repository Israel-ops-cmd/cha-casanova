import { GlobalStyle } from "./styles/globalStyle"
import { Hero } from "./components/hero"
import { Header } from "./components/header"
import { Gifts } from "./components/giftsSession"
import { Contacts } from "./components/contacts"
	
function App() {
	return (
    <>
      <GlobalStyle />
	    <Hero />
      <Header />
      <Gifts />
      <Contacts />
    </>
  )
}

export default App
