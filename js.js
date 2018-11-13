// buttons
const $entersite = $("#enter-site");
const $intronav = $("#go-to-intro");
const $aboutnav = $("#go-to-about");
const $showsnav = $("#go-to-shows");
const $videosnav = $("#go-to-videos");
const $contactnav = $("#go-to-contact");

const $show1nav = $("#go-to-show1");
const $show2nav = $("#go-to-show2");
const $show3nav = $("#go-to-show3");

// sections
const $intro = $(".intro");
const $about = $(".about");
const $shows = $(".shows");
const $videos = $(".videos");
const $contact = $(".contact");

function scrollTo(s)
{
      showHideMobileNav();
    $('body,html').animate({
        scrollTop: s.offset().top
    }, 700);
}
const $textShow = [`Do you need something exciting for your event? If the answer is yes, then you are on a right website! Łukasz's juggling shows are perfect for festivals, corporate events, tv shows, weddings, birthdays, parties and many more.`, `A new 5 min ball juggling. More info soon. Premiere: October 2018`, `LED 5 min indoor juggling show. Premiere: October 2018.`];

function changeShow(s)
{
      for (let i=1; i<=3; i++)
      {
            document.getElementById("sh").classList.remove(`shows-desktop-img${i}`);
            document.getElementById(`go-to-show${i}`).style.color = 'white';
      }
      document.getElementById("sh").classList.toggle(`shows-desktop-img${s}`);
      document.getElementById(`shows-text`).innerText = $textShow[s-1];
      document.getElementById(`go-to-show${s}`).style.color = 'yellow';
}

$entersite.on("click", function(){scrollTo($about)});
$intronav.on("click", function(){scrollTo($intro)});
$aboutnav.on("click", function(){scrollTo($about)});
$showsnav.on("click", function(){scrollTo($shows)});
$videosnav.on("click", function(){scrollTo($videos)});
$contactnav.on("click", function(){scrollTo($contact)});

$show1nav.on("click", function(){changeShow(1)});
$show2nav.on("click", function(){changeShow(2)});
$show3nav.on("click", function(){changeShow(3)});

changeShow(1);

function showHideMobileNav() {
      document.getElementById("nav-menu").classList.toggle('hidden-menu');
      document.getElementById("nav-menu").classList.toggle('displayed-menu');
}

$("#hamburger").on('click', showHideMobileNav);


