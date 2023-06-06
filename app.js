const observer = new IntersectionObserver((entries) =>{

    entries.forEach((entry) => {

        console.log(entry)

        if(entry.isIntersecting){
            entry.target.classList.add('shows');
        } else {
            entry.target.classList.remove('shows')
        }



    });

});


const hiddenElements = document.querySelectorAll('.hiddeen');

hiddenElements.forEach((el) => observer.observe(el));