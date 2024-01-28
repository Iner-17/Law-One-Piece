const roomEffect = document.getElementsByClassName('room-effect')[0];


    function room() {
            roomEffect.style.width = "100%";
            roomEffect.style.height = "100%";
            roomEffect.style.borderRadius = '0';
        
            new Audio("/images/sound effect.mp3").play();


            setTimeout(() => {
                roomEffect.style.width = "0.01%";
                roomEffect.style.height = "0.01%";
                roomEffect.style.borderRadius = '50%';
            }, 5000)
    }

