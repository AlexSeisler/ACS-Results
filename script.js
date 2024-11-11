

document.addEventListener('DOMContentLoaded', function() {

    // Function to show the popup
    function showPopup() 
    {
        // Show the close button after time
        setTimeout(() => {
            document.querySelector('.close-btn').style.display = 'block';
        }, 5000); 

        setTimeout(() => {
            if (/Mobi|Android/i.test(navigator.userAgent)) {
                // Mobile device

            }
            else
            {
                document.getElementById('youtube-video').style.height = "35vh";
                document.getElementById('microsoft-form').style.height = "65vh";
                document.getElementById('microsoft-form').style.width = "640px";
            }
            
            
        }, 110000); 
    }

    showPopup();

});
var count = 0;
function closePopup() 
{
    
    if (/Mobi|Android/i.test(navigator.userAgent) && count == 0) {
        // Mobile device
        document.getElementById('youtube-video').style.display = "none";
        document.getElementById('microsoft-form').style.height = "90vh";
        document.getElementById('microsoft-form').style.width = "100vw";
        count++;
    }
    else
    {
        document.querySelector('.popup1').style.display = 'none';
    }
}

function initiateCall() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // Mobile device, use the tel link
        window.location.href = "tel:+14847694650";
    } else {
        // Desktop device, redirect to desktop app or call app URL
        window.location.href = "https://teams.microsoft.com/l/meetup-join/273183261025";
    }
}

