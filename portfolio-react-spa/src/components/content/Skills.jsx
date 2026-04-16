import { Title, SubTitle, TitleDescription } from "../commons/Titles.jsx"
import SkillsContent from "./SkillsContent.jsx";
import { useOutletContext } from "react-router-dom";

export default function Skills() {
    const data = useOutletContext();
    return (
        <section id="skills" className="section container">
            <Title title="My Skills" />
            <SubTitle subTitle="Skills & Attributes" />
            <TitleDescription titleDescription={data?.skills?.description} />
            <SkillsContent skills={data?.skills}/>
        </section>
    )
}