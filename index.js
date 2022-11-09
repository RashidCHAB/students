import express from "express";
import mongoose from "mongoose";
import routes from './routes/index.js'

const app = express()

mongoose.connect("mongodb+srv://RashidChab:123@cluster0.4agwvmc.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Успешно соединились с сервером MongoDB'))
    .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))


    
app.use(express.json())
app.use(routes)

app.listen(3000, () => {
    console.log('Приложение запущено по ссылке: http://localhost:3000')
})