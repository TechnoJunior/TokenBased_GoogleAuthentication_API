/// <reference path="jquery-1.10.2.js" />
function getAccessToken() {

    if (location.hash) {
        if (location.hash.split('access_token=')) {
            var accessToken = location.hash.split('access_token=')[1].split('&')[0];
            if (accessToken) {
                isUserRegistered(accessToken);
            }
        }
    }
}





function isUserRegistered(accessToken) {
    $.ajax({
        url: '/api/Account/UserInfo',
        method: 'GET',
        headers: {
            'content-type': 'application/JSON',
            'Authorization': 'Bearer ' + accessToken
        },
        success: function (response) {
            if (response.HasRegistered) {
                alert("HasRegistered test");
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('userName', response.Email);
                sessionStorage.setItem("accessToken", accessToken);
                window.location.href = "Data.html";
            }
            else {
                signupExternalUser(accessToken);
            }
        }
    });
}

function signupExternalUser(accessToken) {
    $.ajax({
        url: '/api/Account/RegisterExternal',
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },
        success: function () {
            window.location.href = "/api/Account/ExternalLogin?provider=Google&response_type=token&client_id=self&redirect_uri=http%3A%2F%2Flocalhost%3A59961%2fLogin.html&state=C_psnVI_WBD6pelXKFiK2pxyzgdbkSiAqQycmXIECFQ1";
        }
    });
}
