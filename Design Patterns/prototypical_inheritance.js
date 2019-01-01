/*

If we wish to implement the Prototype pattern without directly using Object.create,
we can simulate the pattern as per the above example as follows:

*/

var vehiclePrototype = {

  init: function ( carModel ) {
    this.model = carModel;
  },

  getModel: function () {
    console.log( "The model of this vehicle is.." + this.model);
  }
};


function vehicle( model ) {

  function F() {};
  F.prototype = vehiclePrototype;

  var f = new F();

  f.init( model );
  return f;

}

var car = vehicle( "Ford Escort" );
car.getModel();

// https://www.safaribooksonline.com/library/view/learning-javascript-design/9781449334840/ch09s07.html
