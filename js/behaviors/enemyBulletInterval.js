BulletFiring = function(interval){
        this.interval = interval;
    }
BulletFiring.prototype ={
    execute: function(){
    let now = +new Date()
    let lastFire = now;
    if(now - lastFire > this.interval){
        enemyShoot(spaceshipGame);
        lastFire = now;
        console.log(now)
    }
    }
}