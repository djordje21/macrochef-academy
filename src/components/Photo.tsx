/** A cover photo from public/media with the shared Academy treatment (see .photo in ui.css). */
export function Photo({ name, alt = '', className = '' }: { name: string; alt?: string; className?: string }) {
  return (
    <div className={`photo ${className}`}>
      <img src={`${import.meta.env.BASE_URL}media/${name}`} alt={alt} loading="lazy" decoding="async" />
    </div>
  )
}
