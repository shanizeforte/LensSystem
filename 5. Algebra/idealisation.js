function Changer(value){
    const docx = document.documentElement;
    docx.style.setProperty('--real',1-value);
    docx.style.setProperty('--ideal',value);
}