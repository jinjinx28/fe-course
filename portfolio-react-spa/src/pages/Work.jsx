import React from 'react';
import {Title, SubTitle} from '../commons/Titles.jsx';
import Categories from './Categories.jsx';
import Projects from './Projects.jsx';
import { useOutletContext } from 'react-router-dom';

export default function Work() {
    const data = useOutletContext();
    return (
        <div>
            <section id="work" className="section container">
                <Title title = "My Work"/>
                <SubTitle subTitle = "Projects"/>
                <Categories categories={data?.work?.categories}/>
                <Projects projects={data?.work?.projects}/>
            
        </section>
        </div>
    );
}

