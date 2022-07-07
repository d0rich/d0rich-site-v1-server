const db_name = "DorichProdSite";

// -1 : Не найдено совпадений;
// -2 : Ошибка ID



module.exports = function(app, db) {
    app.get('/getHomePageData', async(request, response) => {
        console.log(request.param("language"));
        try {
            var lang = request.param("language");
            var detail = { 'language': lang };
            db.db(db_name).collection("HomePageData").findOne(detail, (error, docs) => {
                if (docs == null) response.send("-1");
                else response.send(docs);
            });
        } catch (error) {
            response.send("-2");
        }
    });
}