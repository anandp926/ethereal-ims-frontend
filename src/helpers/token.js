export const SetToken = function createCookie(value, days) {
    var date, expires;
    if (days) {
        date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires="+date.toGMTString();
    } else {
        expires = "";
    }
    var res = value.split(".");

    document.cookie = 'HDR'+"="+res[0]+expires+"; path=/";
    document.cookie = 'PLD'+"="+res[1]+expires+"; path=/";
    document.cookie = 'SV'+"="+res[2]+expires+"; path=/";
};

function getCookie(name) {
    function escape(s) { return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1'); };
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
}

export const GetToken = function getToken() {
    const HDR = getCookie('HDR');
    const PLD = getCookie('PLD');
    const SV = getCookie('SV');
    if(HDR && PLD && SV)
    return `${HDR}.${PLD}.${SV}`;
};

export const DeleteToken = function createCookie() {
    var expires="Thu, 01 Jan 1970 00:00:00 GMT";
    
    document.cookie = 'HDR'+"=;"+expires+"; path=/";
    document.cookie = 'PLD'+"=;"+expires+"; path=/";
    document.cookie = 'SV'+"=;"+expires+"; path=/";
};