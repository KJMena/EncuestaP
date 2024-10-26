const inst = {
    data() {
        return {
            gustarProgramar: '',
            aniosProgramando: 0,
            experiencia: '',
            lenguaje: '',
            lenguajes: [],
            mostrar: false
        }
    },
    methods: {
        agregarLenguaje() {
            if (this.lenguaje.trim()) {
                this.lenguajes.push(this.lenguaje);
                this.lenguaje = ''; // Limpiar campo de entrada
            }
        },
        mostrarResultados() {
            this.mostrar = true;
        }
    }
};

Vue.createApp(inst).mount('#componente');
