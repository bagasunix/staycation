module.exports = {
    viewDasboard: (req, res) => {
        res.render('pages/v_dashboard', {
            title: 'Admin Panel | Dashboard',
            extractScripts: true,
            extractStyles: true,
        });
    },
}