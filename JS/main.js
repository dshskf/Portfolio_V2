$(document).ready(function () {
    (function () {
        for (var x = 0; x < 1; x++) {
            console.log(x)
        }
    })()


    let skillIndex = 0,
        cardTracker = {}


    $('.nav-link').click(function () {
        // var link = document.createElement('a');
        // link.href = 'https://drive.google.com/file/d/1YgnLGE6m-F8qMYK5EwONM0dqLooXJ2z3/view?usp=sharing';
        // link.download = 'file.pdf';
        // link.dispatchEvent(new MouseEvent('click'));
        // $('.section--education').scrollIntoView();        
        document.getElementById($(this).text().toLowerCase()).scrollIntoView({ behavior: "smooth" });

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
            }, 1000)
        }

    })
    $('#btn-next').click(function () {
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
            }, 1000)
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
        // let c = document.getElementById("education"),
        //     cWidth = c.getBoundingClientRect().width,
        //     cHeight = c.getBoundingClientRect().height

        // c.width = cWidth;
        // c.height = cHeight;

        // var ctx = c.getContext("2d");
        // ctx.font = "40px sans-serif";
        // let charData = ['◻', '△', 'O', 'X'],
        //     colorData = ['#CE9EC1', '#76C6B2', '#E85636', '#919FCC']

        // for (let i = 0; i < 10; i++) {
        //     let random_w = Math.random() * cWidth,
        //         random_h = Math.random() * cHeight,
        //         shuffle = Math.floor(Math.random() * 3)
        //     ctx.beginPath();
        //     ctx.lineWidth = "4";
        //     ctx.strokeStyle = '#ffffff';
        //     // ctx.fillText(String.fromCharCode(Math.floor((Math.random() + (Math.random() * 100)) * 120)), random_w, random_h);
        //     ctx.arc(random_w, random_h, 1, 0, 2 * Math.PI, false);
        //     ctx.shadowBlur = 8;
        //     ctx.shadowColor = '#ffffff';
        //     // ctx.fillStyle = this.color;
        //     ctx.fillStyle = colorData[shuffle]
        //     // ctx.fillText(charData[shuffle], random_w, random_h);
        //     ctx.stroke();
        // }



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