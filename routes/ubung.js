var dbhandler = require('./dbhandler');

exports.ubung = function(req, res){
    res.render('ubung');
    //dbhandler.getub(function (ubs) {res.render('ubung', {'ubs': ubs[1]});});
};

exports.neu = function(req, res){
    res.render('neuanlegen');
};

exports.createUebung = function(req, res){
    var satz = req.body.inhalt.split("|");

    dbhandler.savenew(req.body.typ, satz, req.body.name);
    res.redirect('/ubshow');
};

exports.ubshow = function(req, res){
    dbhandler.getub(function (ubs) {res.render('ubshow', {'ubs': ubs});});
};

exports.deleteub = function(req, res){
    dbhandler.delUb(req.params.id);
    res.redirect('/ubshow');
};

exports.get_china = function(req, res){
    res.render('china');
};

exports.get_china2 = function(req, res){
    res.render('china2');
};
exports.get_china3 = function(req, res){
    res.render('china3');
};
exports.get_glueck = function(req, res){
    res.render('glueck');
};

exports.get_glueck_gedicht = function(req, res){
    res.render('glueck_gedicht');
};

exports.get_handy = function(req, res){
    res.render('handy');
};

exports.get_ersti = function(req, res){
    res.render('ersti');
};

exports.get_ersti_task1 = function(req, res){
    res.render('ersti_task1');
};
exports.get_ersti_task2 = function(req, res){
    res.render('ersti_task2');
};
exports.get_ersti_task3 = function(req, res){
    res.render('ersti_task3');
};
exports.get_ersti_task4 = function(req, res){
    res.render('ersti_task4');
};
exports.get_veggieday = function(req, res){
    res.render('veggieday');
};

exports.get_wertewandel = function(req, res){
    res.render('wertewandel');
};

exports.get_generationen = function(req, res){
    res.render('generationen');
};

exports.get_generationen2 = function(req, res){
    res.render('generationen2');
};
exports.get_zukunft = function(req, res){
    res.render('zukunft');
};