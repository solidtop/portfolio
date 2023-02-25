import { SkeletonCard } from "./skeletons.js";

export default class ProjectList {
    render(projects) {
        const list = document.querySelector('.project-list');
        list.innerHTML = '';

        projects.forEach(project => {
            const card = new ProjectCard(project).render();
            const skeleton = new SkeletonCard().render();
            list.append(card);
            list.append(skeleton);

            const image = card.querySelector('img');
            image.onload = () => {
                card.classList.remove('loading');
                skeleton.remove();
            }
        });
    }
}

class ProjectCard {

    constructor(project) {
        this.project = project;
        this.currentIndex = 0;
    }

    render() {
        const item = document.createElement('li');
        item.classList.add('project', 'loading');
        this.item = item;

        const image = document.createElement('img');
        image.classList.add('project__image');
        image.src = this.project.imageUrl;
        image.alt = 'Image representation of project';
        item.append(image);

        const iconWrapper = document.createElement('div');
        iconWrapper.classList.add('icon-wrapper');
        item.append(iconWrapper);
        let icon;
        this.project.devices.forEach(device => {
            switch(device) {
                case 'mobile': icon = 'fa-solid fa-mobile-screen-button'; break;
                case 'desktop': icon = 'fa-solid fa-desktop'; break;
                case 'android': icon = 'fa-brands fa-android'; break;
            }
            const i = document.createElement('i');
            i.setAttribute('class', icon + ' project__icon');
            i.title = 'Supported on ' + device;
            iconWrapper.append(i);
        });
     
        const title = document.createElement('project__title');
        title.classList.add('project__title');
        title.textContent = this.project.title;
        item.append(title);

        const line = document.createElement('div');
        line.classList.add('line');
        item.append(line);

        const desc = document.createElement('p');
        desc.classList.add('project__description');
        desc.textContent = this.project.description;
        item.append(desc);

        if (this.project.url2) {
            const link2 = document.createElement('a');
            link2.classList.add('button', 'secondary');
            link2.href = this.project.url2;
            link2.target = '_blank';
            link2.textContent = 'Source code';
            item.append(link2);
        }

        if (this.project.url) {
            const link = document.createElement('a');
            link.classList.add('button', 'primary');
            link.href = this.project.url;
            link.target = '_blank';
            link.textContent = 'Look it up';
            item.append(link);
        }
        return item;
    }
}

