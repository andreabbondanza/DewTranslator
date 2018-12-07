export default class DewDictionary
{
    public tag: string = '';
    private dictionary: Map<string, string>;
    constructor(dictionary: any)
    {
        this.dictionary = this.map(dictionary);
    }
    public getDictionary(): Map<string, string>
    {
        return this.dictionary;
    }
    private map(obj: any): Map<string, string>
    {
        const map = new Map<string, string>();
        for (const key in obj)
        {
            if (obj.hasOwnProperty(key))
            {
                const val = obj[key];
                map.set(key, val);
            }
        }
        return map;
    }
}
