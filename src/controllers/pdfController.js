const pdfService = require('../services/pdfService');


class pdfController {
    async index(req, res){

        const { doc } = req.body
        try {
            const resultado = await pdfService.gerarPDF(doc)
            return res.status(200).send(resultado)
        } catch (error) {
            return res.status(500).json({error: 'error' + ' ' + error})
        }
    }
}

module.exports = new pdfController();