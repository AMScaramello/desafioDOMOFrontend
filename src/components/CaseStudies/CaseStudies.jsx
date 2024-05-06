import TnwIcon from "../../assets/CaseStudies/TnwIcon.png"
import GoogleIcon from "../../assets/CaseStudies/GoogleIcon.png"
import NikeIcon from "../../assets/CaseStudies/NikeIcon.png"
import AirbnbIcon from "../../assets/CaseStudies/AirbnbIcon.png"
import ItNewsIcon from "../../assets/CaseStudies/ItNewsIcons.png"

import CelImg from "../../assets/CaseStudies/CelImg.png"

import "./CaseStudies.css"

export const CaseStudies = () => {
	const icons = [TnwIcon, GoogleIcon, NikeIcon, AirbnbIcon, ItNewsIcon]

	return (
		<div className="caseStudiesContainer">
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
				<div className="col me-5">
					<div className="row px-3 py-5 caseStudiesCard">
						<div className="col-7">
							<div className="card-body">
								<h5 className="card-title mb-3 caseStudiesTitleCard">
									Get in touch with us
								</h5>
								<p className="card-text mb-4 me-3 caseStudiesParCard">
									Maecenas sed diam eget risus varius blandit sit amet non
									magna.
								</p>
								<button
									type="button"
									className="btn btn-outline-primary fw-bolder caseStudiesButtonCard"
								>
									Hire us
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="row px-4 py-5 caseStudiesCard">
						<div className="col-7">
							<div className="card-body">
								<h5 className="card-title mb-3 caseStudiesTitleCard">
									Our Projects
								</h5>
								<p className="card-text mb-4 me-3 caseStudiesParCard">
									Maecenas sed diam eget risus varius blandit sit amet non
									magna.
								</p>
								<button
									type="button"
									className="btn btn-outline-primary fw-bolder caseStudiesButtonCard"
								>
									See Projects
								</button>
							</div>
						</div>
						<div className="col-5 caseStudiesCardContainerImg">
							<img src={CelImg} alt="" className=" caseStudiesCardImg" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
