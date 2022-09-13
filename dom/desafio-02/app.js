new Vue({
    el: '#desafio',
    data: {
        valor: ``,
    },
    methods: {
        exibirAlerta (event) {
            alert('Como eu sou lindo!')
        },
        alterarValor (event) {
            this.valor = event.target.value
        }
    }
})