module.exports ={
  setMeal: function(req,res){
    var meals=['kebab','nasi goreng','ayam bawang','nila bakar','ayam rica-rica']
    res.json(meals)
  }
}
