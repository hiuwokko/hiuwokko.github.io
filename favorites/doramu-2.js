let films = [
    {   
        name: "Винченцо" , 
        duration: "1 сезонив,20серий", 
        marks:8.9, 
        actors:"Ким Соль Джин, Ли Хан На, Ким Ё Чжин,", 
        image:"v1.jpg",
        genre:"Криминал",
        about:"Пак Чжу Хён, который с восьми лет был усыновлён итальянской семьёй и жил, и воспитывался в Италии. Он не только изменил своё имя на Винченцо Кассано (Сон Джун Хён), но и стал адвокатом мафии. Обаятельный и умный юрист мог профессионально вести переговоры. После начала войны в мафиозных кругах, итальянский адвокат Винченцо возвращается на родину и встречается с достойным соперником, лучшим местным адвокатом Хон Ча Ён (Чо Ё Бин), работающая в крупной юридической фирме Усан. Она готова на всё для того, чтобы не проиграть дело. Её помощник - умный и трудолюбивый юрист-стажёр Чан Джун У (Ок Тэк Ён), который восхищён своим наставником и полностью доверяет ей. Винченцо добивается справедливости своим путем. В своей работе он сталкивается с достойным противником, главой группы «Вавилон», Чан Хансо (Квак Дон Ён), по натуре жестокой и не признающей поражения. Одним словом, эта история о хладнокровном обольстителе, готовый пойти на всё ради победы ",
        
    },
    {   
        name: 'Псих, но все в порядке', 
        duration: "1сезонив,16серий", 
        marks:9.4, 
        actors:"Пак Гю Ён, Кан Ки Дун, Чан Ён Нам, О Чжон Се,", 
        image:"p1.jpg",
        genre:"Комедия",
        about:"Мун Кан Тхэ работает в больнице, в психиатрическом отделении. У него множество положительных качеств, а также он очень красив. У него есть старший брат, который страдает аутизмом. Главная героиня Го Мун Ён является автором детских книг и у нее антисоциальное расстройство личности. Из-за травм детства, она выросла высокомерной и эгоистичной женщиной.",
    },
    {   
        name: '', 
        duration:"" , 
        marks:9.0, 
        actors:"", 
        image:"",
        genre:"",
        about:"",
    },
    {   
        name: '', 
        duration: "", 
        marks:8.9, 
        actors:"", 
        image:"",
        about:"",
    },
    {   
        name: '', 
        duration: "", 
        marks:8.9, 
        actors:"", 
        image:"",
        about:"",
    },
    {   
        name: '', 
        duration: "", 
        marks:8.9, 
        actors:"", 
        image:"12.jpg",
        about:"1",
    },
    {   
        name: "", 
        duration: "", 
        marks:8.9, 
        actors:"", 
        image:"",
        about:"",
    },
    {   
        name: '', 
        duration: "", 
        marks:8.9, 
        actors:"", 
        image:"",
        about:"",
    },
    {   
        name: '', 
        duration:"" , 
        marks:8., 
        actors:"", 
        image:"",
        about:"",
    },
    {   
        name: '', 
        duration:"" , 
        marks:8., 
        actors:"", 
        image:"",
        about:"",
    },



];

let app = {
    data() {
        return {
            films:films,
            searchString:'',
            currentIndex: -1,
            modalNum:-1,
            showPr: true,
        }
    },
    methods: {
        modalShow(index){
            this.currentIndex = index;
        }, 
        modalHide(){
            this.currentIndex = -1;
        },
        showDetail(index) {
            this.modalNum = index;
        },
        hideDetail(){
            this.modalNum = -1
        },
        showPreloader(){
            setTimeout(()=>{
                this.showPr = false;
            }, 1000)
        },
        
    },
    mounted() {
        this.showPreloader()
    },
    computed: {
        myFilter(){
            let search = this.searchString;//скорочуємо змінну
            if (!search){//якщо змінна пуста
                return this.films;//показуємо всі фільми
            }
            search = search.trim().toLowerCase();//обрізаємо пробіли і малі букви робимо

            return this.films.filter(//запускаємо фільтр
                item => {//кожен асоціативний масивчик (один фільм)
                    if (item.name.toLowerCase().indexOf(search) != -1){
                        return item;//фільми, що підходять
                    }
                })
        }
    },

    

}
Vue.createApp(app).mount("#film-app")

