import "./exprience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
function Exprience() {
  return (
    <section id="exprience">
      <h5>What Skills I Have</h5>
      <h2>My Exprience</h2>
      <div className="container exprience__container">
        <div className="exprience__frontend">
          <h3>FrontEnd Developer</h3>
          <div className="exprience__content">
            <div className="exprience__details">
              <BsFillPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </div>
            <div className="exprience__details">
              <BsFillPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </div>
            <div className="exprience__details">
              <BsFillPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </div>
            <div className="exprience__details">
              <BsFillPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </div>
            <div className="exprience__details">
              <BsFillPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </div>
            <div className="exprience__details">
              <BsFillPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </div>
          </div>
        </div>
        {/* End Of FrontEnd */}
        <div className="exprience__backend">
          <h3>BackEnd Development</h3>
          <div className="exprience__content">
            <div className="exprience__details">
              <BsFillPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </div>
            <div className="exprience__details">
              <BsFillPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </div>
            <div className="exprience__details">
              <BsFillPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </div>
            <div className="exprience__details">
              <BsFillPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </div>
            <div className="exprience__details">
              <BsFillPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Basic</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Exprience;
