import "./Header.css"

const template = () =>`
<h2> e-commerce </h2>
<input type="text">Buscar</input>
`
const addListeners = () =>{}

export const PrintTemplateHeader = () =>{
    document.querySelector("header").innerHTML = template();
    addListeners();
}