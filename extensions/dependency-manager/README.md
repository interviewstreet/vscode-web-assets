# Dependency Manager README

This is a VS Code web extension used to manage npm packages.

## Features

- View project dependencies in an interactive web view widget under Explorer sidebar menu.
- Search and Add(install) packages from npm registry to the project.
- Remove(uninstall) existing packages by clicking corresponding delete icon.
- Ability to upgrade/downgrade package's version.

  ![Demo](/extensions/vscode/dependency-manager/src/assets/dependency-manager.gif)

> **Note**: When we add/remove a package, this extension updates the project's `package.json` file by appending/removing the entry from its dependencies. It doesn't actually install/uninstall the package.

## Steps to start

The UI of this extension is implemented using React. So compared to a typical VS Code web extension project, we have some additional steps that are required to make this work. Lets get through them:

1. Run below command in the terminal

   ```shell
   yarn build-react
   ```

   > This should compile the react project from _src_ folder and output the build files into _media_ folder.

2. Now press F5. This internally triggers script `watch-web` and generates _dist_ folder. Once done an Extension Development Host session is opened where we can preview our extension in action.
3. You can find `Dependencies` widget under Explorer sidebar menu. by default this will be empty, assuming there are no open workspaces.
4. In Explorer, open a folder which has package.json file in its root folder. The extension read the package.json file and displays the dependencies that are already part of the project in the `Dependencies` widget.

## Helpful Links

- VS Code Web Extensions - https://code.visualstudio.com/api/extension-guides/web-extensions
- Testing web extension - https://code.visualstudio.com/api/extension-guides/web-extensions#test-your-web-extension
- Activation Events: https://code.visualstudio.com/api/references/activation-events#workspaceContains

## To-do List

- [ ] As of now, .ts, .tsx files are compiled using babel-loader. Ideally we should use both ts-loader, babel-loader for typescript files. But using ts-loader is failing the `npm run build-react`. Need to figure out this issue.
- [ ] Use [Preact](https://preactjs.com/) instead of React.
