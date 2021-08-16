$(document).ready(function () {
    (() => {
        var c = document.getElementById("education");
        var ctx = c.getContext("2d");
        ctx.fillStyle = "#fca311"
        ctx.font = "80px sans-serif";
        ctx.fillText("Hello World", 10, 50);
    })()



    let isFocus = false,
        countPage = 1

    $('.container').on('scroll', e => {
        let position = e.target.scrollTop

        console.log(window.innerHeight)

    })

})


//                let appendText = () => {
        //                    let words = "Welcome...",
        //                        wordIndex = 0;
        //                    let func = () => {
        //                        $('.welcome-h1').html(words.substr(0, wordIndex))
        //                        wordIndex += 1
        //                        if (wordIndex > words.length) {
        //                            clearInterval(ivl)
        //                        }
        //                    }
        //
        //                    let ivl = setInterval(func, 200)
        //                    let clears = () => {
        //                        clearInterval(ivl)
        //                    }
        //                }
        //
        //                setTimeout(() => {
        //                    $('.section--welcome').hide()
        //                }, 9500)

    //            $(".about-card").click(() => {
    // document.documentElement.style.setProperty('--blue', 'red');
    // })
    //            
    // const section_about = $('.section--about'),
    //     section_edu = $('.section--education'),
    //     section_skill = $('.section--skill')

    // let iPosition = 0,
    //     iSkill = 0,
    //     start = 820,
    //     scrolled = false;

    // $('.container').on('scroll', e => {
    //     let position = e.target.scrollTop

    //     // Main Panel   
    //     if (Math.abs(iPosition) <= 45) {
    //         // If more than Education
    //         if (position > start) {
    //             scrolled = false
    //             iPosition = -(position - start) / 18;
    //             $('.main-panel').show()
    //         }

    //         // If less than education and postion not 0
    //         if (position < start && iPosition < 0) {
    //             iPosition = 0
    //         }

    //         if (Math.abs(iPosition) > 45 && !scrolled) {
    //             scrolled = true
    //             $('.container').scrollTop(section_about.outerHeight() + section_edu.outerHeight() + 160)
    //         }
    //         $('.section--skills').css('transform', `translateX(${iPosition / 1.05}vw)`)
    //         $('.main-panel').css('transform', `translateX(${iPosition}vw)`)
    //     } else {
    //         iPosition = -(position - start) / 18;
    //         $('.section--skills').css('transform', `translateX(-45vw)`)
    //         $('.main-panel').hide()
    //     }
    //     // Skill                

    // })