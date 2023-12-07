'user string'
var Article = require('../models/article');
var validator = require('validator');

var controller = {

    save: (req, res) => {
        var error = false;
        var msg = '';
        try {
            var params           = req.body;
            var validate_title   = validator.isEmpty(params.title);
            var validate_content = validator.isEmpty(params.content);

        } catch {
            error = true;
            msg = 'faltan campos en la petción'
        }

        //console.log(validate_name , validate_surname, validate_emial, validate_password);
        if (validate_title) {
            error = true
            msg = 'el titulo esta vacio'
        }
        if (validate_content ) {
            error = true
            msg = 'el content esta vacio'
        }
        if( error ){
            return res.status(200).send({
                status : 'error',
                msg    : "parametro incorrecto "+ msg,
                params
            });
        }

        if(!error){
            var article =new Article();

            article.title   = params.title;
            article.content = params.content;
            article.image   = null;

            article.save((err,articleStored) =>{
                if(err || !articleStored){
                    return res.status(404).send({
                        status : 'error',
                        msg    : "error en save",
                        params
                    });
                }

                return res.status(200).send({
                    status : 'success',
                    msg    : "article store",
                    params
                });
            })
        }
       
    },
    getArticles(req, res ){
        return res.status(200).send({
            status : 'success',
            msg    : "Aticulos",
            params
        });
    }
 

}

module.exports = controller