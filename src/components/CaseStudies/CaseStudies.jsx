import { icons, cards } from "../../utils/CaseStudies"
import "./CaseStudies.css"

export const CaseStudies = () => {
	return (
		<div className="caseStudiesContainer" id="CaseStudies">
			<div className="text-center pb-5">
				<h5 className="caseStudiesTitle mb-3">CLIENTS WE WORKED WITH</h5>
				<div className="col pt-5">
					<div className="row justify-content-between">
						{icons.map((icon) => (
							<div key="" className="col">
								<img src={icon} alt="" className="caseStudiesImg" />
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="row justify-content-between caseStudiesContainesCards">
				{cards.map((card) => (
					<div className="col mx-3" key="">
						<div className="row px-4 py-5 caseStudiesCard">
							<div className="col-7">
								<div className="card-body">
									<h5 className="card-title mb-3 caseStudiesTitleCard">
										{card.title}
									</h5>
									<p className="card-text mb-4 me-3 caseStudiesParCard">
										{card.description}
									</p>
									<button
										type="button"
										className="btn btn-outline-primary fw-bolder caseStudiesButtonCard"
									>
										{card.buttom}
									</button>
								</div>
							</div>
							<div className="col-5 caseStudiesCardContainerImg">
								<img src={card.image} alt="" className=" caseStudiesCardImg" />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
