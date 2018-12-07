# Dew Translator
Typescript vue localization plugin.

If you need to localize your Vue's application, you can use this Plugin

### Install

```bash
npm install dewtranslator --save
```

### Import in Vue
In your entry set:
```typescript
import Vue from 'vue';
import DewTranslatorPlugin, { DewTranslator, DewDictionary } from 'dewtranslator';
import ItalianDictionary from './local/it-it' // --> Our dictionary, see below
Vue.use<DewTranslator>(DewTranslatorPlugin, new DewTranslator(new ItalianDictionary()));

```
### How to use
In your components just do

```html
  <div>
        <h1>{{$translator.getString(`Hello`)}}</h1> // --> In dictionary Hello is 'Ciao', so it will print 'Ciao'
        <h1>{{$translator.getString(`Halo`)}}</h1> // --> In dictionary Halo doesn't exists, so it will print 'Halo?
        <h2>{{$translator.getString(`Your name is {0} {1}`, ['Carriage','Kato'])}}</h2> // -> This will print 'Your name is Carriage Kato' or if there is an equivalent in dictionary, for example: 'Il tuo nome è Carriage Kato'
  </div>
```

### Define dictionaries
This is an example of a dictionary (the import './local/it-it' above)

```typescript
import { DewDictionary } from 'dewtranslator'

export default class Italian extends DewDictionary
{
    constructor()
    {
        let dictionary = {
            'Hello': 'Ciao',
            'Your name is {0}' : 'Il tuo nome è {0}'
        };
        super(dictionary);
        super.tag = 'it-it';
    }
}
```

## Know Issues


## Other
[andrewdev.eu](https://www.andrewdev.eu)