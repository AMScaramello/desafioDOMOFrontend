import { icons } from "../../utils/Technology"
import "./Technology.css"

export const Technology = () => {
	return (
		<div className="py-5 technologyContainer" id="Technology">
			<div className="row align-items-center technologySubcontainer">
				<div className="col-9 technologyContainerText">
					<h3 className="technologyTitle pb-3">
						We use cutting edge technology
					</h3>
					<p className="technologyPar">
						Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean
						lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus
						et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae
						elit libero, a pharetra augue. Vestibulum id ligula porta felis
						euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum
						faucibus dolor auctor
					</p>
				</div>
				<div className="col">
					<div className="row row-cols-2">
						{icons.map((icon) => (
							<div key="" className="col text-center pb-5">
								<img src={icon} alt="" className="technologyImg" />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
