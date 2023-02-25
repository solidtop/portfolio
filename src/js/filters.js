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

        list.render(this.filter());
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
        const wrapper = document.createElement('div');
        wrapper.classList.add('filter-wrapper');
        
        const label = document.createElement('label');
        label.for = 'sort';
        label.textContent = 'Sort by';
        wrapper.append(label);

        const select = document.createElement('select');
        this.select = select;
        select.id = 'sort';
        wrapper.append(select);

        const option1 = document.createElement('option');
        option1.value = 'recent';
        option1.textContent = 'Newest';
        select.append(option1);
        const option2 = document.createElement('option');
        option2.value = 'oldest';
        option2.textContent = 'Oldest';
        select.append(option2);
   
        return wrapper;
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
        const wrapper = document.createElement('div');
        wrapper.classList.add('filter-wrapper');
        
        const label = document.createElement('label');
        label.for = 'sort';
        label.textContent = 'Filter by';
        wrapper.append(label);

        const select = document.createElement('select');
        this.select = select;
        select.id = 'filter';
        wrapper.append(select);

        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'All';
        select.append(option);

        this.categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            select.append(option);
        });
        
        return wrapper;
    }

    filter(projects) {
        const selectedCategory = this.select.value;
        if (!selectedCategory) return projects;
        return projects.filter(project => project.categories.includes(selectedCategory));
    }
}

