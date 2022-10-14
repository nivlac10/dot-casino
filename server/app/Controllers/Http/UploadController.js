'use strict'



const Transaction = use('App/Models/Transaction')

class UploadController {
    async uploadFile({ request, response }) {
        const output_dir = 'p/images/';
        const fileKey = 'image';
        
        const image = request.file(fileKey);
        if( image ) {            
            const res = await image.move(output_dir);
            return res;
        }

        return "Valid URL";

    }
}

module.exports = UploadController
