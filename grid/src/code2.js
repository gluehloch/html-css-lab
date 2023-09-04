import _ from 'lodash';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');  
    return element;
}

window.document.body.appendChild(component());
console.info("I´m running...");