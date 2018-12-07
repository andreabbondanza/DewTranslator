import Vue from 'vue'

export class DewDictionary
{
    public tag: string = '';
    private dictionary: Map<string, string>;
    constructor(dictionary: any)
    {
        this.dictionary = this.map(dictionary);
    }
    private map(obj: any): Map<string,string>
    {
        let map = new Map<string, string>();
        for (const key in obj)
        {
            const val = obj[key];
            map.set(key, val);
        }
        return map;
    }
    public getDictionary(): Map<string,string> { return this.dictionary; }
}

export class DewTranslator 
{
    private dictionary: DewDictionary;
    private locale: string;
    constructor(dictionary: DewDictionary)
    {
        this.dictionary = dictionary;
        this.locale = this.dictionary.tag;
    }
    
    getString(key:string, values:Array<any>)
    {
        if (values === undefined)
            values = []
        let temp = this.dictionary.getDictionary().get(key) !== undefined ? this.dictionary.getDictionary().get(key) : key;
        if (values.length <= 0)
        {
            let result = ''
            temp = this.dictionary.getDictionary().get(key) !== undefined ? this.dictionary.getDictionary().get(key) : key;
            for (let index = 0; index < values.length; index++) {
                const element = values[index];
                if(temp !== undefined)
                    temp = temp.replace(/{[0-9]+}/i,element);
            }
        }
        return temp
    }
    changeDictionary(dictionary: DewDictionary)
    {
        this.dictionary = dictionary;
        this.locale = dictionary.tag;
    }
}

declare module 'vue/types/vue' {
    interface Vue {
      $translator: any;
    }
  }

function DewTranslatorPlugin<DewTranslator>(vue: typeof Vue, options: DewTranslator): void
{
    vue.prototype.$translator = options    
    console.log(vue)
}


export default DewTranslatorPlugin;