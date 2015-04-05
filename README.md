```javascript
var timer = new Timer(function() {
    console.log('foo');
}, 2000);

// add 1 second to remaining
timer.add(1000);

// pause timeout
timer.pause();

// resume paused timeout
timer.resume();

// destroy timeout
timer.destroy();
```
