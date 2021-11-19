module.exports = {
    viewDasboard: (req, res) => {
        res.render('pages/dashboard', {
            title: 'Admin Panel | Dashboard',
            extractScripts: true,
            extractStyles: true,
        });
    },
}