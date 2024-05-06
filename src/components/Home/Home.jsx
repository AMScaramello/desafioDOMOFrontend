import homeBg from "../../assets/homeBg.jpg"
import "./Home.css"

export const Home = () => {
	return (
		<div className="row align-items-center homeContainer">
			<div className="col-6 align-self-center">
				<h1 className="fw-bold mb-3 homeTitle">
					We build beautiful and <br /> reliable web solutions
				</h1>
				<p className="homePar mb-5">
					We strongly believe that communication, trust and transparency <br />{" "}
					are the essential elements of sucessful business relationship. <br />{" "}
					Ready for the journey?
				</p>
				<div>
					<button
						type="button"
						className="btn btn-outline-primary fw-bolder homeButton1"
					>
						Learn more
					</button>
					<button
						type="button"
						className="btn btn-primary fw-bolder ms-3 homeButton2"
					>
						Our projects →
					</button>
				</div>
			</div>
			<div className="col-6 homeImg">
				<img src={homeBg} className="img-fluid" alt="" />
			</div>
		</div>
	)
}
