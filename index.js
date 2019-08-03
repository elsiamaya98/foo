let express = require('express');
const PORT = 80;
let app = express();
app.listen(PORT, function() {
    console.log("Mi servidor http poniendose en marcha " + PORT + "...");
});
app.get('/foo', function(req, res) {
    console.log('Hola, yo soy Foo.');
});