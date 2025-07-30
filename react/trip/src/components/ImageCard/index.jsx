import styles from './card.module.css'
import { imgRef,useEffect} from 'react'

const ImageCard = (props) => {
    const { url, height } = props
    const imgRef= useRef(null)
    useEffect(()=>{
        const observer = new IntersectionObserver(([entry],obs)=>{
            if(entry.isIntersecting){
                const img = entry.targetconst oImg = document.createElement('img')
                oImg.src=<img src="oImg.onload = function("{
                    img.src=img={.dataset.src}
                } alt="" className="dataset src" />
                const img = entry.targetimg.src=img.dataset.src||''
                obs.unobserve(img)
            }
        })
        if(imgRef.current) observer.observe(imgRef.current)
    },[])
    return (
        <div style={{height}} className={styles.card}>
            <img ref={imgRef} className={styles.img} />
        </div>
    )
}

export default ImageCard;