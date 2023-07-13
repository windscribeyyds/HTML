// modified version of random-normal
// 随机-正常的修改版本
function normalPool1(o){
  var r=0;
  do{var a=Math.round(normal({mean:o.mean,dev:o.dev}));
  if(a<o.pool.length&&a>=0)
  return o.pool[a];
  r++}
  while(r<100)}
function randomNormal1(o){
  if(o=Object.assign({mean:0,dev:1,pool:[]},o),Array.isArray(o.pool)&&o.pool.length>0)
  return normalPool1(o);
  var r,a,n,e,l=o.mean,t=o.dev;
  do{r=(a=2*Math.random()-1)*a+(n=2*Math.random()-1)*n}while(r>=1);
  return e=a*Math.sqrt(-2*Math.log(r)/r),t*e+l}

const NUM_particles11 = 2000;
const PARTICLE_SIZE1 = 2.5; // View heights
const SPEED1 = 2500; // Milliseconds

let particles1 = [];

function rand(low, high) {
  return Math.random() * (high - low) + low;
}

function createParticle(canvas) {
  const colour = {
    r: 255,
    g: randomNormal1({ mean: 125, dev: 10 }),
    b: 50,
    a: rand(0, 5),
  };
  return {
    x: -2,
    y: -2,
    diameter: Math.max(0, randomNormal1({ mean: PARTICLE_SIZE1, dev: PARTICLE_SIZE1 / 5 })),
    duration: randomNormal1({ mean: SPEED1, dev: SPEED1 * 0.1 }),
    amplitude: randomNormal1({ mean: 16, dev: 2.6}),
    offsetY: randomNormal1({ mean: -9, dev: 3.5 }),
    arc: Math.PI * 2,
    startTime: performance.now() - rand(0, SPEED1),
    colour: `rgba(${colour.r}, ${colour.g}, ${colour.b}, ${colour.a})`,
  }
}

function moveParticle(particle, canvas, time) {
  const progress = ((time - particle.startTime) % particle.duration) / particle.duration;

  return {
    ...particle,
    x: progress,
    // y: ((Math.exp(progress * particle.arc*0.2) * particle.amplitude) + particle.offsetY),//更改轨迹
    // y: Math.sin(progress * particle.arc)
    y: ((8*progress*progress* particle.amplitude) + particle.offsetY),
  };
}

function drawParticle1(particle, canvas, ctx) {
  canvas = document.getElementById('particle-canvas1');
  const vh = canvas.height / 100;

  ctx.fillStyle = particle.colour;
  ctx.beginPath();
  ctx.ellipse(
    particle.x * canvas.width,
    particle.y * vh + (canvas.height / 3),
    particle.diameter * vh,
    particle.diameter * vh,
    0,
    0,
    2 * Math.PI
  );
  ctx.fill();
}

function draw(time, canvas, ctx) {
  // Move particles1
  // 移动粒子
  particles1.forEach((particle, index) => {
    particles1[index] = moveParticle(particle, canvas, time);
  })

  // Clear the canvas
  // 清理画布
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the particles1
  // 画出粒子
  particles1.forEach((particle) => {
    drawParticle1(particle, canvas, ctx);
  })

  // Schedule next frame
  // 安排下一帧
  requestAnimationFrame((time) => draw(time, canvas, ctx));
}

function initializeCanvas1() {
  let canvas = document.getElementById('particle-canvas1');
  canvas.width = canvas.offsetWidth * window.devicePixelRatio;
  canvas.height = canvas.offsetHeight * window.devicePixelRatio;
  let ctx = canvas.getContext("2d");

  window.addEventListener('resize', () => {
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx = canvas.getContext("2d");
  })

  return [canvas, ctx];
}

function startAnimation1() {
  const [canvas, ctx] = initializeCanvas1();

  // Create a bunch of particles1
  // 创建一堆粒子
  for (let i = 0; i < NUM_particles11; i++) {
    particles1.push(createParticle(canvas));
  }
  
  requestAnimationFrame((time) => draw(time, canvas, ctx));
};

// Start animation when document is loaded
// 加载文档时启动动画
(function () {
  if (document.readystate !== 'loading') {
    startAnimation1();
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      startAnimation1();
    })
  }
}());