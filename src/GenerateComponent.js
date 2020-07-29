const path = require('path');
const shell = require('shelljs');
const common = require('../Common');
const fs = require('fs');

const addToIndex = (componentName) => {
    const currentWorkingDir = path.join(`${process.cwd()}`, common.COMPONENT_DIR)
    const newImport = shell.ShellString(`export * from './${componentName}';\n`)
    newImport.toEnd(`${currentWorkingDir}/${common.COMPONENT_INDEX}`)
}
const addNewComponent = (componentName) => {
    const currentWorkingDir = path.join(`${process.cwd()}/${common.COMPONENT_DIR}`, `${componentName}.tsx`)
    const templateDir = path.join(__dirname, `./templates/components/component.tsx`)
    if (fs.existsSync(currentWorkingDir)) {
        console.log(`Component ${componentName} already exists, choose another name.`)
        return
    }
    shell.cp('-R', templateDir, currentWorkingDir)
    shell.sed('-i', /@{component}/g, componentName, currentWorkingDir);
    addToIndex(componentName)
    shell.echo(`Component ${componentName} generated!`)
    shell.exit(1)
}
module.exports = addNewComponent