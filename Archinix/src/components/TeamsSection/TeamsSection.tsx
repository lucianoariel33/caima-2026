import SectionHeading from "@components/SectionHeading/SectionHeading";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Mark Wood",
    role: "Chief Executive",
    image: "assets/img/team/1.jpg",
  },
  {
    id: 2,
    name: "Natasha Kareem",
    role: "Project Manager",
    image: "assets/img/team/2.jpg",
  },
  {
    id: 3,
    name: "Decan Rice",
    role: "Architect",
    image: "assets/img/team/3.jpg",
  },
  {
    id: 4,
    name: "Patric Evra",
    role: "Architect",
    image: "assets/img/team/4.jpg",
  },
  {
    id: 5,
    name: "Sophie White",
    role: "Civil Engineer",
    image: "assets/img/team/5.jpg",
  },
  {
    id: 6,
    name: "Phil Jhones",
    role: "Architect",
    image: "assets/img/team/6.jpg",
  },
];

export default function TeamsSection() {
  return (
    <div id="team-2" className="team-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <SectionHeading subtitle="The Team" title="Meet Our Professional" />
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="row">
              {teamMembers.slice(0, 2).map((member) => (
                <div
                  key={member.id}
                  className="col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInUp"
                  data-wow-delay={`${0.2 * (member.id % 2 === 0 ? 2 : 1)}s`}
                >
                  <div className="single-team-item">
                    <div className="team-img">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="team-info">
                      <h5>{member.name}</h5>
                      <hr />
                      <p>[{member.role}]</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          {teamMembers.slice(2).map((member, index) => (
            <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay={`${0.2 * (index + 1)}s`}>
              <div className="single-team-item">
                <div className="team-img">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h5>{member.name}</h5>
                  <hr />
                  <p>[{member.role}]</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
