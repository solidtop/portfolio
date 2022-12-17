/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/filters.js":
/*!***************************!*\
  !*** ./src/js/filters.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Filter)\n/* harmony export */ });\nclass Filter {\r\n    constructor(projects) {\r\n        this.projects = projects;\r\n\r\n        this.filters = [\r\n            new DateFilter(),\r\n            new CategoryFilter(projects),\r\n        ];\r\n    }\r\n\r\n    render(list) {\r\n        this.filters.forEach(filter => {\r\n            const item = filter.render();\r\n            item.addEventListener('change', () => {\r\n                list.render(this.filter());\r\n            });\r\n            document.querySelector('.filters').append(item);\r\n        });\r\n    }\r\n\r\n    filter() {\r\n        let filteredData = this.projects;\r\n        this.filters.forEach(filter => {\r\n            filteredData = filter.filter(filteredData);\r\n        });   \r\n        return filteredData;\r\n    }\r\n}\r\n\r\nclass DateFilter {\r\n\r\n    render() {\r\n        const select = document.createElement('select');\r\n        this.select = select;\r\n\r\n        const option1 = document.createElement('option');\r\n        option1.value = '';\r\n        option1.textContent = 'Sort by date';\r\n        option1.disabled = true;\r\n        option1.selected = true;\r\n        select.append(option1);\r\n        const option2 = document.createElement('option');\r\n        option2.value = 'recent';\r\n        option2.textContent = 'Newest';\r\n        select.append(option2);\r\n        const option3 = document.createElement('option');\r\n        option3.value = 'oldest';\r\n        option3.textContent = 'Oldest';\r\n        select.append(option3);\r\n\r\n       \r\n        return select;\r\n    }\r\n\r\n    filter(projects) {\r\n        const selected = this.select.value;\r\n        if (!selected) return projects;\r\n        return projects.sort((a, b) => {\r\n            return selected === 'recent' ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date);\r\n        });  \r\n    }\r\n}\r\n\r\n\r\nclass CategoryFilter {\r\n    constructor(projects) {\r\n        const categories = [];\r\n        projects.forEach(project => {\r\n            project.categories.forEach(category => {\r\n                if (!categories.includes(category)) {\r\n                    categories.push(category);\r\n                }\r\n            });\r\n        });\r\n        this.categories = categories;\r\n    }\r\n\r\n    render() {\r\n        const select = document.createElement('select');\r\n        this.select = select;\r\n\r\n        const option = document.createElement('option');\r\n        option.value = '';\r\n        option.textContent = 'Sort by category';\r\n        option.disabled = true;\r\n        option.selected = true;\r\n        select.append(option);\r\n\r\n        const option2 = document.createElement('option');\r\n        option2.value = '';\r\n        option2.textContent = 'All';\r\n        select.append(option2);\r\n\r\n        this.categories.forEach(category => {\r\n            const option = document.createElement('option');\r\n            option.value = category;\r\n            option.textContent = category;\r\n            select.append(option);\r\n        });\r\n        return select;\r\n    }\r\n\r\n    filter(projects) {\r\n        const selectedCategory = this.select.value;\r\n        if (!selectedCategory) return projects;\r\n        return projects.filter(project => project.categories.includes(selectedCategory));\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://cv/./src/js/filters.js?");

/***/ }),

/***/ "./src/js/projects.js":
/*!****************************!*\
  !*** ./src/js/projects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var _skeletons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skeletons.js */ \"./src/js/skeletons.js\");\n\r\n\r\nclass ProjectList {\r\n    render(projects) {\r\n        const list = document.querySelector('.project-list');\r\n        list.innerHTML = '';\r\n\r\n        projects.forEach(project => {\r\n            const card = new ProjectCard(project).render();\r\n            const skeleton = new _skeletons_js__WEBPACK_IMPORTED_MODULE_0__.SkeletonCard().render();\r\n            list.append(card);\r\n            list.append(skeleton);\r\n\r\n            const image = card.querySelector('img');\r\n            image.onload = () => {\r\n                card.classList.remove('loading');\r\n                skeleton.remove();\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\nclass ProjectCard {\r\n\r\n    constructor(project) {\r\n        this.project = project;\r\n        this.currentIndex = 0;\r\n    }\r\n\r\n    render() {\r\n        const item = document.createElement('li');\r\n        item.classList.add('project', 'loading');\r\n        this.item = item;\r\n\r\n        const image = document.createElement('img');\r\n        image.classList.add('project__image');\r\n        image.src = this.project.image;\r\n        image.alt = 'Image representation of project';\r\n        item.append(image);\r\n\r\n        const iconWrapper = document.createElement('div');\r\n        iconWrapper.classList.add('icon-wrapper');\r\n        item.append(iconWrapper);\r\n        let icon;\r\n        this.project.devices.forEach(device => {\r\n            switch(device) {\r\n                case 'mobile': icon = 'fa-solid fa-mobile-screen-button'; break;\r\n                case 'desktop': icon = 'fa-solid fa-desktop'; break;\r\n                case 'android': icon = 'fa-brands fa-android'; break;\r\n            }\r\n            const i = document.createElement('i');\r\n            i.setAttribute('class', icon + ' project__icon');\r\n            i.title = 'Supported on ' + device;\r\n            iconWrapper.append(i);\r\n        });\r\n     \r\n        const title = document.createElement('project__title');\r\n        title.classList.add('project__title');\r\n        title.textContent = this.project.title;\r\n        item.append(title);\r\n\r\n        const line = document.createElement('div');\r\n        line.classList.add('line');\r\n        item.append(line);\r\n\r\n        const desc = document.createElement('p');\r\n        desc.classList.add('project__description');\r\n        desc.textContent = this.project.description;\r\n        item.append(desc);\r\n\r\n        if (this.project.url2) {\r\n            const link2 = document.createElement('a');\r\n            link2.classList.add('button', 'secondary');\r\n            link2.href = this.project.url2;\r\n            link2.target = '_blank';\r\n            link2.textContent = 'Source code';\r\n            item.append(link2);\r\n        }\r\n\r\n        const link = document.createElement('a');\r\n        link.classList.add('button', 'primary');\r\n        link.href = this.project.url;\r\n        link.target = '_blank';\r\n        link.textContent = 'Look it up';\r\n        item.append(link);\r\n\r\n        return item;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://cv/./src/js/projects.js?");

/***/ }),

/***/ "./src/js/skeletons.js":
/*!*****************************!*\
  !*** ./src/js/skeletons.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SkeletonCard\": () => (/* binding */ SkeletonCard)\n/* harmony export */ });\nclass SkeletonCard {\r\n\r\n    render() {\r\n        const skeleton = document.createElement('div');\r\n        skeleton.classList.add('skeleton-card');\r\n\r\n        const image = document.createElement('div');\r\n        image.classList.add('skeleton-card__image');\r\n        skeleton.append(image);\r\n\r\n        const title = document.createElement('div');\r\n        title.classList.add('skeleton-card__title');\r\n        skeleton.append(title);\r\n\r\n        for (let i = 0; i < 4; i++) {\r\n            const text = document.createElement('div');\r\n            text.classList.add('skeleton-card__text');\r\n            text.id = 'text' + (i + 1);\r\n            skeleton.append(text);\r\n        }\r\n\r\n        const button = document.createElement('div');\r\n        button.classList.add('skeleton-card__button');\r\n        skeleton.append(button);\r\n\r\n        return skeleton;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://cv/./src/js/skeletons.js?");

/***/ }),

/***/ "./src/js/skills.js":
/*!**************************!*\
  !*** ./src/js/skills.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SkillList)\n/* harmony export */ });\nclass SkillList {\r\n    constructor(skills, additionalSkills) {\r\n        this.skills = skills;\r\n        this.additionalSkills = additionalSkills;\r\n    }\r\n\r\n    render() {\r\n        this.skills.forEach(skill => {\r\n            const item = new Skill(skill).render();\r\n            document.querySelector('.skill-list').append(item);\r\n        });\r\n\r\n        this.additionalSkills.forEach(skill => {\r\n            const item = new AdditionalSkill(skill).render();\r\n            document.querySelector('.add-skill-list').append(item);\r\n        });\r\n    }\r\n}\r\n\r\nclass Skill {\r\n    constructor(skill) {\r\n        this.skill = skill;\r\n    }\r\n\r\n    render() {\r\n        const item = document.createElement('li');\r\n        item.classList.add('skill');\r\n        \r\n        const label = document.createElement('label');\r\n        label.classList.add('skill__label');\r\n        label.for = 'skill' + this.skill.id;\r\n        label.textContent = this.skill.name;\r\n        item.append(label);\r\n\r\n        const progress = document.createElement('progress');\r\n        progress.classList.add('skill__indicator');\r\n        progress.id = 'skill' + this.skill.id;\r\n        progress.min = '0';\r\n        progress.max = '100';\r\n        progress.value = this.skill.level;\r\n        item.append(progress);\r\n\r\n        const label2 = document.createElement('label');\r\n        label2.classList.add('skill__level');\r\n        label2.for = 'skill' + this.skill.id;\r\n\r\n        if (this.skill.level >= 70) {\r\n            label2.textContent = 'Advanced';\r\n        } else if(this.skill.level >= 40) {\r\n            label2.textContent = 'Intermediate';\r\n        } else {\r\n            label2.textContent = 'Beginner';\r\n        }\r\n        item.append(label2);\r\n\r\n        return item;\r\n    }\r\n}\r\n\r\nclass AdditionalSkill {\r\n    constructor(skill) {\r\n        this.skill = skill;\r\n    }\r\n\r\n    render() {\r\n        const item = document.createElement('li');\r\n        item.textContent = this.skill;\r\n\r\n        return item;\r\n    }\r\n}\n\n//# sourceURL=webpack://cv/./src/js/skills.js?");

/***/ }),

/***/ "./src/js/timeline.js":
/*!****************************!*\
  !*** ./src/js/timeline.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Timeline)\n/* harmony export */ });\nclass Timeline {\r\n    constructor(timeline) {\r\n        this.timeline = timeline;\r\n    }\r\n\r\n    render() {\r\n        this.timeline.forEach(year => {\r\n            const item = new Year(year).render();\r\n            document.querySelector('.years').append(item);\r\n\r\n            const marker = document.createElement('div');\r\n            marker.classList.add('timeline__marker');\r\n            document.querySelector('.timeline').append(marker);\r\n        });\r\n    }\r\n}\r\n\r\nclass Year {\r\n    constructor(year){\r\n        this.year = year;\r\n    }\r\n\r\n    render() {\r\n        const item = document.createElement('li');\r\n        item.classList.add('year');\r\n\r\n        const span = document.createElement('span');\r\n        span.textContent = this.year.year;\r\n        item.append(span);\r\n\r\n        const p = document.createElement('p');\r\n        p.textContent = this.year.description;\r\n        item.append(p);\r\n\r\n        return item;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://cv/./src/js/timeline.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/projects.js */ \"./src/js/projects.js\");\n/* harmony import */ var _js_skills_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/skills.js */ \"./src/js/skills.js\");\n/* harmony import */ var _js_timeline_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/timeline.js */ \"./src/js/timeline.js\");\n/* harmony import */ var _js_filters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/filters.js */ \"./src/js/filters.js\");\n\r\n\r\n\r\n\r\n\r\ndocument.querySelector('.button-open').addEventListener('click', () => {\r\n    document.querySelector('.main-nav').classList.add('open');   \r\n});\r\ndocument.querySelector('.button-close').addEventListener('click', () => {\r\n    document.querySelector('.main-nav').classList.remove('open');   \r\n});\r\n\r\nconst navLinks = document.querySelectorAll('a');\r\nnavLinks.forEach(link => {\r\n    link.addEventListener('click', () => {\r\n        document.querySelector('.main-nav').classList.remove('open');   \r\n    });\r\n});\r\n\r\n\r\nclass APIAdapter {\r\n    async loadData() {\r\n        const res = await fetch('./static/data.json');\r\n        const data = await res.json();\r\n        return data;\r\n    }\r\n}\r\n\r\nasync function run() {\r\n    const data = await new APIAdapter().loadData();\r\n\r\n    const projectList = new _js_projects_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    projectList.render(data.projects);\r\n    new _js_filters_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](data.projects).render(projectList);\r\n\r\n    new _js_skills_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](data.skills, data.additionalSkills).render();\r\n    new _js_timeline_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](data.timeline).render();\r\n}\r\n\r\nrun();\r\n\r\n\r\n\n\n//# sourceURL=webpack://cv/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;