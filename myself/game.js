class Ball {
    constructor(team, color) {
        this.team = team; // 'player' 或 'ai'
        this.color = color;
        this.radius = 15;
        this.x = team === 'player' ? 150 : 650;
        this.y = 300;
        this.maxHealth = this.randomRange(team === 'player' ? 80 : 70, team === 'player' ? 120 : 110);
        this.health = this.maxHealth;
        this.attack = this.randomRange(team === 'player' ? 2 : 1, team === 'player' ? 4 : 3);
        this.restitution = team === 'player' 
            ? 0.85 + Math.random() * 0.1 
            : 0.8 + Math.random() * 0.1;
        this.speedX = 0;
        this.speedY = 0;
        this.cooldown = 0;
    }

    randomRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 800;
        this.canvas.height = 600;

        // 初始化小球
        this.playerBalls = ['red', 'yellow', 'blue'].map(c => new Ball('player', c));
        this.aiBalls = ['cyan', 'blue', 'purple'].map(c => new Ball('ai', c));
        
        // 游戏状态
        this.isDragging = false;
        this.selectedBall = null;
        this.timer = 15;
    }

    // 物理引擎和游戏循环将在后续补充
    
    // 物理碰撞检测
    checkCollisions() {
        // 球体碰撞检测
        const allBalls = [...this.playerBalls, ...this.aiBalls];
        
        for (let i = 0; i < allBalls.length; i++) {
            for (let j = i + 1; j < allBalls.length; j++) {
                const ballA = allBalls[i];
                const ballB = allBalls[j];
                
                // 计算距离
                const dx = ballB.x - ballA.x;
                const dy = ballB.y - ballA.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < ballA.radius + ballB.radius) {
                    // 动量守恒碰撞响应
                    const collisionAngle = Math.atan2(dy, dx);
                    const speedA = Math.sqrt(ballA.speedX ** 2 + ballA.speedY ** 2);
                    const speedB = Math.sqrt(ballB.speedX ** 2 + ballB.speedY ** 2);
                    
                    // 速度交换计算
                    const newSpeedAX = (speedB * ballB.restitution) * Math.cos(collisionAngle);
                    const newSpeedAY = (speedB * ballB.restitution) * Math.sin(collisionAngle);
                    const newSpeedBX = (speedA * ballA.restitution) * Math.cos(collisionAngle + Math.PI);
                    const newSpeedBY = (speedA * ballA.restitution) * Math.sin(collisionAngle + Math.PI);
                    
                    // 更新速度
                    ballA.speedX = newSpeedAX;
                    ballA.speedY = newSpeedAY;
                    ballB.speedX = newSpeedBX;
                    ballB.speedY = newSpeedBY;
                    
                    // 伤害计算
                    if (ballA.team !== ballB.team) {
                        const damage = ballA.attack * (speedA + speedB) * 0.1;
                        ballB.health = Math.max(0, ballB.health - damage);
                    }
                }
            }
        }
    }

    // 边界反弹处理
    handleBoundary() {
        const allBalls = [...this.playerBalls, ...this.aiBalls];
        
        allBalls.forEach(ball => {
            if (ball.x - ball.radius < 0 || ball.x + ball.radius > this.canvas.width) {
                ball.speedX *= -ball.restitution;
            }
            if (ball.y - ball.radius < 0 || ball.y + ball.radius > this.canvas.height) {
                ball.speedY *= -ball.restitution;
            }
        });
    }

    // 玩家拖拽发射机制
    initControls() {
        this.canvas.addEventListener('mousedown', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            this.playerBalls.forEach(ball => {
                if (ball.cooldown <= 0) {
                    const dx = mouseX - ball.x;
                    const dy = mouseY - ball.y;
                    if (Math.sqrt(dx*dx + dy*dy) < 30) {
                        this.isDragging = true;
                        this.selectedBall = ball;
                        this.dragStartX = mouseX;
                        this.dragStartY = mouseY;
                    }
                }
            });
        });
    
        document.addEventListener('mouseup', (e) => {
            if (this.isDragging) {
                const rect = this.canvas.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;
                
                // 计算速度
                const dx = mouseX - this.dragStartX;
                const dy = mouseY - this.dragStartY;
                this.selectedBall.speedX = dx * 0.5;
                this.selectedBall.speedY = dy * 0.5;
                
                // 进入冷却
                this.selectedBall.cooldown = 5;
                this.isDragging = false;
            }
        });
    }

    // 在构造函数中调用初始化
    constructor() {
        this.initControls();
    }

    // 修复1：将方法移动到Game类内部
    class Game {
        // AI决策系统
        aiDecision() {
            this.aiBalls.forEach(aiBall => {
                if (aiBall.cooldown <= 0 && aiBall.health > 0) {
                    const target = this.findTarget(aiBall);
                    if (target) {
                        this.aiAttack(aiBall, target);
                    } else {
                        // 随机移动
                        aiBall.speedX = (Math.random() - 0.5) * 2;
                        aiBall.speedY = (Math.random() - 0.5) * 2;
                    }
                }
            });
        }
    
        findTarget(aiBall) {
            let nearest = null;
            let minDistance = Infinity;
            
            this.playerBalls.forEach(playerBall => {
                if (playerBall.health > 0) {
                    const dx = playerBall.x - aiBall.x;
                    const dy = playerBall.y - aiBall.y;
                    const distance = Math.sqrt(dx*dx + dy*dy);
                    
                    if (distance < 150 && distance < minDistance) {
                        minDistance = distance;
                        nearest = playerBall;
                    }
                }
            });
            
            return nearest;
        }
    
        aiAttack(aiBall, target) {
            const dx = target.x - aiBall.x;
            const dy = target.y - aiBall.y;
            const distance = Math.sqrt(dx*dx + dy*dy);
            
            // 计算攻击方向
            const angle = Math.atan2(dy, dx);
            aiBall.speedX = Math.cos(angle) * 3;
            aiBall.speedY = Math.sin(angle) * 3;
            
            aiBall.cooldown = 2;
        }
    
        // 游戏主循环
        update() {
            // 更新位置
            const allBalls = [...this.playerBalls, ...this.aiBalls];
            allBalls.forEach(ball => {
                if (ball.health > 0) {
                    ball.x += ball.speedX;
                    ball.y += ball.speedY;
                    
                    // 速度衰减
                    ball.speedX *= 0.98;
                    ball.speedY *= 0.98;
                    
                    // 冷却计时
                    if (ball.cooldown > 0) ball.cooldown -= 1/60;
                } else {
                    // 重生逻辑
                    if (ball.respawnTimer === undefined) {
                        ball.respawnTimer = 1;
                    } else if (ball.respawnTimer > 0) {
                        ball.respawnTimer -= 1/60;
                    } else {
                        ball.health = ball.maxHealth;
                        ball.x = ball.team === 'player' ? 150 : 650;
                        ball.y = 300;
                        delete ball.respawnTimer;
                    }
                }
            });
            
            this.checkCollisions();
            this.handleBoundary();
            this.aiDecision();
            
            // 胜负判定
            if (this.checkGameOver()) {
                return;
            }
            
            requestAnimationFrame(() => this.update());
        }
    
        checkGameOver() {
            const playerAlive = this.playerBalls.some(b => b.health > 0);
            const aiAlive = this.aiBalls.some(b => b.health > 0);
            
            if (!playerAlive || !aiAlive) {
                const winner = playerAlive ? '玩家' : 'AI';
                this.showGameOver(winner);
                return true;
            }
            return false;
        }
    
        // 修复2：添加showGameOver方法
        showGameOver(winner) {
            this.ctx.fillStyle = 'black';
            this.ctx.font = '48px Arial';
            this.ctx.fillText(`${winner} 胜利！`, 300, 300);
            this.ctx.fillStyle = 'gray';
            this.ctx.font = '24px Arial';
            this.ctx.fillText('点击画面重新开始', 320, 350);
            this.canvas.onclick = () => location.reload();
        }
    
        // 修复3：初始化attackFlash属性
        constructor() {
            // 在Ball类中添加
            class Ball {
                constructor(team, color) {
                    // ...原有属性...
                    this.attackFlash = 0; // 新增
                }
            }
        }
    
        // 修复4：修正碰撞检测逻辑
        checkCollisions() {
            const allBalls = [...this.playerBalls, ...this.aiBalls];
            
            for (let i = 0; i < allBalls.length; i++) {
                for (let j = i + 1; j < allBalls.length; j++) {
                    const ballA = allBalls[i];
                    const ballB = allBalls[j];
                    
                    if (ballA.team !== ballB.team) {
                        const dx = ballB.x - ballA.x;
                        const dy = ballB.y - ballA.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance < ballA.radius + ballB.radius) {
                            // 修正伤害计算
                            const damage = ballA.attack * (Math.hypot(ballA.speedX, ballA.speedY) + 
                                                Math.hypot(ballB.speedX, ballB.speedY)) * 0.1;
                            
                            ballB.health = Math.max(0, ballB.health - damage);
                            
                            // 添加特效
                            this.collisions.push({
                                x: (ballA.x + ballB.x)/2,
                                y: (ballA.y + ballB.y)/2,
                                radius: 10,
                                progress: 0
                            });
                            ballA.attackFlash = 0.8;
                        }
                    }
                }
            }
        }
    }
}

// 在Game类中添加绘制方法
draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // 绘制碰撞特效
    this.drawCollisionEffects();
    
    // 绘制所有小球
    [...this.playerBalls, ...this.aiBalls].forEach(ball => {
        if (ball.health > 0) {
            this.ctx.save();
            
            // 冷却旋转效果
            if (ball.cooldown > 0) {
                this.ctx.translate(ball.x, ball.y);
                this.ctx.rotate(Date.now() / 200 % 360 * Math.PI / 180);
                this.ctx.translate(-ball.x, -ball.y);
            }
            
            // 绘制主体
            this.ctx.beginPath();
            this.ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
            this.ctx.fillStyle = ball.color;
            
            // 冷却透明效果
            this.ctx.globalAlpha = ball.cooldown > 0 ? 0.6 : 1;
            this.ctx.fill();
            
            // 生命值环
            this.drawHealthRing(ball);
            
            // 攻击闪光
            if (ball.attackFlash > 0) {
                this.ctx.beginPath();
                this.ctx.arc(ball.x, ball.y, ball.radius*1.2, 0, Math.PI*2);
                this.ctx.fillStyle = `rgba(255,255,150,${ball.attackFlash})`;
                this.ctx.fill();
                ball.attackFlash -= 0.1;
            }
            
            this.ctx.restore();
        }
    });
}

drawHealthRing(ball) {
    const lineWidth = 3;
    const radius = ball.radius + lineWidth;
    const startAngle = -Math.PI/2;
    const endAngle = startAngle + (ball.health / ball.maxHealth) * Math.PI*2;
    
    // 背景环
    this.ctx.beginPath();
    this.ctx.arc(ball.x, ball.y, radius, 0, Math.PI*2);
    this.ctx.strokeStyle = '#555';
    this.ctx.lineWidth = lineWidth;
    this.ctx.stroke();
    
    // 生命值环
    this.ctx.beginPath();
    this.ctx.arc(ball.x, ball.y, radius, startAngle, endAngle);
    this.ctx.strokeStyle = ball.team === 'player' ? '#00ff00' : '#ff0000';
    this.ctx.lineWidth = lineWidth;
    this.ctx.stroke();
}

drawCollisionEffects() {
    this.collisions.forEach((collision, index) => {
        this.ctx.beginPath();
        this.ctx.arc(collision.x, collision.y, collision.radius, 0, Math.PI*2);
        this.ctx.fillStyle = `rgba(255,0,0,${1 - collision.progress})`;
        this.ctx.fill();
        
        collision.progress += 0.1;
        if (collision.progress >= 1) {
            this.collisions.splice(index, 1);
        }
    });
}

// 在碰撞检测中添加特效
checkCollisions() {
    // ...原有碰撞检测代码...
    
    // 添加碰撞特效
    if (damage > 0) {
        this.collisions.push({
            x: (ballA.x + ballB.x)/2,
            y: (ballA.y + ballB.y)/2,
            radius: 10,
            progress: 0
        });
        ballA.attackFlash = 0.8;
    }
}

// 在Game类中添加属性
constructor() {
    this.collisions = [];
}

// 在构造函数中启动游戏循环
constructor() {
    // ...原有代码...
    requestAnimationFrame(() => this.update());
    setInterval(() => this.draw(), 1000/60);
}