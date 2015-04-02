```javascript
var timer = new Timer(function() {
    console.log('foo');
}, 2000);

timer.add(1000);

timer.pause();

timer.resume();
```