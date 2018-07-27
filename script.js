/**
 * Get a template DOM object from the DOM and return a usable DOM object
 * from the main node within it. Assumes that there is only one main parent
 * node in the template.
 * 
 * @param {string} id the id of the template element
 * @returns {Object} a deep clone of the templated element
 */
function getElementFromTemplate(id) {
    let domNode = document.importNode(document.getElementById(id).content, true).firstElementChild;

    return domNode;
}

// wait till the DOM is loaded to add JS content.
document.addEventListener('DOMContentLoaded', () => {

    // listen for a click on the get question button and gets the question.
    document.querySelector('button#get-question').addEventListener('click', (event) => {
        getNewQuestion();
    });
});

function getNewQuestion() {
    const url = 'http://jservice.io/api/random';
    const settings = {
        method:'GET'
    };

    fetch(url, settings)
    .then(response => response.json())
    .then(json => {
        console.log(json);
    });
}