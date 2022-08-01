# External Resources README

This is a VS Code web extension used to manage project's external resources. External resources can be `js/css/font` files that you would like to add to the project.

## Features

- User can add/link an external resources to the current project by adding the URL.
- Remove an external resource by deleting the URL.
- Ability to reorder the external resources by drag and drop with in the list.

  ![Demo](/extensions/vscode/external-resources/src/assets/external-resources.gif)

> **Note**: When we link/unlink an external resource, this extension updates the project's `index.html` file by adding/removing the corresponding entry in its head tag.

## Steps to start

1. Run below command in the terminal

   ```shell
   yarn build-react
   ```

   This should compile the react project from _src_ folder and output the build files into _media_ folder.

2. Now press F5. This internally triggers script `watch-web` and generates _dist_ folder. Once done an Extension Development Host session is opened where we can preview our extension in action.

3. You can find `External Resources` widget under Explorer sidebar menu. By default this will be empty, assuming there are no open workspaces.

4. Open a workspace folder which has index.html file under either public or src folder. The extension reads the index.html file and displays the external-resources in the widget.

> All the resource elements linked through external-resources widget will be assigned a specific id to help identify and list them in the extension widget.

## Helpful Links

- VS Code Web Extensions - https://code.visualstudio.com/api/extension-guides/web-extensions
- Testing web extension - https://code.visualstudio.com/api/extension-guides/web-extensions#test-your-web-extension
- Activation Events: https://code.visualstudio.com/api/references/activation-events#workspaceContains

## To-do List

- [ ] As of now, .ts, .tsx files are compiled using babel-loader. Ideally we should use both ts-loader, babel-loader for typescript files. But using ts-loader is failing the `npm run build-react`. Need to figure out this issue.
- [ ] Use [Preact](https://preactjs.com/) instead of React.
