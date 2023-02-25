export default class APIAdapter {
    async loadData() {
        const res = await fetch('./static/data.json');
        const data = await res.json();
        return data;
    }
}