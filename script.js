$(document).ready(function()
{
    $('.quotes-mobile-slider').slick(
    {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        
    });

    const image1 = document.querySelector('.Hamburger');
    const image2 = document.querySelector('.cross');
    const button = document.querySelector('.navbar-button');
    const slider = document.querySelector('.hamburger-slider');
    const body = document.querySelector('body');

    if (button && image1 && image2 && slider && body) 
    {
        button.addEventListener('click', () => 
        {
            image1.classList.toggle('hidden');
            image2.classList.toggle('hidden');
            slider.classList.toggle('isopen');
            body.classList.toggle('no-scroll');
        });
    }
    
});

$(document).ready(function()
{
    const scrollContainer = $('.div12');
    const cards = $('.testimonial-card');
    const dotsContainer = $('.testimonial-dots');

    if (scrollContainer.length > 0 && cards.length > 0 && dotsContainer.length > 0) 
    {   
        cards.each(function(index) {
            const dot = $('<span class="dot"></span>').on('click', function() 
            {
                const cardToScrollTo = cards.eq(index);
                const container = scrollContainer[0]; 
                const scrollLeft = cardToScrollTo.position().left + container.scrollLeft;

                container.scrollTo(
                {
                    left: scrollLeft,
                    behavior: 'smooth' 
                });
            });
            dotsContainer.append(dot);
        });

        const dots = dotsContainer.find('.dot');
        
        
        const observer = new IntersectionObserver((entries) => 
        {
            entries.forEach(entry => 
            {
                if (entry.isIntersecting) 
                {
                    
                    const index = cards.index(entry.target);
                    
                    dots.removeClass('active');
                    dots.eq(index).addClass('active');
                }
            });
        }, 
        { 
            root: scrollContainer[0], 
            threshold: 0.6 
        });
        cards.each(function() 
        {
            observer.observe(this);
        });
    }

    const allFaqs = $('.faqs');
    allFaqs.on('click', function() 
    {
        const clickedFaq = this;
        allFaqs.each(function() 
        {
            if (this !== clickedFaq) 
            {
                $(this).removeAttr('open');
            }
        });
    });

});



