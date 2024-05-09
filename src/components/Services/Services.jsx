import { arrServices } from "../../utils/Services"
import "./Services.css"

export const Services = () => {
	return (
		<div className="py-5 servicesContainer" id="Services">
			<div className="text-center pb-4">
				<h3 className="servicesTitle pb-2">Our Services</h3>
				<p className="servicesPar">
					We feel very strong about our skills when it comes to planning,
					designing and coding applications. Here is what we love to do!
				</p>
			</div>
			<div className="pt-3">
				<div className="row justify-content-md-center servicesContainerCards">
					{arrServices.map((service) => (
						<div className="col-4 px-4 servicesContainerCard" key="">
							<div className="card text-center align-items-center pt-5 pb-4 px-4">
								<div className="servicesContainerImg">
									<img src={service.icon} alt="..." className="sevicesImg" />
								</div>
								<div className="card-body">
									<h5 className="card-title pb-2 servicesCardTitle">
										{service.title}
									</h5>
									<p className="card-text mb-4 servicesCardPar">
										{service.description}
									</p>
									<button
										type="button"
										className="btn btn-outline-primary fw-bolder homeButton1"
									>
										{service.buttom}
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
