// const reactElement = {
//     type: 'a',
//     props: {
//         href : 'https://zubairshabir.info',
//         target: '_blank'
//     },
//     children: 'click me to visit my prtfolio'
// };


// const manContainer = document.getElementById("root");

// customRender(reactElement , manContainer);


// function customRender(RE , MC) {
//     const DomElement = document.createElement(RE.type);
//     DomElement.innerHTML = reactElement.children;

//     for(const prop in RE.props){
//         if(prop === "children") continue;
//         DomElement.setAttribute(prop, RE.props[prop])
//     }


//     // DomElement.setAttribute("href", RE.props.href)
//     // DomElement.setAttribute("target", RE.props.target);

//     MC.appendChild(DomElement);
    
// }





var a = {
    flag:1,
    toString: function(){
        return this.flag++;
    }
}

if(a == 1 && a == 2 && a == 3){
    console.log("Hello World")
}