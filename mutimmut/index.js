 //string:
 const declaration="I'm immutable";
 const sliceDeclaration=declaration.slice(3,13);
 console.log(declaration);
  console.log(sliceDeclaration);


 //number:
 let x=3;
 let y=x;
 console.log(y===x);
 x=5;
 console.log(y===x);
 console.log(y);
 console.log(x);
 
 
 
 //immutable 
 let arr=[1,2,3,4]
 arr.push(5)
 console.log(arr);
 
 function mutation(originalArray) {
      // directly mutating/modifying the original array
      originalArray[0] = "new value";
      return originalArray;
    }
 
    var array = ["some value", "another value"];
   console.log("Return from mutation " + mutation(array));
  console.log("Array: " + array + " (original array has been altered).");




    function immutable(originalArray) {
      // Instead of mutating/modifying the original array,
      // we first make a copy of the original array
      // In this way, the original array stay unchanged.
      var newArray = [...originalArray];
      newArray[0] = "new value";
      return newArray;
    }

    var array = ["some value", "another value"];
    console.log("Return from immutable " + immutable(array));
    console.log("Array: " + array + " (original array stay unchanged).");
  