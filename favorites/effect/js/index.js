var app = new Vue({
    el: '.carousel',
    data: {
        mark: 0,
        img: [
            'http://my-hexo-blog.weliven.com/52304WechatIMG1.jpeg',
            'http://my-hexo-blog.weliven.com/52304WechatIMG2.jpeg',
            'http://my-hexo-blog.weliven.com/52304WechatIMG3.jpeg',
            'http://my-hexo-blog.weliven.com/52304WechatIMG4.jpeg',
            'http://my-hexo-blog.weliven.com/52304WechatIMG5.jpeg'
        ],
        time: null,
        str: 'Hello Vue!',
        seen: true,
        todos: [
            { text: 'learn javascript'},
            { text: 'learn vue'},
            { text: 'build something awesome'},
            { text: 'earn money'}
        ]
    },
    methods: { //添加方法
        change(i) {
            this.mark = i;
        },
        prev() {
            this.mark--;
            if (this.mark === -1) {
                this.mark = 4;
                return
            }
        },
        next() {
            this.mark++;
            if (this.mark === 5) {
                this.mark = 0;
                return
            }
        },
        autoPlay() {
            this.mark++;
            if (this.mark === 5) {
                this.mark = 0;
                return
            }
        },
        play() {
            this.time = setInterval(this.autoPlay, 3000);
        },
        enter() {
            console.log('enter')
            clearInterval(this.time);
        },
        leave() {
            console.log('leave')
            this.play();
        }
    },
    created() {
        this.play()
    }
})

app.str = 'Hello Vue Changed!';
app.seen = false;
app.seen = true;