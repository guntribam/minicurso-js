import * as sections from './index.js'

function createCodeZone(id) {
    const textArea = document.getElementById(`codeEditor-${id}`);
    const codeEditor = CodeMirror.fromTextArea(textArea, {
        mode: "javascript",
        theme: "dracula",
        lineNumbers: true,
        viewportMargin: Infinity,
        extraKeys: {
            "Ctrl-Enter": executeCode,
            "Shift-Enter": () => console.clear(),
            "Alt-Enter": resetCode,
            "Ctrl-/": "toggleComment"
        }
    });

    codeEditor.setSize(null, textArea.dataset.size);
    const output = document.getElementById(`output-${id}`);
    const initialCode = textArea.value;

    function executeCode() {
        output.innerHTML = "";
        eval(codeEditor.getValue());
    }

    function resetCode() {
        codeEditor.setValue(initialCode);
        output.innerHTML = "";
    }

    document.getElementById(`runButton-${id}`).addEventListener("click", executeCode);
    document.getElementById(`resetButton-${id}`).addEventListener("click", resetCode);
}

function createSection({ title, size, content }, index) {
    const section = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.innerHTML = title
    section.appendChild(h2)

    const textarea = document.createElement('textarea');
    textarea.id = `codeEditor-${index}`
    textarea.setAttribute('data-size', `${size}`)
    textarea.innerHTML = content
    section.appendChild(textarea)

    const output = document.createElement('div');
    output.id = `output-${index}`
    section.appendChild(output)

    const runButton = document.createElement('button');
    runButton.id = `runButton-${index}`
    runButton.innerHTML = `Rodar`
    section.appendChild(runButton)

    const resetButton = document.createElement('button');
    resetButton.id = `resetButton-${index}`
    resetButton.innerHTML = `Voltar ao original`
    section.appendChild(resetButton)

    document.getElementById('sections').appendChild(section);
    createCodeZone(index);
}

document.addEventListener("DOMContentLoaded", () => {
    Object.values(sections).forEach((section, index) => createSection(section, (index + 1)))
});

