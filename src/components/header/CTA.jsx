import "../../assets/cv.pdf";
function CTA() {
  return (
    <div className="cta">
      <a href="cv.pdf" download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
