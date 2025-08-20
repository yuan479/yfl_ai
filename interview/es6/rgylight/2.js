const sleep = time =>new Promise(r=>{
    setTimeout(r,time)
})

async function trafficlight(){
  const req=[
    {color:'红',time:3000},
    {color:'黄',time:1000},
    {color:'绿',time:3000}
  ]
  while(true){
    for(const{color,time} of req){
      console.log(color)
      await sleep(time)

    }
  }
}
trafficlight()