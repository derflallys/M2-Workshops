module.exports = function(app,InMemoryWorkshop,ejs) {
    app.get('/', function (req, res) {
        InMemoryWorkshop.getWorkshopList()
            .then(workshops => {
                res.render("index", {
                    workshops: workshops
                })
            })
    })

    app.get('/workshop', function (req, res) {
        res.render('workshop')
    })


    app.get('/workshop/:name', function (req, res) {
        const workshopName = req.params.name
        InMemoryWorkshop.getWorkshopByName(workshopName)
            .then(workshop => {
                res.render('ejs/workshop', workshop)
            })
            .catch(e => ejs.send(e.message))
    })
}