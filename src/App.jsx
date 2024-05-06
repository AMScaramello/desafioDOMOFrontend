import { About } from "./components/About/About"
import { CaseStudies } from "./components/CaseStudies/CaseStudies"
import { Home } from "./components/Home/Home"
import { NavBar } from "./components/NavBar/NavBar"
import { Services } from "./components/Services/Services"
import { Technology } from "./components/Technology/Technolgy"

function App() {
	return (
		<>
			<NavBar />
			<Home />
			<Services />
			<Technology />
			<CaseStudies />
			<About />
		</>
	)
}

export default App
