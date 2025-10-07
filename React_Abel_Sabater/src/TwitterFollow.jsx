import { useState } from 'react'
export function TwitterFollow({ username,children}){
  let [isFollowing, setIsFollowing] = useState(false);
  let text= isFollowing ? 'Siguiendo' : 'Seguir';
  let buttonClassName= isFollowing ? "md--followcard-boton is-following": "md--followcard-boton";
  let handleclick= ()=>{
    setIsFollowing(!isFollowing)
  }
  return (
    <article className='md--followcard'>
      <header className='md--followCard-header'>
        <img className='md--followCard-avatar'
         src={`https://unavatar.io/${username}`} alt=""/>
        <div className='md--followCard-info'>
        <strong className='md--followCard-info-strong'>{children}</strong>
        <span className='md--followCard-info-span'>@{username}</span>
        </div>
      </header>
      <aside className='md--followcard-aside'>
      <button className={buttonClassName} onClick={handleclick}>{text}</button>
      </aside>
    </article>
)
}