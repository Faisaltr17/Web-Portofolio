function toggleDetail(e){
    //tangkap nilai event
    const target=$(e.target)

    //cek class active
    if ($(target).hasClass("active")) {
        $(target).html("More Detail").removeClass("active")
    } else {
        $(target).html("Less Detail").addClass("active")
    }
    const item = $(target).parents(".journey-exp-item")
    const detail = $(item).children(".journey-exp-item-detail")
    $(detail).slideToggle()
}