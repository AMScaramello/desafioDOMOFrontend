import businessIcon from "../../assets/Services/businessIcon.png"
import webIcon from "../../assets/Services/webIcon.png"
import UXIxon from "../../assets/Services/UXIcon.png"
import "./Services.css"

export const Services = () => {
	return (
		<div className="py-5 servicesContainer" id="Services">
			<div className="text-center pb-4">
				<h3 className="servicesTitle pb-2">Our Services</h3>
				<p className="servicesPar">
					We feel very strong about our skills when it comes to planning,
					designing
					<br />
					and coding applications. Here is what we love to do!
				</p>
			</div>
			<div className="pt-3">
				<div className="row justify-content-md-center">
					<div className="col col-lg-3">
						<div className="card text-center align-items-center pt-5 pb-4 px-4">
							<div className="servicesContainerImg">
								<img src={businessIcon} alt="..." className="sevicesImg" />
							</div>
							<div className="card-body">
								<h5 className="card-title pb-2 servicesCardTitle">
									Business & Product Concept
								</h5>
								<p className="card-text servicesCardPar">
									Analyse business and product concepts at <br /> Start-up
									Workshops or Ongoing Projects <br /> Audits and prepare a
									viable and sensible <br /> product roadmap for achieving a
									perfect <br /> market fit.
								</p>
								<button
									type="button"
									className="btn btn-outline-primary fw-bolder homeButton1"
								>
									Learn more
								</button>
							</div>
						</div>
					</div>
					<div className="col col-lg-3">
						<div className="card text-center align-items-center pt-5 pb-4 px-4">
							<div className="servicesContainerImg">
								<img src={webIcon} alt="..." className="sevicesImg" />
							</div>
							<div className="card-body">
								<h5 className="card-title pb-2 servicesCardTitle">
									Web & Mobile Development
								</h5>
								<p className="card-text servicesCardPar">
									Plan, develop and test high-quality web- <br /> applications
									using AngularJS, NodeJS,
									<br /> JavaScript, Typescript, HTML5 and SASS/
									<br />
									CSS3 frameworks and native mobile <br /> languages.
								</p>
								<button
									type="button"
									className="btn btn-outline-primary fw-bolder homeButton1"
								>
									Learn more
								</button>
							</div>
						</div>
					</div>
					<div className="col col-lg-3">
						<div className="card text-center align-items-center pt-5 pb-4 px-4">
							<div className="servicesContainerImg">
								<img src={UXIxon} alt="..." className="sevicesImg" />
							</div>
							<div className="card-body">
								<h5 className="card-title pb-2 servicesCardTitle">
									UX & UI Design
								</h5>
								<p className="card-text servicesCardPar">
									Sketch information architecture and <br /> simple mock-ups,
									convert them into <br /> clickable prototypes and finish with
									usable <br /> interface designs to deliver a good and <br />
									reliable user experience.
								</p>
								<button
									type="button"
									className="btn btn-outline-primary fw-bolder homeButton1"
								>
									Learn more
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
