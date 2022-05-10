export const previewer = () => 
{
    const preview = document.getElementById('preview')
    const feedflare = document.getElementsByClassName('feedflare')[0]

    if (feedflare && feedflare.length > 0) { 
      feedflare.style.display = 'none'
    }

    let list  = preview.querySelectorAll('img')
    let plist = preview.querySelectorAll('p')
    let li = preview.querySelectorAll('li')
    let h3 = preview.querySelectorAll('h3')
    let h1 = preview.querySelectorAll('h1')
    let h2 = preview.querySelectorAll('h2')
    console.log(preview)
    for (let i = 0; i < list.length; i++) {
      list[i].style.maxHeight= '250px'
      list[i].style.width = 'auto'
    }
    for (let i = 0; i < plist.length; i++) {
      plist[i].style.marginTop = '5px'
      plist[i].style.fontSize = '14px'
      plist[i].style.lineHeight = '19px'
    }
    for (let i = 0; i < li.length; i++) {
      li[i].style.marginTop = '5px'
      li[i].style.fontSize = '14px'
      li[i].style.lineHeight = '19px'
    }

    for (let i = 0; i < h3.length; i++) {
      h3[i].style.fontSize = '15px'
      h3[i].style.lineHeight = '19px'
    }

    for (let i = 0; i < h1.length; i++) {
      h1[i].style.fontSize = '17px'
      h1[i].style.lineHeight = '22px'
    }

    for (let i = 0; i < h2.length; i++) {
      h2[i].style.fontSize = '17px'
      h2[i].style.lineHeight = '22px'
    }
}