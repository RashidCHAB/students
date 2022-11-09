import Student from "../models/Student.model.js"
export default {
    getStudents: function (req, res) {
        Student.find().then((Student) => { res.json(Student) })
    },

    addStudents: function (req, res) {
        Student.create({
            "name": req.body.name,
            "phone": req.body.phone,
            "age": req.body.age
        }).then((Student) => {
            res.json(Student)
        })
    },

    updateStudents: function (req, res) {
        res.json("Категория обновлена")
    },

    deleteStudents: function (req, res) {
        Student.findByIdAndRemove(req.params.id).then(() => {
            res.json('Студент удалён')
        })
    },
    updateStudents: function (req, res) {
        Student.findByIdAndUpdate(req.params.id,
            { name: req.body.name,
              phone: req.body.phone,
              age: req.body.age },
            { new: true }).then((Student) => {
                res.json(Student)
            })
    }

}