
function initiateCall() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // Mobile device, use the tel link
        window.location.href = "tel:+14847694650";
    } else {
        // Desktop device, redirect to desktop app or call app URL
        window.location.href = "https://teams.microsoft.com/l/meetup-join/273183261025";
    }
}
