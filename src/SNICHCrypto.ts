import * as crypto from 'crypto';
import machineID = require('node-machine-id');

export class SNICHCrypto {


    constructor() {
    }

    encrypt(value: string) {
        let key = this.getKey();
        let encryptedParts = [];
        let iv = this.getIV();
        let cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
        var encrypted = Buffer.concat([cipher.update(value), cipher.final()]);

        return {
            iv: iv.toString('hex'),
            value: encrypted.toString('hex')
        };
    }

    decrypt(encryptedValue: string, initVector: string): string | undefined {
        let iv = Buffer.from(initVector, 'hex');

        let decryptedParts = [];
        let key = this.getKey();

        if (key && iv) {
            let decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
            decryptedParts.push(decipher.update(Buffer.from(encryptedValue, 'hex')));
            decryptedParts.push(decipher.final());
            return decryptedParts.join("");
        } else {
            return;
        }
    }


    private getKey(): Buffer {
        return crypto
            .createHash("sha256")
            .update(machineID.machineIdSync(true))
            .digest();
    }


    private getIV(): Buffer {
        return crypto.randomBytes(16);
    }
}