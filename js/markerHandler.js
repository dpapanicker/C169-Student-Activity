AFRAME.registerComponent("markerhandler", {
    init: async function () {
  
     
  
     
    },
    handleMarkerFound: function () {
      // Changing button div visibility
     
  
      // Handling Click Events
      ratingButton.addEventListener("click", function () {
        swal({
          icon: "warning",
          title: "Rate Dish",
          text: "Work In Progress"
        });
      });
  
      orderButtton.addEventListener("click", () => {
        swal({
          icon: "https://i.imgur.com/4NZ6uLY.jpg",
          title: "Thanks For Order!",
          text: "Your order will be served soon at your table!"
        });
      });
    },
  
    handleMarkerLost: function () {
      // Changing button div visibility
     
    }
  });
  