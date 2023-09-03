import _ from 'lodash';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack... This is the second javascript file...'], ' ');  
    return element;
}

window.document.body.appendChild(component());
console.info("Second javascript file is running...");
