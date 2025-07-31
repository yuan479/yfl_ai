import styles from  './waterfall.module.css';
import { useEffect,useRef } from 'react';
import ImageCard from '@/components/ImageCard'

const Waterfall = (props) => {
    const loader =useRef(null)
    const {
        loading,
        fetchMore,
        images
    } = props
    useEffect(()=>{
        //判断ref出现在了视窗  intersetctionObserver
        //观察者模式 
        const observer =new IntersectionObserver(([entry])=>{
            console.log(entry)
            if(entry.isIntersecting){
                fetchMore()
            }
           // observer.unobserve(entry.target)
        })
       if(loader.current) observer.observe(loader.current)
        return ()=>observer.disconnect()
    },[])
    return (
        <>
            {images.length}
            <div className={styles.wrapper}>
                <div className={styles.column}>
                    {
                        images.filter((_, i) => i % 2 === 0).map((img, i) => (
                          <ImageCard key={`even-${i}`} {...img}/>
                        ))
                    }
                </div>
                <div className={styles.column}>
                {
                        images.filter((_, i) => i % 2 !== 0).map((img, i) => (
                            <ImageCard key={`odd-${i}`} {...img}/>
                        ))
                    }
                </div>
                <div ref={loader} className={styles.loader}> 玩命加载中...</div>
            </div>
        </>
    )
}

export default Waterfall