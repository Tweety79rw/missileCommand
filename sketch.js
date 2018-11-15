let turrets = [];
let enemies = [];
let enemyExplosion = [];
let score = 0;
function setup() {
  createCanvas(1600,800);
  turrets.push(new Turret(width/4, 700));
  turrets.push(new Turret(width/2, 700));
  turrets.push(new Turret(width - width/4, 700));
  enemies.push(new Enemy());
}
function mousePressed() {
  for(let turret of turrets) {
    turret.fire(enemies);
  }
}
function draw() {
  background(0);
  fill(200);
  rect(-1,700, 1601,101);
  if(random(1) < 0.008) {
    enemies.push(new Enemy());
  }
  for(let i = turrets.length - 1; i >= 0; i--) {
    if(turrets[i].killed) {
      turrets.splice(i,1);
      score-=5;
      continue;
    }
    turrets[i].update();
    turrets[i].render();
  }
  if(turrets.length === 0) {
    fill(255);
    textSize(72);
    textAlign(CENTER);
    text('GAME OVER',width/2, height/2);
    textSize(24);
    text('Refresh to start a new game.', width/2, height/2 + 30);
    noLoop();
  }
  for(let i = enemies.length - 1; i >= 0; i--) {
    if(enemies[i].exploded) {
      enemyExplosion.push(new Explosion(enemies[i].pos.x, enemies[i].pos.y, turrets));
      score--;
      enemies.splice(i,1);
      continue;
    }
    if(enemies[i].killed) {
      enemies.splice(i,1);
      score++;
      continue;
    }
    enemies[i].steer();
    enemies[i].update();
    enemies[i].render();
  }
  for(let i = enemyExplosion.length - 1; i >= 0; i--) {
    if(enemyExplosion[i].dead) {
      enemyExplosion.splice(i,1);
      continue;
    }
    enemyExplosion[i].update();
    enemyExplosion[i].render();
  }
  fill(255);
  textSize(24);
  text('Score: ' + score, width - 150, 30);
}
