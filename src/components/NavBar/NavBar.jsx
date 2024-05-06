import hireUsIcon from "../../assets/NavBar/hireUsIcon.png"
import "./NavBar.css"

export const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg pt-5 text-center row navBarComponent">
			<div className="container-fluid col-5">
				<a className="navbar-brand fw-bold" href="#">
					coomplet labs
				</a>
			</div>
			<ul className="navbar-nav col-7 justify-content-end">
				<li className="nav-item mx-2">
					<a
						className="nav-link navBarSection "
						aria-current="page"
						href="#Home"
					>
						Home
					</a>
				</li>
				<li className="nav-item mx-2">
					<a className="nav-link navBarSection" href="#Services">
						Services
					</a>
				</li>
				<li className="nav-item mx-2">
					<a className="nav-link navBarSection" href="#Technology">
						Technology
					</a>
				</li>
				<li className="nav-item mx-2">
					<a className="nav-link navBarSection" href="#CaseStudies">
						Case studies
					</a>
				</li>
				<li className="nav-item mx-2">
					<a className="nav-link navBarSection" href="#About">
						About
					</a>
				</li>
				<li className="nav-item ml-2">
					<a className="nav-link navBarSection hireUsColor" href="#">
						<img src={hireUsIcon} alt="" className="me-2 hireUsIcon" />
						Hire us
					</a>
				</li>
			</ul>
		</nav>
	)
}
