// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Test } from './test';
import { SNICHCrypto } from './SNICHCrypto';
import AsyncNedb from 'nedb-async';


export let extPath: vscode.ExtensionContext;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {

	var db = new AsyncNedb();
	await db.asyncLoadDatabase();
	var result = await db.asyncUpdate({ _id: 'abc123' }, { _id: undefined, name: "test123" });
	console.log(result);

	extPath = context;
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "nate-test" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('nate-test.helloWorld', async () => {
		// The code you place here will be executed every time your command is executed



		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from nate-test!');
		console.log('about to init SNICHCrypto');
		let crypt = new SNICHCrypto();

		console.log('about to encrypt');
		let encrypted = crypt.encrypt('hello world');

		console.log('about to decrypt!', encrypted);
		let decrypted = crypt.decrypt(encrypted.value, encrypted.iv);
		console.log(decrypted);

		/*
		let defRp = rp.defaults({ baseUrl: 'https://sndevlatest.integratenate.com', gzip:true, json:true});

		//defRp.defaults({});

		let results;
		try{
		results = await defRp.get('/api/now/table/incident', { qs: { sysparm_limit: 1 } });
		} catch(e){
			 results = JSON.stringify(e);
		}
		console.log(results);
		*/
		/*

		let sbItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 10);
		sbItem.text = `$(file-binary) Application: Mobility Management Platform`;
		sbItem.command = 'snich.test';
		sbItem.tooltip = "The currently selected app scope for your account on the current active editors instance.";
		sbItem.show();

		let uSetSB = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 5);
		uSetSB.text = `$(source-control-view-icon) Update Set: STRY##### - I am about to be 70 characters long to see how this looks.`
		uSetSB.tooltip = "The currently selected update set for the instance of the active editor.";
		uSetSB.show();
		*/



		//vscode.commands.executeCommand('workbench.action.files.openFolder');

		let fs = vscode.workspace.fs;
		var test1 = new Test();
		test1.testFunc();

		console.log('THIS EXTENSION: ', vscode.extensions.getExtension(''))

		const filePath = vscode.Uri.joinPath(extPath.extensionUri, 'tmp', 'tmp2', 'temp3', 'tmp4', 'nate-test.json');
		console.log(filePath);

		let path2 = vscode.Uri.parse(filePath.path);

		console.log(path2);

		fs.writeFile(filePath, Buffer.from('abc123')).then(console.log);
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
