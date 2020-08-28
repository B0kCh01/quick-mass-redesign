// Written by b0kch01
// 8-28-2020

$('input').focus(function() {
    $(this).attr('placeholder', 'Element, Compound, Name')
}).blur(function() {
    $(this).attr('placeholder', 'Search')
})