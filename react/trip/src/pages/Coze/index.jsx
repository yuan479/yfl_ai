import styles from './coze.module.css'
import { useRef, useState } from 'react'



const Coze = () => {
    const patToken = 'pat_9zK5SZhW5jcDgOA8TAyl0PK2xc8rwyhmGDFSQ7LF4pIRDOJOvG0YPzXsDgY13uH9';
    const uploadUrl = 'https://api.coze.cn/v1/files/upload';
    const workflowUrl = 'https://api.coze.cn/v1/workflow/run';
    const workflow_id = '7533134825490792489';
    

    const uploadImageRef = useRef(null)
    const [imgPreview, setImgPreview] = useState('https://res.bearbobo.com/resource/upload/W44yyxvl/upload-ih56twxirei.png');
    const [uniform_color, setUniformColor]=useState('红');
    const [uniform_number, setUniformNumber] = useState(10);
    const [position, setPosition] = useState(0);
    const [shooting_hand, setShootingHand] = useState(0);
    const [style, setStyle] = useState('写实');
    const [imgUrl, setImgUrl] = useState('');
    const [status, setStatus] = useState('');

    const updateImageData = () => {
        const input = uploadImageRef.current;
        // console.log(uploadImageRef.current)
        if (!input.files || input.files.length === 0) { return; }
        const file = input.files[0];
        // console.log(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => { 
            setImgPreview(e.target?.result)
            // imgPreview.value = e.target?.result as string; 
        };
    }

    

    const uploadFile = async () => {
        const formData = new FormData(); //请求体对象
        const input = uploadImageRef.current;
        if (!input.files || input.files.length <= 0) {
            setStatus("请先选择图片");
            return;
        }
        formData.append('file', input.files[0]);

        try {
            const res = await fetch(uploadUrl, { 
                method: 'POST',
                headers: { 'Authorization': `Bearer ${patToken}`, }, 
                body: formData, 
            });

            const ret = await res.json();
            console.log('Upload response:', ret);

            if (ret.code !== 0) { 
                setStatus(`上传失败: ${ret.msg}`); 
                return; 
            }

            return ret.data.id;
        } catch (error) {
            console.error('Upload error:', error);
            setStatus(`上传失败: ${error.message}`);
            return;
        }
    }

    const generate = async () => {
        try {
            setStatus("图片上传中...");
            const file_id = await uploadFile();
            console.log('File ID:', file_id);
            
            if (!file_id) {
                setStatus("图片上传失败，请重试");
                return;
            }
            
            setStatus("图片上传成功，正在生成...");
            
            const parameters = { 
                picture: JSON.stringify({ file_id }), 
                style: style, 
                uniform_number: parseInt(uniform_number), //队服编号 
                uniform_color: uniform_color, // 队服颜色 
                position: parseInt(position), // 0-守门员，1-前锋，2-后卫 
                shooting_hand: parseInt(shooting_hand), // 0-左手，1-右手 
            };
            
            console.log('Workflow parameters:', parameters);
            
            const res = await fetch(workflowUrl, {
                method: 'POST',
                headers: { 
                    'Authorization': `Bearer ${patToken}`, 
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({ 
                    workflow_id, 
                    parameters 
                }),
            });
            
            const ret = await res.json();
            console.log('Workflow response:', ret);

            if (ret.code !== 0) { 
                setStatus(`生成失败: ${ret.msg}`); 
                return; 
            }
            
            try {
                const data = JSON.parse(ret.data); 
                setStatus(''); 
                setImgUrl(data.data);
            } catch (parseError) {
                console.error('Parse error:', parseError);
                setStatus('生成成功，但解析结果失败');
                setImgUrl(ret.data); // 直接使用原始数据
            }
        } catch (error) {
            console.error('Generate error:', error);
            setStatus(`生成失败: ${error.message}`);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.input}>
                <div className={styles.fileInput}>
                    <input
                        ref={uploadImageRef}
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        required
                        onChange={updateImageData}
                        style={{ display: 'none' }}
                    />
                    <button 
                        type="button" 
                        onClick={() => uploadImageRef.current?.click()}
                        className={styles.uploadButton}
                    >
                        选择图片
                    </button>
                </div>
                <div className={styles.previewContainer}>
                    <img
                        src={imgPreview}
                        alt="preview"
                        className={styles.preview}
                        onClick={() => uploadImageRef.current?.click()}
                        style={{ cursor: 'pointer' }}
                    />
                    <div className={styles.previewHint}>点击图片可重新选择</div>
                </div>
                <div className={styles.settings}>
                    <div className={styles.selection}>
                        <label>队服编号</label>
                        <input value={uniform_number} type="number" onChange={(event) => setUniformNumber(event.target.value)} />
                    </div>
                </div>
                <div className={styles.selection}>
                    <label>队服颜色:</label>
                    <select value={uniform_color} onChange={(e) => { setUniformColor(e.target.value) }}>
                        <option value="红">红</option>
                        <option value="蓝">蓝</option>
                        <option value="绿">绿</option>
                    </select>
                </div>
                <div className="settings">
                    <div className="selection">
                        <label>位置：</label>
                        <select value={position} onChange={(e) => { setPosition(e.target.value) }}>
                            <option value="0">守门员</option>
                            <option value="1">前锋</option>
                            <option value="2">后卫</option>
                        </select>
                    </div>
                    <div className={styles.selection}>
                        <label>持杆:</label>
                        <select value={shooting_hand} onChange={(e) => setShootingHand(e.target.value)}>
                            <option value="0">左手</option>
                            <option value="1">右手</option>
                        </select>
                    </div>
                    <div className={styles.selection}>
                        <label>风格:</label>
                        <select value={style} onChange={(e) => setStyle(e.target.value)}>
                            <option value="写实">写实</option>
                            <option value="乐高">乐高</option>
                            <option value="国漫">国漫</option>
                        </select>
                    </div>
                </div>
                <div className={styles.generate}>
                    <button onClick={generate}>生成</button>
                </div>
            </div>
            <div className={styles.output}>
                <div className={styles.generated}>
                    {imgUrl && <img src={imgUrl} alt="生成的图片" />}
                    {status && (
                        <div className={styles.status}>
                            {status}
                        </div>
                    )}
                    {!imgUrl && !status && (
                        <div className={styles.placeholder}>
                            生成的图片将显示在这里
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Coze