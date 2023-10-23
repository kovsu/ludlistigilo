/**
 * links:
 *  spotify: https://open.spotify.com/playlist/2PMW1OvoEvfp9GzAq2E2Dc?si=44158bf5a52a4fe6
 *  apple music: https://music.apple.com/cn/playlist/%E6%92%92%E6%B5%AA%E5%98%BF%E5%93%9F/pl.u-55D6ZJ3i67Rkv8g
 *  qq music: https://i.y.qq.com/n2/m/share/details/taoge.html?id=1159029576&hosteuin=
 *  wangyi music: http://163cn.tv/mE8EI0
  */

export function getPlatform(link: string) {
  if (link.includes('open.spotify.com')) {
    return 'spotify'
  } else if (link.includes('music.apple.com')) {
    return 'apple'
  } else if (link.includes('i.y.qq.com')) {
    return 'qq'
  } else if (link.includes('163cn.tv')) {
    return 'wy'
  } else {
    return 'unknown'
  }
}
