export class HttpResponseBuilder {
    static buildOK(res, data) {
        res.status(200).json(data);
    }

    static buildNoContent(res) {
        res.status(204).json({});
    }
}
