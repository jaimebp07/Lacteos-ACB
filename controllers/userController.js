const User = require('../model/user');

module.exports.mostrar = (req, res) => {
    User.find({}, (error, users) => {
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando los usuarios'
            })
        }
       return res.render('users', {users:users})
    })
}

module.exports.add = (req, res) => {
    console.log(req.body)
    const user = new User({
        identification_document: req.body.documento,
        surnames: req.body.apellidos,
        names: req.body.nombres,
        email: req.body.email,
        role: req.body.rol,
        username: req.body.email,
        password: req.body.documento
    })
    user.save(function(error, user){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el usuario'
            })
        }
        res.redirect('/users')
    })
}



// 15 d
module.exports.validate = (req, res) => {
    console.log("Holaaaa log_in")
    User.find({}, (error, users) => {
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando los usuarios'
            })
        }
    
        let user_name = req.body.user;
        let user_password = req.body.password;
        let session_user;
        users.forEach(function(element) {
            if((element.username == user_name) && (element.password == user_password)){
                console.log("el usuario es " + element.names);
                switch (element.role) {
                    case 'administrador':
                        return res.redirect('/users')
                      break;
                    case 'vendedor':
                        return res.render('seller_session')
                      break;
                    case 'conductor':
                        return res.render('driver_session')
                      break;
                    default:
                      console.log("SE FUE AL DEFAULT")
                      break;
                  }
            }
        });
    })
}

module.exports.log_in = (req, res) => {
    return res.render('log_in')
}

module.exports.register_user = (req, res) => {
    return res.render('register_user')
}

// 15 d
module.exports.delete = (req, res) => {
    const id = req.params.id
    User.findByIdAndDelete(id, (error, user) => {
        if(error){
            return res.status(500).json({
                message: 'Error al eliminar el usuario'
            })
        }
        res.redirect('/users')
    } )
}

module.exports.home = (req, res) => {
    return res.redirect('/')
}

module.exports.edit = (req, res) => {
    const id = req.body.id_edit
    const document = req.body.document_edit
    const surnames = req.body.apellidos_edit
    const names = req.body.nombres_edit
    const email = req.body.email_edit
    const rol = req.body.rol_edit
    User.findByIdAndUpdate(id, {document, surnames, names, email, rol}, (error, user) => {
        if(error) {
            return res.status(500).json({
                message: 'Error editando el usuario'
            })
        }
        res.redirect('/users')
    })
}