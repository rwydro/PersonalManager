export class SerializationHelper {
  static toInstance<T>(obj: T, json: string): T {
    const jsonObj = JSON.parse(json);

    if (typeof obj['fromJSON'] === 'function') {
      obj['fromJSON'](jsonObj);
    } else {
      // tslint:disable-next-line:forin prefer-const
      for (let propName in jsonObj) {
        obj[propName] = jsonObj[propName];
      }
    }

    return obj;
  }
}

interface IExceptionBase {
  Status: number;
  Name: string;
}

export class ExceptionModels {
  Name: string;
  Data: object;
}
