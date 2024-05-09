import { lists, icons } from "../../utils/About"
import "./About.css"

export const About = () => {
	return (
		<div className="row mb-2 aboutContainer" id="About">
			<div className="col-6 aboutCols">
				<a className="navbar-brand fw-bold aboutTitle" href="#">
					coomplet labs
				</a>
				<p className="mt-3 aboutPar">
					Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
					nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper
					nulla.
				</p>
				<div className="row me-5">
					{icons.map((icon) => (
						<div className="col-1" key="">
							<a className="aboutIcons" href="#">
								<img src={icon} alt="" className="aboutIcons" />
							</a>
						</div>
					))}
				</div>
			</div>
			<div className="col-6 pt-2 aboutCols">
				<div className="row">
					{lists.map((list) => (
						<div className="col-4" key="">
							<h6 className="aboutCategory">{list.category}</h6>
							<nav className="nav flex-column"></nav>
							{list.sections.map((section) => (
								<a
									className="nav-link mt-2 aboutSection"
									href={`#${section}`}
									key=""
								>
									{section}
								</a>
							))}
							<nav />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
