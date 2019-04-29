/*
* @adonisjs/core
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

export type EncryptionConfig = {
  key: string,
  hmac: boolean,
  reviver: (key: string, value: string) => any,
}

export interface EncryptionContract {
  encrypt (payload: any): string,
  decrypt (payload: string): any,
  newInstance (options?: Partial<EncryptionConfig>): EncryptionContract,
  base64Encode (arrayBuffer: ArrayBuffer | SharedArrayBuffer): string,
  base64Encode (data: string, encoding?: BufferEncoding): string,
  base64Decode (encoded: string | Buffer, encoding?: BufferEncoding): string,
}