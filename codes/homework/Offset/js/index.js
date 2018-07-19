

let vm = new Vue({
    el: "#app",
    data: {
        message: "Hello, vue!",
        offset: 0,
        offsets: [],
        height: window.innerHeight
    },
    mounted() {
    
        let lis = this.$refs.app.querySelectorAll(".list li");
        for(let i = 0, len = lis.length; i < len; i++) {
            this.offsets[i] = lis[i].offsetTop;
         }

        window.onscroll = () => {
            this.offset = document.body.scrollTop || document.documentElement.scrollTop;

            for(let i = 0; i < this.offsets.length; i++) {
                if(this.offset + this.height > this.offsets[i]) {
                    console.log(lis[i]);
                }
            }
        }
        
        
    }
});


