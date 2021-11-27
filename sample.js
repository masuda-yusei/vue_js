new Vue({
  // このelにHTMLのidを指定することで、そのidのDOMでVue.jsのインスタンスがインポートされる
  el: '#app',
  // dataは、定義されたVue.jsのインスタンスが持つ属性（値）
  data: {
    name: 'A山B郎',
    course: 'Webエンジニアコース',
    acceptancePeriod: '2021年09月期',
    defaultLastId: 4,
    students: [
      { id: 1, name: '増田', course: 'Webエンジニアコース', acceptancePeriod: '2021年09月期' },
      { id: 2, name: '横田', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' },
      { id: 3, name: '村山', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' }
    ]
  },
  // methodsに、Vue.jsのインスタンスに使用させたいメソッドを記載する
  methods: {
    addStudent: function() {
        // この function() { } の中にaddStudentメソッド
        // （入力欄に入力された値と、ID値（最後に登録されたID値+1の値）が新たに出現する機能）の処理を書く
      this.students.push({
        id: this.defaultLastId++,
        name: this.name,
        course: this.course,
        acceptancePeriod: this.acceptancePeriod
      });
      this.name = this.course = this.acceptancePeriod = "";
    }
  }
})