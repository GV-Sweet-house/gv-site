window.onload = function () {

    google.accounts.id.initialize({
    client_id: "555904636794-1rn60kf5sgu66lq88gj3e5adv4qm9vmq.apps.googleusercontent.com",
    callback: handleCredentialResponse
});

    document.getElementById("google-login-btn")
    .addEventListener("click", () => {

        google.accounts.id.prompt();

    });

};

function handleCredentialResponse(response) {

    const data = parseJwt(response.credential);

    document.getElementById("user-info").style.display = "flex";

    document.getElementById("user-name").innerText = data.name;

    document.getElementById("user-email").innerText = data.email;

    document.getElementById("user-picture").src = data.picture;

    document.getElementById("google-login-btn").style.display = "none";

}

function parseJwt(token) {

    var base64Url = token.split('.')[1];

    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {

        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);

    }).join(''));

    return JSON.parse(jsonPayload);

}