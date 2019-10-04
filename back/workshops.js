module.exports = function(app,InMemoryWorkshop,ejs){

    app.post('/workshop', function (req, res) {
        const name = req.body.name
        const description = req.body.description
        InMemoryWorkshop.addWorkshop(name, description).then(() => {
            InMemoryWorkshop.getWorkshopList()
                .then(workshops => {
                    res.render("index", {
                        workshops: workshops
                    })
                })
        })
            .catch(e =>res.send(e.message))
    });

    app.post('/remove-workshop', function (req, res) {
        res.status(500).send("TODO")
    });

    app.post('/update-workshop', function(req, res) {
        res.status(500).send("TODO")
    });
}