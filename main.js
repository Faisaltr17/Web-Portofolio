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

function showMore(e) {
    const target=$(e.target)
    const moreBtn = document.querySelector('.showMore');

    // Index 0 is already displaying so start from 1.
    let currentIndex = 6;
    
    moreBtn.addEventListener('click', (e) => {
      const demos = [...document.querySelectorAll('.journey-exp-item')];
      
      for (let i = currentIndex; i < currentIndex + 3; i++) {
        if (demos[i]) {
            demos[i].style.display = 'block';
                 
        }
      }
      currentIndex += 3;
      
      
      // If you display all the elements then hide the show more button
      if (currentIndex >= demos.length) {
        $(target).html("Less Experience").addClass("active")                                  
      }
      
    })                                    
}
