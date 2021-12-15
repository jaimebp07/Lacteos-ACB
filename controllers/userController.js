const User = require('../model/user');

module.exports.mostrar = (req, res) => {
    User.find({}, (error, users) => {
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando los usuarios'
            })
        }
        console.log("USUARIOS"+ users.length)
       console.log(users)
       return res.render('users', {users:users})
    })
}

//------------------
/*
const userSchema = mongoose.Schema({
    identification_document: req.body.documento,
    surnames: req.body.apellidos,
    names: req.body.nombres,
    email: req.body.email,
    role: req.body.rol,
    username: req.body.email,
    password: req.body.documento
})

const UserModel = mongoose.model('users', userSchema)

module.exports.mostrar = async () => {
    const users = await UserModel.find();
    console.log(users);
}
*/
//--------------------

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
        res.redirect('/')
    })
}