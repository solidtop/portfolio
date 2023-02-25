import APIAdapter from "./api.js";
import ProjectList from "./projects.js";
import SkillList from "./skills.js";
import Timeline from "./timeline.js";
import Filter from "./filters.js";

document.querySelector('.button-open').addEventListener('click', () => {
    document.querySelector('.main-nav').classList.add('open');   
});
document.querySelector('.button-close').addEventListener('click', () => {
    document.querySelector('.main-nav').classList.remove('open');   
});

const navLinks = document.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.main-nav').classList.remove('open');   
    });
});

async function run() {
    const api = new APIAdapter();
    const data = await api.loadData();

    const projectList = new ProjectList();
    projectList.render(data.projects);
    new Filter(data.projects).render(projectList);

    new SkillList(data.skills, data.additionalSkills).render();
    new Timeline(data.timeline).render();
}

run();


