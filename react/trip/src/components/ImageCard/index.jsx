import styles from './card.module.css'
import { useRef, useEffect } from 'react'

const ImageCard = (props) => {
    const { url, height } = props
    const imgRef = useRef(null)
    
    useEffect(() => {
        const observer = new IntersectionObserver(([entry], obs) => {
            if (entry.isIntersecting) {
                const img = entry.target
                img.src = img.dataset.src || ''
                obs.unobserve(img)
            }
        })
        
        if (imgRef.current) {
            observer.observe(imgRef.current)
        }
        
        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current)
            }
        }
    }, [])
    
    return (
        <div style={{ height }} className={styles.card}>
            <img 
                ref={imgRef} 
                className={styles.img} 
                data-src={url}
                alt=""
            />
        </div>
    )
}

export default ImageCard;