export default class SkillList {
    constructor(skills, additionalSkills) {
        this.skills = skills;
        this.additionalSkills = additionalSkills;
    }

    render() {
        this.skills.forEach(skill => {
            const item = new Skill(skill).render();
            document.querySelector('.skill-list').append(item);
        });

        this.additionalSkills.forEach(skill => {
            const item = new AdditionalSkill(skill).render();
            document.querySelector('.add-skill-list').append(item);
        });
    }
}

class Skill {
    constructor(skill) {
        this.skill = skill;
    }

    render() {
        const item = document.createElement('li');
        item.classList.add('skill');
        
        const label = document.createElement('label');
        label.classList.add('skill__label');
        label.for = 'skill' + this.skill.id;
        label.textContent = this.skill.name;
        item.append(label);

        const progress = document.createElement('progress');
        progress.classList.add('skill__indicator');
        progress.id = 'skill' + this.skill.id;
        progress.min = '0';
        progress.max = '100';
        progress.value = this.skill.level;
        item.append(progress);

        const label2 = document.createElement('label');
        label2.classList.add('skill__level');
        label2.for = 'skill' + this.skill.id;

        if (this.skill.level >= 70) {
            label2.textContent = 'Advanced';
        } else if(this.skill.level >= 40) {
            label2.textContent = 'Intermediate';
        } else {
            label2.textContent = 'Beginner';
        }
        item.append(label2);

        return item;
    }
}

class AdditionalSkill {
    constructor(skill) {
        this.skill = skill;
    }

    render() {
        const item = document.createElement('li');
        item.textContent = this.skill;

        return item;
    }
}