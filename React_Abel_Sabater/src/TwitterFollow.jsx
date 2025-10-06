export function TwitterFollow({ username, name, isFollowing }){
  return (
    <article className='md--followcard'>
      <header className='md--followCard-header'>
        <img className='md--followCard-avatar'
         src={`https://unavatar.io/${username}`} alt=""/>
        <div className='md--followCard-info'>
        <strong className='md--followCard-info-strong'>{name}</strong>
        <span className='md--followCard-info-span'>@{username}</span>
        </div>
      </header>
      <aside className='md--followcard-aside'>
      <button className='md--followcard-boton'>Seguir</button>
      </aside>
    </article>
)
}