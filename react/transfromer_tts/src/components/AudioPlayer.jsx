import { useRef,useEffect } from "react";

const AudioPlayer =({audioUrl,mimeType})=>{

    const audioPlayer = useRef(null);
    const audioSource = useRef(null);

    useEffect(() => {
        if (audioPlayer.current && audioUrl) {
            // 直接设置 audio 元素的 src 属性
            audioPlayer.current.src = audioUrl;
            // 加载音频但不自动播放
            audioPlayer.current.load();
        }
    },[audioUrl])
    
    return (
        <>
            <div className="flex relative z-10 my-4 w-full">
                <audio 
                    ref={audioPlayer}
                    controls
                    className="w-full h-14 rounded-lg bg-white shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                    {/* 移除 source 元素，直接使用 src 属性 */}
                </audio>
            </div>
        </>
    )
}

export default AudioPlayer;