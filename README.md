```sh
npm i @abasb75/copy-to-clipboard
```


It's work very simple:

```javascript
import copy from '@abasb75/copy-to-clipboard';

copy(
   'my text for copy', // required
   ()=>{ console.log('this function execute after successfuly on copy') }, // optional
   (err)=> { console.log('this function execute after error on copy') } //optional
);

copy('some text ... ');

```
