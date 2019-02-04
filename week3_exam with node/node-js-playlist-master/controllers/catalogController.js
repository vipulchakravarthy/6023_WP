var bodyParser = require('body-parser');
var fs = require('fs');
var obj;
fs.readFile('catalog.json', (err, data) => {  
    if (err) throw err;
    obj = JSON.parse(data);
});
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {
   
    app.get('/', function(req, res){
        console.log("received get");
        res.render('catalog', {products: obj.products});
    });

    app.post('/:id', urlencodedParser, function(req, res){
        var i = req.params.id;
        obj.products[i].title = req.body.title;
        obj.products[i].description = req.body.des;
        obj.products[i].quantity = req.body.quant;
        const temp2 = JSON.stringify(obj);
        fs.writeFileSync('catalog.json',temp2);
        return res.redirect('/');
    })

    app.delete('/:item', function(req, res) {
        obj.products = obj.products.filter(function(arr){
            return arr.title.replace(/ /g, "-") !== req.params.item;
        });
        const temp = JSON.stringify(obj);
        fs.writeFileSync('catalog.json',temp);
        const temp1 = fs.readFileSync('catalog.json');
        var dat = JSON.parse(temp1);
        res.json({products : dat.products});
    });
}
