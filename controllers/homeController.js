export const homeControl = async (req, res) => {
    res.render("Home", {
        title: "skaters",
        skaters: []
    });
}