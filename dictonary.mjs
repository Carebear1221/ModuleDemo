class Dictonary{

    constructor(...languages){
        this.languagefiles = languages
        this.Dictonary = null;
    }

    setLanguage = function(){
        // Velger språk som skal brukes

        // Laster språket fra riktig fil

    }

    get = function(key){
        // Henter riktig verdi basert på key i dictionary
        return this.Dictonary[key];
    }

    keys = function(){
        // returnerer alle keys i dictionary
        return Object.keys( this.Dictonary);
    }


}


let dictionary = new Dictionary("./lan/no.json");
dictionary.setLanguage("no");
dictionary.get(Dictonary_Keys);