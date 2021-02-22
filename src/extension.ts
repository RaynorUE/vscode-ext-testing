// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { getServers } from 'dns';
import * as vscode from 'vscode';
import { Test } from './test';
<<<<<<< HEAD
import * as rp from 'request-promise-native';
=======
import { SNICHCrypto } from './SNICHCrypto';
import AsyncNedb from 'nedb-async';

>>>>>>> main

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
<<<<<<< HEAD
		let result: rp.FullResponse;
		try {
			result = await myTest();
		} catch (e) {
			result = e;
		}
=======
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
>>>>>>> main

		async function myTest() {
			let result;
			try {
				result = await rp.get('https://www.google.com');
			} catch (e) {
				throw e;
			}

<<<<<<< HEAD
			let result2 = await rp.get('https://integratenate.com');
=======
		let uSetSB = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 5);
		uSetSB.text = `$(source-control-view-icon) Update Set: STRY##### - I am about to be 70 characters long to see how this looks.`
		uSetSB.tooltip = "The currently selected update set for the instance of the active editor.";
		uSetSB.show();
		*/
>>>>>>> main

			return result2;


		}


		console.log(JSON.stringify(result.body));

		/*
		var test = vscode.Uri.joinPath(context.extensionUri, 'abc123', 'test123');
		var testStr = test.toJSON();
		console.log(`testStr`, testStr);
		var testObj: vscode.Uri = JSON.parse(JSON.stringify(testStr));
		console.log(`testObj`, testObj);
		var test2 = vscode.Uri.parse(`${testObj.scheme}://${testObj.path}`);
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
