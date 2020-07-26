class Sentence{

    constructor(){
        this.sentences = [
            "“Nunca había pasado antes.”",
            "“Pues ayer funcionaba…”",
            "“¿Cómo es posible?”",
            "“Tiene que ser un problema de tu hardware.”",
            "“¿Qué hiciste mal para lograr que fallara?”",
            "“Algo debe de estar mal en tus datos.”",
            "“¡Si no he tocado ese módulo en meses!”",
            "“Debes de estar usando una versión anterior.”",
            "“Es sólo una desafortunada coincidencia.”",
            "“¡Es que no lo puedo probar todo!”",
            "“ESTO, no puede ser la causa de ESO.”",
            "“Funciona, pero no lo he probado.”",
            "“¡Alguien debe de haber cambiado mi código!”"
          ];
    }

    getSentence(index){
        return this.sentences[index];
    }
    
    getLength(){
        return this.sentences.length;
    }
}

module.exports = {Sentence};