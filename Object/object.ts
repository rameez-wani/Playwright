export class RandomData {
  static randomAlphaNumeric(length: number = 5): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

   static randomNumber(length: number = 10): string {
    let result = '';
    const digits = '0123456789';

    for (let i = 0; i < length; i++) {
      result += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    return result;
  }

    static randomEmail(): string {
    const localPart = this.randomAlphaNumeric(10); // 10 characters
    const domain = '@yopmail.com';
    const timestamp = Date.now(); // ensures uniqueness if needed
    return `${localPart}${timestamp}@yopmail.com`;
  }


}

