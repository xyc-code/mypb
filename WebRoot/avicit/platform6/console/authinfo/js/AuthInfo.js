// 导出IP和MAC信息
function exportIpMac(url, ip, mac) {
    window.location.href = url + "?ip=" + ip + "&mac=" + mac;
}