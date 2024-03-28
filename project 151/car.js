AFRAME.registerComponent(
  "base",{
     init:function(){
      var base = document.createElement("a-entity");

      base.setAttribute("gltf-model","./base/scene.gltf")
      base.setAttribute("position",{x:0,y:0.75,z:-5}) 
      base.setAttribute("rotation",{x:270,y:0,z:0})



      var sceneEl = document.querySelector("a-scene");

      sceneEl.appendChild(base); 
     }
  }
);
AFRAME.registerComponent(
  "car",{
     init:function(){
      var car = document.createElement("a-entity");

      car.setAttribute("gltf-model","./car/scene.gltf");
      car.setAttribute("position",{x:-4,y:0.00000000001,z:-8});
      car.setAttribute("rotation",{x:0,y:90,z:0});
      car.setAttribute("scale",{x:7, y:2, z:2});

      

      var sceneEl = document.querySelector("a-scene");

      sceneEl.appendChild(car); 
     }
  }
);