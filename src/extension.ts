// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { getServers } from 'dns';
import * as vscode from 'vscode';
import { Test } from './test';
import * as rp from 'request-promise-native';
import { SNICHCrypto } from './SNICHCrypto';
import { sep as pathSep } from 'path';

import { ClassB } from './classB';

export let extPath: vscode.ExtensionContext;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {

	extPath = context;
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "nate-test" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('nate-test.helloWorld', async () => {
		// The code you place here will be executed every time your command is executed

		/*

		console.log('ClassB.test()', new ClassB('test').test());
		console.log('ClassB.test2()', new ClassB('test2').test2());


		console.log('about to init SNICHCrypto');
		let crypt = new SNICHCrypto();

		console.log('about to encrypt');
		let encrypted = crypt.encrypt('hello world');

		console.log('about to decrypt!', encrypted);
		let decrypted = crypt.decrypt(encrypted.value, encrypted.iv);
		console.log(decrypted);
*/


		if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0) {
			let wsRoot = vscode.workspace.workspaceFolders[0].uri;
			console.log('wsRoot URI: ', wsRoot);
			let wsRootStr = wsRoot.toString(true);
			console.log('wsRootStr: ', wsRootStr);

			var test = vscode.Uri.joinPath(wsRoot, 'abc123', 'test123');
			console.log('vscode uri join path: ', test);
			var testStr = test.toString(true);
			console.log(`testStr`, testStr);

			var strippedTest = testStr.replace(wsRootStr, '');
			console.log('strippedTest: ', strippedTest);
			console.log('pathSep:', pathSep);
			var strippedTestPathParts = strippedTest.split('/');
			console.log("strippedTestPathParts: ", strippedTestPathParts);

			console.log(vscode.Uri.joinPath(wsRoot, ...strippedTestPathParts));
		}





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


		async function myTest() {
			let result;
			try {
				result = await rp.get('https://www.google.com');
			} catch (e) {
				throw e;
			}

			return result2;


		}


		console.log(JSON.stringify(result.body));

		



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
		*/
	});


	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
