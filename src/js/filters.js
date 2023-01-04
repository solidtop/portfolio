export default class Filter {
    constructor(projects) {
        this.projects = projects;

        this.filters = [
            new DateFilter(),
            new CategoryFilter(projects),
        ];
    }

    render(list) {
        this.filters.forEach(filter => {
            const item = filter.render();
            item.addEventListener('change', () => {
                list.render(this.filter());
            });
            document.querySelector('.filters').append(item);
        });
    }

    filter() {
        let filteredData = this.projects;
        this.filters.forEach(filter => {
            filteredData = filter.filter(filteredData);
        });   
        return filteredData;
    }
}

class DateFilter {

    render() {
        const select = document.createElement('select');
        this.select = select;

        const option1 = document.createElement('option');
        option1.value = '';
        option1.textContent = 'Sort by date';
        option1.disabled = true;
        option1.selected = true;
        select.append(option1);
        const option2 = document.createElement('option');
        option2.value = 'recent';
        option2.textContent = 'Newest';
        select.append(option2);
        const option3 = document.createElement('option');
        option3.value = 'oldest';
        option3.textContent = 'Oldest';
        select.append(option3);

       
        return select;
    }

    filter(projects) {
        const selected = this.select.value;
        if (!selected) return projects;
        return projects.sort((a, b) => {
            return selected === 'recent' ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date);
        });  
    }
}


class CategoryFilter {
    constructor(projects) {
        const categories = [];
        projects.forEach(project => {
            project.categories.forEach(category => {
                if (!categories.includes(category)) {
                    categories.push(category);
                }
            });
        });
        this.categories = categories;
    }

    render() {
        const select = document.createElement('select');
        this.select = select;

        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'Filter by category';
        option.disabled = true;
        option.selected = true;
        select.append(option);

        const option2 = document.createElement('option');
        option2.value = '';
        option2.textContent = 'All';
        select.append(option2);

        this.categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            select.append(option);
        });
        return select;
    }

    filter(projects) {
        const selectedCategory = this.select.value;
        if (!selectedCategory) return projects;
        return projects.filter(project => project.categories.includes(selectedCategory));
    }
}

