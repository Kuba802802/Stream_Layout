/* Dodanie nowych komponetów nakładki */
var wigets = {
    liveBar: {
        enabled: false,
        id: [0], 
        desc: "Belka Na Żywo",
        editableText: false,
        constID: 0
    },
    logo: {
        enabled: false,
        id: [1], 
        desc: "Logo",
        editableText: false,
        constID: 1
    },
    lokalizacja: {
        enabled: false,
        id: [2,3], 
        desc: "Belka Lokalizacyjna",
        locTekst: "",
        editableText: true,
        constID: 2,
    },
    belka: {
        enabled: false,
        id: [4,5,6], 
        desc: "Główna Belka Infromacyjna",
        headLine: "",
        secondLine: "",
        editableText: true,
        constID: 3
    },
    program: {
        enabled: false,
        id: [7,8], 
        desc: "Belka Aktualnego Progamu",
        program: "",
        editableText: true,
        constID: 4
    },
    scroll: {
        enabled: false,
        id: [9,10], 
        desc: "Scroll",
        editableText: true,
        scroll: "",
        constID: 5
    },
    belkaObrazek: {
        enabled: false,
        id: [11,12,13], 
        desc: "Belka z obrazkiem i podpisem",
        link: "",
        podpis: "",
        editableText: true,
        constID: 6,
    }
};
//////////////////////////////////////
class main{ 
    changeValue(component,type,value){
            const comp = wigets[component];
                comp[type] = value;
    }
    getValue(component,type){
        const comp = wigets[component];
        return comp[type]
    }

}
var control = new main();
module.exports = {
    wigets: wigets,
    main: control
};