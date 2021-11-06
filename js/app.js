new Vue({
    el: '#baseElement',
    data:{
        mainone: 'base',
        navLink: 'nav-link nav-link-white',
        text_link: 'nav-link-white',
        defaultActiveColor: 'active-color',
        pinkActiveColor: '',
        yellowActiveColor: '',
        grayActiveColor: ''
    },
    methods:{
        changeBackgroundColor(color){
            this.mainone = color;
            switch (color){
                case 'base':
                    this.navLink = 'nav-link nav-link-white'
                    this.text_link = 'nav-link-white'
                    this.defaultActiveColor = 'active-color'
                    this.pinkActiveColor = ''
                    this.yellowActiveColor = ''
                    this.grayActiveColor = ''
                    break;
                case 'pink':
                    this.navLink = 'nav-link nav-link-white'
                    this.text_link = 'nav-link-white'
                    this.defaultActiveColor = ''
                    this.pinkActiveColor = 'active-color'
                    this.yellowActiveColor = ''
                    this.grayActiveColor = ''
                    break;
                case 'yellow':
                    this.navLink = 'nav-link nav-link-white'
                    this.text_link = 'nav-link-white'
                    this.defaultActiveColor = ''
                    this.pinkActiveColor = ''
                    this.yellowActiveColor = 'active-color'
                    this.grayActiveColor = ''
                    break;
                case 'gray':
                    this.navLink = 'nav-link nav-link-white'
                    this.text_link = 'nav-link-white'
                    this.defaultActiveColor = ''
                    this.pinkActiveColor = ''
                    this.yellowActiveColor = ''
                    this.grayActiveColor = 'active-color'
                    break;
            }
        },
    }
})