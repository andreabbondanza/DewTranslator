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
        <h1>{{$translator.getString(`Hello`)}}</h1>
        <h2>{{$translator.getString(`Your name is {0} {1}`, ['Carriage','Kato'])}}</h2>
  </div>
```