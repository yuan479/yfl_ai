self.onmessage = async function (e) {
    const { imgData, quality = 0.8 } = e.data
    try {
        //转成位图 base64->bitmap
        //blob 二进制
        //console.log(await (fetch(imgData)).blob())


        //创建一个位图
        const bitmap = await createImageBitmap(
           await (await fetch(imgData)).blob()
        )
        //压缩前，base64 ->fetch -> blob->bitmap
        //html5 canvas 画布 位图时少取一些像素
        console.log(bitmap, '!!!!!!!!!!!!')
        const canvas = new OffscreenCanvas(bitmap.width, bitmap.height)
        //在画之前，得到画画的句柄 2d
        const ctx = canvas.getContext('2d')
        //从左上角开始画出来
        ctx.drawImage(bitmap, 0, 0)
        const compressedBlob = await canvas.convertToBlob(
            {
                type: 'image/jpeg',
                quality: quality
            }
        )
        const reader = new FileReader()
        reader.onloadend = () => {
           // console.log(reader.result)
            self.postMessage({
                success: true,
                data: reader.result
            })
        }
        reader.readAsDataURL(compressedBlob)

    } catch (err) {
        self.postMessage({
            success: false,
            data: err.message
        })

    }
}