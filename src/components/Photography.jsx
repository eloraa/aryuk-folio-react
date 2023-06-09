import React from 'react'


export const Photography = (prop) => {
    document.querySelector('#__root').style.backgroundColor = ''
    document.querySelector('#__root').classList.remove('error','group')
  return (
    <main>
        <div className="content">
            <div className="containers grid grid-cols-4 auto-rows-fr gap-3 [&>*]:object-cover">  
                <img src="https://source.unsplash.com/1600x1200?aesthetic,generation%20z,gen%20z,polaroid"/>
                <img src="https://source.unsplash.com/1024x768?aesthetic,generation%20z,gen%20z,polaroid"/>
                <img src="https://source.unsplash.com/1366x768?aesthetic,generation%20z,gen%20z,polaroid"/>
                <img src="https://source.unsplash.com/1920x1080?aesthetic,generation%20z,gen%20z,polaroid"/>
                <img src="https://source.unsplash.com/640x360?aesthetic,generation%20z,gen%20z,polaroid"/>
                <img src="https://source.unsplash.com/320x640?aesthetic,generation%20z,gen%20z,polaroid"/>
                <img src="https://source.unsplash.com/1200x1600?aesthetic,generation%20z,gen%20z,polaroid" className="card img-responsive"/>
                <img src="https://source.unsplash.com/800x600?aesthetic,generation%20z,gen%20z,polaroid"/>
                <img src="https://source.unsplash.com/600x800?aesthetic,generation%20z,gen%20z,polaroid"/>
                <img src="https://source.unsplash.com/400x600?aesthetic,generation%20z,gen%20z,polaroid"/>
                <img src="https://source.unsplash.com/600x400?aesthetic,generation%20z,gen%20z,polaroid"/>
                <img src="https://source.unsplash.com/1100x1600?aesthetic,generation%20z,gen%20z,polaroid"/>
                <img src="https://source.unsplash.com/1600x1100?aesthetic,generation%20z,gen%20z,polaroid"/>
                <img src="https://source.unsplash.com/992x768?aesthetic,generation%20z,gen%20z,polaroid"/>
                <img src="https://source.unsplash.com/768x992?aesthetic,generation%20z,gen%20z,polaroid"/>

            </div>
        </div>
    </main>
  )
}
