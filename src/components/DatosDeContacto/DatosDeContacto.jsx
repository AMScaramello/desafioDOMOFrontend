import MailIcon from "../../assets/DatosDeContacto/MailIcon.png"
import WhatsappIcon from "../../assets/DatosDeContacto/WhatsappIcon.png"
import CVIcon from "../../assets/DatosDeContacto/CVIcon.png"
import LinkedinIcon from "../../assets/DatosDeContacto/LinkedinIcon.png"
import GitHubIcon from "../../assets/DatosDeContacto/GitHubIcon.png"
import PortfolioIcon from "../../assets/DatosDeContacto/PortfolioIcon.png"
import InstagramIcon from "../../assets/DatosDeContacto/InstagramIcon.png"
import "./DatosDeContacto.css"

export const DatosDeContacto = () => {
	return (
		<div className="row ddcContainer">
			<h3 className="mb-3 ddcTitle">DATOS DE CONTACTO</h3>
			<div className="col-4 ddcCols">
				<h4 className="ddcName">Agustin Scaramello</h4>
				<h5 className="ddcSubname">FRONTEND DEVELOPER</h5>
			</div>
			<div className="col-4 ddcCols">
				<div>
					<img src={MailIcon} alt="" className="me-2 ddcIcons" />
					<a href="mailto:agusscaramello@gmail.com" className="ddcMailAndTel">
						agusscaramello@gmail.com
					</a>
				</div>
				<div>
					<img src={WhatsappIcon} alt="" className="me-2 ddcIcons" />
					<a href="tel:1122381607" className="ddcMailAndTel">
						11 2238 1607
					</a>
				</div>
			</div>
			<div className="col-4 ddcCols">
				<div className="row ">
					<div className="col ddcContainerRedes">
						<a
							href="https://www.linkedin.com/in/agustin-scaramello/"
							className=""
							target="_blank"
						>
							<img src={LinkedinIcon} alt="" className="ddcIcons2" />
						</a>
					</div>
					<div className="col ddcContainerRedes">
						<a
							href="https://github.com/AMScaramello"
							className=""
							target="_blank"
						>
							<img src={GitHubIcon} alt="" className="ddcIcons2" />
						</a>
					</div>
					<div className="col ddcContainerRedes">
						<a
							href="https://agustinscaramello.vercel.app/"
							className=""
							target="_blank"
						>
							<img src={PortfolioIcon} alt="" className="ddcIcons2" />
						</a>
					</div>
					<div className="col ddcContainerRedes">
						<a
							href="https://www.instagram.com/agustinscaramello/"
							className=""
							target="_blank"
						>
							<img src={InstagramIcon} alt="" className="ddcIcons2" />
						</a>
					</div>
					<div className="col ddcContainerRedes">
						<a
							href="https://drive.google.com/file/d/1zNXbky4KXnUJ0BTL6pXC7-xUKerRo-ji/view?usp=sharing"
							className=""
							target="_blank"
						>
							<img src={CVIcon} alt="" className="ddcIcons2" />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
