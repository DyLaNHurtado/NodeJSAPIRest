function getHello(req,res){
    console.log(res.statusCode);
    res.send({
        msg: "Controllers Todo esta ok!"
    });
}
module.exports = {
    getHello,
}