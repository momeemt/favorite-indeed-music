window.onload = () => {
  switchSpotifySong()

  document.getElementById('like-button-instance').addEventListener('click', () => {
    switchSpotifySong()
  })

  document.getElementById('soso-button-instance').addEventListener('click', () => {
    switchSpotifySong()
  })
}

const switchSpotifySong = () => {
  const random = Math.floor(Math.random() * playlist.length)
  document.getElementById('spotify-player').src = playlist[random].url
  document.getElementById('impression').innerText = playlist[random].impression
  console.log(playlist[random].url)
}

const playlist = [
  {
    url: 'https://open.spotify.com/embed/track/4mZC1IJP53xH9Q1aDxGux1?utm_source=generator',
    title: 'ハイウェイ',
    artist: '35.7',
    impression: '歌詞がかわいい、「なんてね」がかわいすぎる、好きになったらメンバーがカラオケでハイウェイを歌っている動画を30回聞きましょう！'
  },
  {
    url: 'https://open.spotify.com/embed/track/1JS5tDI81SbmvJN6jscFfv?utm_source=generator',
    title: '水溶世界媒体少女',
    artist: 'フミンニッキ',
    impression: 'テンポが良くて声もかっこいいので無限に聴けると話題。実際、無限に聴いている'
  },
  {
    url: 'https://open.spotify.com/embed/track/57gtyoPqzMxDv8asqnAPoU?utm_source=generator',
    title: 'summer hole',
    artist: 'tiny yawn',
    impression: '穏やかでおしゃれな曲調が大好きで、無印良品2をオープンするならBGMはこれにします。'
  },
  {
    url: 'https://open.spotify.com/embed/track/6MqrpdDa19FOxnhWfPsCgo?utm_source=generator',
    title: '怪獣の腕のなか',
    artist: 'きのこ帝国',
    impression: 'ご存じきのこ帝国です。説明不要なので聴いてください............................'
  }
]
