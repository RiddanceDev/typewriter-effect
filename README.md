# typewriter-effect
A pure javascript powered typewriter effect that supports multiple font styles with multiple options. 

# Place the line of code below at the end of body:
```html
<script src="https://cdn.jsdelivr.net/gh/RiddanceDev/typewriter-effect/index.js"></script>
```

# You can also change the following options (declare before importing):
```html
<script>
    var typeWriteOptions = {
        "deleteSpeed": 50, // 0.2 seconds between deleting each character
        "typeSpeed": 100, // 0.4 seconds between each character
        "addRandomToType": false, // add a random amount of time to delete & type speeds
        "blinkSpeed": 600, // how often the blinker changes from blinkerColor to transparent
        "blinkerEnabled": true, // should a blinker be added after the inner text
        "beforeDeleteDelay": 1000 // once fully typed, 1 second until it deletes 
    };
</script>
```

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Typewriter Effect</title>
    </head>
    <body>
        <h1 class="typewriter-effect">Supportive of any font-size.</h1>
        <h2 style="color: red;" class="typewriter-effect">Supportive of any text color</h2>
        <p style="color: blue;" class="typewriter-effect">There is a lot of options...</p>
        <a href="https://riddance.cc/" class="typewriter-effect">RIDDANCE.CC for freelance...</a>
        <script>
            var typeWriteOptions = {
                "deleteSpeed": 50, // 0.2 seconds between deleting each character
                "typeSpeed": 100, // 0.4 seconds between each character
                "addRandomToType": false, // add a random amount of time to delete & type speeds
                "blinkSpeed": 600, // how often the blinker changes from blinkerColor to transparent
                "blinkerEnabled": true, // should a blinker be added after the inner text
                "beforeDeleteDelay": 1000 // once fully typed, 1 second until it deletes 
            };
        </script>
        <script src="https://cdn.jsdelivr.net/gh/RiddanceDev/typewriter-effect/index.js"></script>
    </body>
</html>
```
