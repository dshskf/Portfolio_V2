$(document).ready(function () {
    $(window).bind('load', function () {
        // alert("Loaded")
    })

    let skillIndex = 0,
        cardTracker = {}


    $('.mp-navbar p, .mp-navbar i').click(function () {
        // var link = document.createElement('a');
        // link.href = 'https://drive.google.com/file/d/1YgnLGE6m-F8qMYK5EwONM0dqLooXJ2z3/view?usp=sharing';
        // link.download = 'file.pdf';
        // link.dispatchEvent(new MouseEvent('click'));
        // $('.section--education').scrollIntoView();   
        const clickedItem = $(this).text() ? $(this).text().toLowerCase() : $(this).attr('data-icon')

        document.getElementById(clickedItem).scrollIntoView({ behavior: "smooth" });
    })

    $('.mp-btn div').click(function () {
        const url = $(this).index() === 0 ?
            'https://drive.google.com/file/d/1YgnLGE6m-F8qMYK5EwONM0dqLooXJ2z3/view?usp=sharing'
            :
            'https://wa.me/6282111404545'

        window.open(url, '_blank').focus();
        return false;
    })



    const handlerSkillsNav = num => {
        if (skillIndex + num < 0 || skillIndex + num > Object.keys(skillsData).length - 1) {
            return false
        }

        skillIndex += num

        let newElement = ''
        Object.keys(skillsData).forEach((key, i) => {
            if (i === skillIndex) {
                $('.skills-title h1').text(key[0].toUpperCase() + key.substring(1, key.length))

                skillsData[key].forEach((skill, j) => {
                    newElement += `
                        <div class="sc-progress">                            
                            <p>${skill.title}</p>              
                            <div class="progress-bar bar-${skill.percentage}"></div>      
                        </div>
                    `
                })
            }
        })
        $('.skills-content').empty()
        $('.skills-content').append(newElement)
    }

    (() => {
        handlerSkillsNav(0)
    })()

    $('.container').on('scroll', e => {
        let position = e.target.scrollTop
    })


    let isAnimated = false
    $('#btn-prev').click(function () {
        if (skillIndex - 1 < 0) {
            return false
        }

        if (!isAnimated) {
            isAnimated = true
        } else {
            return false
        }

        $('.skills-content').css('transform', 'translateX(200px)')
        $('.skills-content').css('filter', 'opacity(0)')

        if (isAnimated) {
            setTimeout(() => {
                handlerSkillsNav(-1)
                $('.skills-content').css('transform', 'translateX(0)')
                $('.skills-content').css('filter', 'opacity(1)')

                setTimeout(() => {
                    isAnimated = false
                }, 1000)
            }, 500)
        }
    })

    $('#btn-next').click(function () {
        if (skillIndex + 1 > Object.keys(skillsData).length - 1) {
            return false
        }

        if (!isAnimated) {
            isAnimated = true
        } else {
            return false
        }

        $('.skills-content').css('transform', 'translateX(-200px)')
        $('.skills-content').css('filter', 'opacity(0)')

        if (isAnimated) {
            setTimeout(() => {
                handlerSkillsNav(1)
                $('.skills-content').css('transform', 'translateX(0)')
                $('.skills-content').css('filter', 'opacity(1)')

                setTimeout(() => {
                    isAnimated = false
                }, 1000)
            }, 500)
        }

    })


    $('.exp-card').click(function () {
        const clickedCard = $(this).children('.company').val()
        if (cardTracker[clickedCard]) {
            cardTracker[clickedCard] = !cardTracker[clickedCard]
            $(this).children('.ec-content').children('.ec-content-details').css('transform', 'translateY(-100%)')
            return false
        }

        cardTracker[clickedCard] = true
        $(this).children('.ec-content').children('.ec-content-details').css('transform', 'translateY(0)')
    })
})


 // $('.about-skill').trigger('click');

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