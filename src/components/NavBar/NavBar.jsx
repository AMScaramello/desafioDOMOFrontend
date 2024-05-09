import hireUsIcon from "../../assets/NavBar/hireUsIcon.png"
import "./NavBar.css"

export const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg pt-5 navBarComponent">
			<div className="container-fluid">
				<a className="navbar-brand fw-bold" href="#">
					coomplet labs
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNav"
				>
					<ul className="navbar-nav">
						<li className="nav-item mx-2">
							<a className="nav-link navBarSection" href="#Home">
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
						<li className="nav-item mx-2">
							<a
								className="nav-link navBarSection hireUsColor"
								aria-current="page"
								href="#"
							>
								<img src={hireUsIcon} alt="" className="me-2 hireUsIcon" />
								Hire us
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
