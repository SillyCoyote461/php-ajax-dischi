var app = new Vue({
    el: '#app',
    data: {
        albums: [],
    },
    mounted() {
        axios.get('./api/index.php')
        .then((response) =>{
            this.albums = response.data
        })
    },
    created() {

    
    },
    beforeUpdate() {

    },
    methods: {

    }
})