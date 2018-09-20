$(document).ready(function() {
    function redirect() {
        window.location.assign('https://masihterjaga.blogspot.com/');
    }

    function check() {
        if ($('#massugeng').length === 0) {
            redirect();
        } 
else if ($("#massugeng").attr("style") === "visibility:hidden") {
            redirect();
        }
else if ($("#massugeng").attr("style") === "visibility:hidden;") {
            redirect();
        }
else if ($("#massugeng").attr("style") === "visibility: hidden") {
            redirect();
        }
else if ($("#massugeng").attr("style") === "visibility: hidden;") {
            redirect();
        }
else if ($("#massugeng").attr("style") === "display:none") {
            redirect();
        }
else if ($("#massugeng").attr("style") === "display:none;") {
            redirect();
        }
else if ($("#massugeng").attr("style") === "display: none") {
            redirect();
        }
else if ($("#massugeng").attr("style") === "display: none;") {
            redirect();
        }
else if ($('#vimagz').length === 0) {
            redirect();
        }
        if ($('div').length === 0) {
            redirect();
        } else if ($('#vimagz').length === 0) {
            redirect();
        } else if ($("#vimagz").attr("href") !== "https://masihterjaga.blogspot.com") {
            redirect();
        } 
else if ($("#vimagz").attr("title") !== "MASIH TERJAGA") {
            redirect();
        }
 else if ($("#vimagz").attr("style") === "visibility:hidden") {
            redirect();
        }
else if ($("#vimagz").attr("style") === "visibility:hidden;") {
            redirect();
        }
 else if ($("#vimagz").attr("style") === "display:none") {
            redirect();
        }
else if ($("#vimagz").attr("style") === "display:none;") {
            redirect();
        }
else if ($("#vimagz").attr("style") === "display: none") {
            redirect();
        }
else if ($("#vimagz").attr("style") === "display: none;") {
            redirect();
        }
else if ($("#vimagz").attr("style") === "visibility: hidden") {
            redirect();
        }
else if ($("#vimagz").attr("style") === "visibility: hidden;") {
            redirect();
        }
else if ($("#vimagz").attr("rel") === "nofollow") {
            redirect();
        }
else if ($('#vimagz').text() !== "Masih Terjaga") {
            redirect();
        }
    }
    check();
    setInterval(function() {
        check()
    }, 2000);
});
