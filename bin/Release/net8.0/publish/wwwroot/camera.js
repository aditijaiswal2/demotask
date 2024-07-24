async function startCamera(facingMode) {
    const constraints = {
        video: {
            facingMode: facingMode
        }
    };

    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const videoElement = document.getElementById('video');
        videoElement.srcObject = stream;
        videoElement.play();
    } catch (error) {
        console.error("Error accessing camera: ", error);
    }
}

function startFrontCamera() {
    startCamera("user");
}

function startBackCamera() {
    startCamera("environment");
}