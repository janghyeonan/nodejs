function add(a, b, callback) {
    var result  = a + b;
    callback(result);
    
    var history = function(){
        return a+ '+' +b + '=' + result;
    };
    return history;
}

var add_history = add(20, 20, function(result){
    console.log(result);
});
