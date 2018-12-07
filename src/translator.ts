import _Vue from 'vue';
import DewDictionary from './dictionary';
export class DewTranslator {
  private dictionary: DewDictionary;
  private locale: string;
  constructor(dictionary: DewDictionary) {
    this.dictionary = dictionary;
    this.locale = this.dictionary.tag;
  }
  public getString(key: string, values: string[]) {
    if (values === undefined) {
      values = [];
    }
    let temp = this.dictionary.getDictionary().get(key) !== undefined ? this.dictionary.getDictionary().get(key) : key;
    if (values.length > 0) {
      temp = this.dictionary.getDictionary().get(key) !== undefined ? this.dictionary.getDictionary().get(key) : key;
      for (const element of values) {
        if (temp !== undefined) {
          temp = temp.replace(/{[0-9]+}/i, element);
        }
      }
    }
    return temp;
  }
  public changeDictionary(dictionary: DewDictionary) {
    this.dictionary = dictionary;
    this.locale = dictionary.tag;
  }
}

declare module 'vue/types/vue' {
  // tslint:disable-next-line:interface-name
  interface Vue {
    $translator: any;
  }
}

export default function DewTranslatorPlugin<T extends DewTranslator>(vue: typeof _Vue, options?: T): void
{
  vue.prototype.$translator = options;
}
export { DewDictionary as DewDictionary };