
const DUMMY_PROJECTS = [
  {name: 'AngularJs'},
  {name: 'Closure'}
]

class HomeCtrl {
  constructor() {
    this.projects = DUMMY_PROJECTS;
    this.projectSearchText = "";
  }
  vm = this;
}

export default HomeCtrl;
