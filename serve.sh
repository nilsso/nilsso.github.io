ip=$(ipconfig getifaddr en0)
zola serve --interface $ip --base-url $ip
