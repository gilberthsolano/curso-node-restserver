const mongoose = require('mongoose')



const dbConnection =async()=>{


    try{
        await mongoose.connect(process.env.MONGO_CNN, {
            useNewUrlParse:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false


        })

        console.log('Base de datos online')

    }catch(error){
            throw new Error('Error a la hora de iniciar la base de datos')
    }
}


module.exports={
    dbConnection
}