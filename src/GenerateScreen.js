const path = require('path');
const shell = require('shelljs');
const common = require('../Common');
const fs = require('fs');

const addToNavigate = (screenName) => {
    const newImport = shell.ShellString(`export * from './${screenName}-screen';\n`)
    newImport.toEnd(`${process.cwd()}/${common.SCREEN_DIR}/${common.SCREEN_FILE}`)
    const nameUpperCase = screenName.charAt(0).toUpperCase() + screenName.slice(1)
    const navDir = path.join(`${process.cwd()}`, common.NAVIGATOR_DIR)
    const stackMethod = `  <Stack.Screen name={'${screenName}'} component={${nameUpperCase}Screen}\/>\n    <\/Stack.Navigator>`
    shell.sed('-i', "} from '../screens'", `  ${nameUpperCase}Screen,\n} from '../screens'`, `${navDir}/${common.NAVIGATOR_FILE}`)
    shell.sed('-i', '</Stack.Navigator>', stackMethod, `${navDir}/${common.NAVIGATOR_FILE}`)
}
const addNewScreen = (screenName) => {
    const nameUpperCase = screenName.charAt(0).toUpperCase() + screenName.slice(1)
    const currentWorkingDir = path.join(`${process.cwd()}/${common.SCREEN_DIR}`, `${screenName}-screen.tsx`)
    const templateDir = path.join(__dirname, `./templates/screens/screen.tsx`)
    if (fs.existsSync(currentWorkingDir)) {
        console.log(`${screenName}Screen already exists, choose another name.`)
        return
    }

    shell.cp('-R', templateDir, currentWorkingDir)

    shell.sed('-i', /@{screen}/g, nameUpperCase, `${currentWorkingDir}`)
    addToNavigate(screenName)
    shell.echo(`${screenName} generated!`)
    shell.exit(1)
}
module.exports = addNewScreen