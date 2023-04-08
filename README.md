```sh
npm i @abasb75/copy-to-clipboard
```

It's work very simple:

```javascript
import copy from '@abasb75/copy-to-clipboard';

copy(
   'my text for copy',
).then(
   ()=>{ console.log('this function execute after successfuly on copy') }, // optional
).catch(
   (err)=> { console.log('this function execute after error on copy') } //optional
);

```

also you can use this method for copy :

```javascript
import copy from '@abasb75/copy-to-clipboard';

copy(
   'my text for copy', // required
   ()=>{ console.log('this function execute after successfuly on copy') }, // optional
   (err)=> { console.log('this function execute after error on copy') } //optional
);


```

if you don'nt need succuss or failure functions :

```javascript
import copy from '@abasb75/copy-to-clipboard';

copy('some text ... ');

```



<p><a href="https://www.npmjs.com/package/@abasb75/copy-to-clipboard/v/0.0.2">older version with smaller size (2.61kb)</a></p>