function test() {
    jQuery(document).ready(function(){
        $('.data').innerHTML('<script>alert("XSS");</script\>');
    })
    //document.getElementById("data").innerHTML = '<script>alert("XSS");</script\>';
    document.getElementById("data").innerHTML = '<img src=x onerror=alert(1);>';
}