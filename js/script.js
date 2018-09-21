console.log('app is alive');
$('li').on("click", function() {
    let chosedLi = $(this).text();
    console.log('Tuning into channel ' + chosedLi);
    $("#chat h1").html(chosedLi + "&nbsp;<small>by <strong>upgrading.never.helps</strong></small><img src='http://ip.lfe.mw.tum.de/sections/star.png' alt='starred' class='channel-meta'>");
});
$("#emojis-button").on("click", function() {
    $("#emojis").toggle();
});