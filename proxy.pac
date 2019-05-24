
fun FindProxyForURL(url, host){
    if (host == "music.163.com" || host == "interface.music.163.com") {
        return "Proxy 47.75.222.233"    
    } 
    return "DIRECT"
}
