new Vue ({
    el: '#desafio',
    data: {
        meuNome: 'Rychard Lima',
        minhaIdade: 18,
        image: './img/images.jpeg'
    },
    methods: {
        multiplique () {
          return this.minhaIdade * 3
        },
        random () {
            return Math.random(0,1)
        },

    }
})