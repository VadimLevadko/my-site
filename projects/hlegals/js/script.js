$(document).ready(function () {
    $(".burger").click(function(e) {
        $(this).toggleClass("open")
    })
    
    $(".open-modal").click(function(e) {
        e.preventDefault();
        $(".modal-wrapper").addClass("active")
    })
    
    $(".modal-wrapper, .modal-window .close").click(function(e) {
        if (e.target === this) {
            $(".modal-wrapper").removeClass("active")
        }
    })
})