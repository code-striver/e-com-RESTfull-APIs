import multer from "multer";
const StorageConfiguration = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, './uploads')
    },
    filename:(req, file, cb)=>{
        const name = Date.now() + '-' + file.originalname
        cb(null, name)
    }
})

const  uploadMiddleware = multer({storage:StorageConfiguration})
export default uploadMiddleware;