// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Test } from './test';

export let extPath: vscode.ExtensionContext;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	extPath = context;
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "nate-test" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('nate-test.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from nate-test!');

		const fs = vscode.workspace.fs;

		let extURI: vscode.Uri = vscode.Uri.parse('');

		vscode.extensions.all.forEach((extension) => {
			if (extension.id === 'undefined_publisher.nate-test') {
				extURI = extension.extensionUri;
			}
		});

		var test1 = new Test();
		test1.testFunc();

		console.log('THIS EXTENSION: ', vscode.extensions.getExtension(''))

		const filePath = vscode.Uri.joinPath(extPath.extensionUri, 'tmp', 'tmp2', 'temp3', 'tmp4', 'nate-test.json');
		console.log(filePath);

		fs.writeFile(filePath, Buffer.from('abc123')).then(console.log);
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
