import TwitterIcon from "../../assets/About/TwitterIcon.png"
import WebIcon from "../../assets/About/WebIcon.png"
import FacebookIcon from "../../assets/About/FacebookIcon.png"
import InstagramIcon from "../../assets/About/InstagramIcon.png"
import "./About.css"

export const About = () => {
	const lists = [
		{
			category: "SITEMAP",
			sections: ["Home", "Technology", "Services", "About"],
		},
		{
			category: "CASE STUDIES",
			sections: ["Swiss Airlines", "Google", "Apple", "Nike"],
		},
		{
			category: "CONTACT",
			sections: ["Jobs", "Hire us"],
		},
	]

	return (
		<div className="row aboutContainer">
			<div className="col-6">
				<a className="navbar-brand fw-bold aboutTitle" href="#">
					coomplet labs
				</a>
				<p className="mt-3 aboutPar">
					Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
					nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper
					nulla.
				</p>
				<div className="row me-5">
					<div className="col-1">
						<a className="aboutIcons" href="#">
							<img src={TwitterIcon} alt="" className="aboutIcons" />
						</a>
					</div>
					<div className="col-1">
						<a className="aboutIcons" href="#">
							<img src={WebIcon} alt="" className="aboutIcons" />
						</a>
					</div>
					<div className="col-1">
						<a className="aboutIcons" href="#">
							<img src={FacebookIcon} alt="" className="aboutIcons" />
						</a>
					</div>
					<div className="col-1">
						<a className="aboutIcons" href="#">
							<img src={InstagramIcon} alt="" className="aboutIcons" />
						</a>
					</div>
				</div>
			</div>
			<div className="col-6 pt-2">
				<div className="row">
					{lists.map((list) => (
						<div className="col-4" key="">
							<h6 className="aboutCategory">{list.category}</h6>
							<nav className="nav flex-column"></nav>
							{list.sections.map((section) => (
								<a className="nav-link mt-2 aboutSection" href="#" key="">
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
