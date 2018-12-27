import _Vue from 'vue';
import DewDictionary from './dictionary';
export class DewTranslator
{
  private dictionary: DewDictionary;
  private locale: string;
  constructor(dictionary: DewDictionary)
  {
    this.dictionary = dictionary;
    this.locale = this.dictionary.tag;
  }

  /**
   * Get a string from dictionary
   * @param key - The string key to find
   * @returns The key if not found or the value of the key in dictionary
   */
  public getString(key: string) : string
  {
    return this.dictionary.getDictionary().get(key) !== undefined ? this.dictionary.getDictionary().get(key) + '' : key;
  }
  /**
   * Get a formatted string from dictionary, it use {n} placeholders
   * @param key - The string key to find with values
   * @param values - The array with string to fill the placeholders
   * @returns The key with values if not found or the value of the key in dictionary with values
   */
  public getStringF(key: string, values: string[]) : string
  {
    if (values === undefined)
    {
      values = [];
    }
    let temp = this.dictionary.getDictionary().get(key) !== undefined ? this.dictionary.getDictionary().get(key) : key;
    if (values.length > 0)
    {
      temp = this.dictionary.getDictionary().get(key) !== undefined ? this.dictionary.getDictionary().get(key) : key;
      for (const element of values)
      {
        if (temp !== undefined)
        {
          temp = temp.replace(/{[0-9]+}/i, element);
        }
      }
    }
    return temp + '';
  }
  /**
   * Change in runtime the dictionary
   * @param dictionary the new dictionary
   */
  public changeDictionary(dictionary: DewDictionary)
  {
    this.dictionary = dictionary;
    this.locale = dictionary.tag;
  }
}

declare module 'vue/types/vue' {
  // tslint:disable-next-line:interface-name
  interface Vue
  {
    $translator: DewTranslator;
  }
}

export default function DewTranslatorPlugin<T extends DewTranslator>(vue: typeof _Vue, options?: T): void
{
  vue.prototype.$translator = options;
}
export { DewDictionary as DewDictionary };
