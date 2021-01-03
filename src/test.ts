import * as vscode from 'vscode';
import { extPath} from './extension';

export class Test {
    constructor(){}

    testFunc(){
        console.log('TEST FUNC!');
        console.log('EXTENSION CONTEXT: ', extPath.extensionUri);
        
    }
}