import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
    return (
    <main className="experience">
        <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Jan 2022 - Apr 2022"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                KodeGo Full Stack Web Development Bootcamp
                </h3>

                <h4 className="vertical-timeline-element-subtitle">
                
                </h4>

                <p>With KodeGo, you can be well-equipped through extensive hands-on experience, peer-programming, and by building real-world projects. For our Front-End Web Development bootcamp, you will learn all the basic technical skills needed to become a front-end developer, as well as soft skills like critical thinking, problem-solving and current industry trends!</p>
                <br />

                <a href="https://drive.google.com/file/d/1u0fylgL2l4y3r11om6WR2VkrRpsQthfj/view?usp=sharing">View Curriculum</a>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Dec 2018 - Feb 2020"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                Sales Assistant
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                SM North Edsa - Quezon City
                </h4>
                <p>Helped locate products for customers, place orders and holds, process transactions and keep the sales floor organized and well-stocked.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="July 2017 - Mar 2018"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                Shift Manager
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                Cubao, Quezon City
                </h4>
                <p>Responsible for overseeing business operations, delegating tasks to team members and resolving problems that occur on their shift. Their duties include stocking inventory, balancing the cash register and coordinating employee responsibilities to improve efficiency or customer service.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="July 2016 - Jan 2017"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                Management Trainee
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                SM Marikina, Marikina
                </h4>
                <p>Responsible for overseeing business operations, delegating tasks to team members and resolving problems that occur on their shift. Their duties include stocking inventory, balancing the cash register and coordinating employee responsibilities to improve efficiency or customer service.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Jan 2014 - June 2014"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                Service Crew
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                SM North Edsa, Quezon City
                </h4>
                <p>Provide information about facilities, entertainment options, and rules and regulations. Record details of attendance, sales, receipts, reservations, and repair activities. Monitor activities to ensure adherence to rules and safety procedures, and arrange for the removal of unruly patrons.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="July 2013 - Dec 2013"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                Ride Operator
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                SM Fairview - Quezon City
                </h4>
                <p>Responsible for supervising, monitoring, and attending to park rides, including boarding and securing passengers, starting rides, and ensuring passengers exit safely.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="June 2011 - May 2013"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                Service Crew - Jollibee Foods Corp.
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                Cubao, Quezon City
                </h4>
                <p>
                Greeting customers, preparing food, placing food items on trays, adding napkins and condiments, recommending products, promoting special deals, collecting payments, and keeping the work area clean and organized.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2011 - 2016"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                Systems Plus Computer College - Cubao, Quezon City
                </h3>
                <p> Bachelor of Science in Business Administration </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2004- 2008"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                New Era High School
                </h3>

                <h4 className="vertical-timeline-element-subtitle">
                Quezon City
                </h4>

                
            </VerticalTimelineElement>
        </VerticalTimeline>
    </main>
    );
}

export default Experience;