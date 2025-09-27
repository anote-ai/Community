
export default function AIDayVideo(props) {
  const h3Style = {
    fontSize: '1.1rem', // Adjust the font size as needed
    fontWeight: 'bold',
    marginBottom: '12px',
    textDecoration: 'underline',
    color: 'defe47', // Change the color to your preferred style
  };

  const h4Style = {
    fontSize: '1.3rem', // Adjust the font size as needed
    fontWeight: 'bold',
    marginBottom: '8px',
    color: 'white', // Change the color to your preferred style
  };

  const h6Style = {
    fontFamily: 'Helvetica Neue',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "30px",
    color: "#FFFFFF"
  }
    return (
      <div className={"LP-Sample-Projects-Project"}>
        <div className={"LP-Sample-Projects-Project-Top "}>
          <div className={"LP-Sample-Projects-Project-Video"}>
            <iframe
              src={props.videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              preload="auto"
              loading="lazy"
              className="rounded-2xl border-2 border-gray-900"
            />
          </div>
          <div
            className={
              "LP-Sample-Projects-Project-Description bg-gray-800 rounded-2xl"
            }
          >
            <h1>{props.title}</h1>
            {/* <h3 className="LP-TutorialSubheader LP-SubHeader">{props.sector}</h3>
            <h4 className="LP--TutorialSubTitle LP-SubTitle">{props.capability}</h4> */}
          {/* <h4 className="LP--TutorialSubTitle LP-SubTitle" style={h4Style}>{props.capability}</h4> */}
          <h4 className="LP--TutorialSubTitle LP-SubTitle" style={h4Style}>
            {props.capability} {props.company ? `at ${props.company}` : ""}
          </h4>

          <a href={props.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <h3 className="LP-TutorialSubheader LP-SubHeader" style={h3Style}>
              {props.sector}
            </h3>
          </a>
            <span className="LP-Text" style={h6Style}>{props.description}</span>
          </div>
        </div>
      </div>
    );
  }