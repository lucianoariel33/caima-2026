import Counter from "@components/Counter/Counter";
import Gallery from "./Gallery";
import InfoSidebar from "./InfoSidebar";
import Overview from "./Overview";
import TextBlock from "./TextBlock";

interface ParagraphSection {
  title?: string;
  paragraphs: string[];
}

interface InfoItem {
  label: string;
  value: string;
}

interface ProjectDetailsData {
  overview: ParagraphSection;
  info: InfoItem[];
  gallery: string[];
  concept: ParagraphSection;
  conclusion: ParagraphSection;
}

const data: ProjectDetailsData = {
  overview: {
    title: "Project Overview",
    paragraphs: [
      "Lorem ipsum dolors sit amet, cons the ctetu isci elit sed do eiusmod eterorew llum ididuntt ut ores et oremis ipsum dolors sit amet, cons ectetur adipisci elit, sed do eiusmod tempor incp tate velit ese. Ultrices vitae nus auctor eu augue ut lectus arcu. Eu non diam phasellus vest ibulum lorem sed risus ultricies. Sed vulputate mi sit amet mauris commodo quis. Vulp utate odio ut enim blandit volutpat maecenas volutpat blandit. Penatibus et magnis dis parturient montes. Aliquam ut porttitor leo a diam. Lobortis scelerisque fermentum dui.",
      "Aliquam ut porttitor leo a diam. Lobortis scelerisque fermentum dui faucibus in ornare neque aliquam vestibulum. Sed enim ut sem viverra aliquet eget sit amet. Enim blandit volutpat maecenas volutpat blandit aliquam. Sed enim ut sem viverra aliquet eget sit amet. Enim blandit volutpat maecenas volutpat blandit aliquam.",
    ],
  },

  info: [
    { label: "Year", value: "2023" },
    { label: "Client", value: "Private Residence" },
    { label: "Architect", value: "Mouroushi Hikoma" },
    { label: "Location", value: "Bali, Indonesia" },
  ],

  gallery: [
    "/assets/img/project/project-details-2.jpg",
    "/assets/img/project/project-details-3.jpg",
  ],

  concept: {
    title: "Design Concept",
    paragraphs: [
      "Phasellus scelerisque sapien vitae tellus sodales dapibus. Fusce et ultricies arcu, non viverra turpis. Aliquam dignissim lacus non turpis posuere fringilla. Cras volutpat, elit vel bibendum convallis, sem justo fringilla ipsum, et aliquet elit odio non purus. Vestibulum fringilla erat ac laoreet convallis. Suspendisse potenti. Sed ligula nisi, iaculis vitae rhoncus nec, scelerisque non felis.",
      "Quisque ac scelerisque velit. Suspendisse at libero venenatis, lacinia eros quis, fringilla justo. Suspendisse potenti. Aenean eget ipsum dapibus, tempus odio id, sollicitudin risus. Phasellus volutpat mi vel sapien tincidunt gravida. Sed vel egestas ipsum. Proin eleifend libero facilisis libero malesuada, vitae venenatis mi fringilla.",
    ],
  },

  conclusion: {
    title: "Conclusion",
    paragraphs: [
      "Maecenas elementum sem eu purus pulvinar, eget luctus metus fringilla. Donec gravida mollis arcu, ut placerat ex. Nunc purus odio, porta ac imperdiet sit amet, feugiat nec mauris. Ut malesuada orci mattis tempor ultrices. Phasellus pulvinar arcu leo, id finibus diam bibendum ac. Suspendisse potenti. Fusce vestibulum vel leo et volutpat. Etiam vel porta nulla. Morbi arcu urna, consequat id suscipit non, posuere nec nisi. Proin feugiat rutrum dignissim.",
    ],
  },
};

export default function ProjectDetailsWrapper() {
  const project: ProjectDetailsData = data;

  return (
    <div className="single-project-section pt-60 pb-60">
      <div className="container">
        <div className="row">
          <div className="project-details-wrapper">
            <div className="row">
              <div className="col-xl-9">
                <Overview section={project.overview} />
              </div>

              <div className="col-xl-3">
                <InfoSidebar info={project.info} />
              </div>
            </div>

            <Gallery images={project.gallery} />

            <Counter />

            <TextBlock section={project.concept} />

            <TextBlock section={project.conclusion} />
          </div>
        </div>
      </div>
    </div>
  );
}
