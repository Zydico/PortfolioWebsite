canvas_size;
scene;
camera;

constructor(public loader: LoaderService) { }

ngOnInit(): void {
  const show_axis = false;
  let geometry;
  let material;
  let mesh;
  let line;
  let cone;
  let sphere;

  window.scrollTo(0, 0);
  this.canvas_size = 700;
  const canvasElementRef = <HTMLCanvasElement> document.getElementById('canvas');

  this.scene = new THREE.Scene();
  let scene = this.scene;
  scene.background = new THREE.Color(0xffffff);

  const renderer = new THREE.WebGLRenderer({canvas: canvasElementRef, antialias: true});
  renderer.setSize(this.canvas_size, this.canvas_size);
  document.body.appendChild(renderer.domElement);
  
  const fov = 50;
  const aspect = 1;
  const near = 0.1;
  const far = 1000;
  this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  let camera = this.camera;

  let offset_x = -50;
  let offset_y = 30;
  let offset_z = 0;

  camera.position.set(0 + offset_x, 0 + offset_y, 150 + offset_z);
  camera.updateProjectionMatrix();

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(offset_x, offset_y, offset_z);
  controls.update();
  controls.minDistance = 10;
  controls.maxDistance = 2000;

  function createPoint(list, x, y, z) {
    list.push(x, y, z);
  }

  function createLine(points, color, width, dashed, arrow) {
    line = new MeshLine();
    line.setPoints(points);
    material = new MeshLineMaterial({
      color: color,
      lineWidth: width,
    });
    if (dashed) {
      material.dashArray = 0.015;
      material.dashRatio = 0.5;
      material.transparent = true;
    }
    mesh = new THREE.Mesh(line.geometry, material);
    scene.add(mesh);

    if (arrow) {
      cone = new THREE.ConeGeometry(width*3, width*8);
      material = new THREE.MeshStandardMaterial({
        color: color
      });
      let last_point_index = points.length/3-1;
      let previous_point_index = last_point_index-1;
      mesh = new THREE.Mesh(cone, material);
      mesh.position.set(points[previous_point_index*3], points[previous_point_index*3+1], points[previous_point_index*3+2]);
      mesh.geometry.rotateX(Math.PI * 0.5);
      mesh.lookAt(points[last_point_index*3], points[last_point_index*3+1], points[last_point_index*3+2]);
      mesh.position.set(points[last_point_index*3], points[last_point_index*3+1], points[last_point_index*3+2]);
      scene.add(mesh);
    }
  }

  if (show_axis) {
    let axis_size = 150;
    const x_axis = [];
    createPoint(x_axis, 0, 0, 0);
    createPoint(x_axis, axis_size, 0, 0);
    createLine(x_axis, 0x000000, 1, true, true);
    const y_axis = [];
    createPoint(y_axis, 0, 0, 0);
    createPoint(y_axis, 0, axis_size, 0);
    createLine(y_axis, 0x000000, 1, true, true);
    const z_axis = [];
    createPoint(z_axis, 0, 0, 0);
    createPoint(z_axis, 0, 0, axis_size);
    createLine(z_axis, 0x000000, 1, true, true);
  }

  function createSphere(x, y, z, r) {
    geometry = new THREE.SphereGeometry(r, 100, 100);
    material = new THREE.MeshBasicMaterial({
      color: 0x000000
    });
    sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(x, y, z);
    scene.add(sphere);
  }

  var textureURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg"; 
  var displacementURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg"; 
  var worldURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/hipp8_s.jpg"

  const textureLoader = new THREE.TextureLoader();
  let texture = textureLoader.load(textureURL);
  let displacementMap = textureLoader.load(displacementURL);

  material = new THREE.MeshPhongMaterial ({ 
      color: 0xffffff,
      map: texture,
      displacementMap: displacementMap,
      displacementScale: 0.06,
      bumpMap: displacementMap,
      bumpScale: 0.04,
      reflectivity: 0, 
      shininess: 0
    } 
  );
  geometry = new THREE.SphereGeometry(10,60,60);
  var moon = new THREE.Mesh(geometry, material);
  const light = new THREE.DirectionalLight(0xFFFFFF, 1);
  light.position.set(-100, 10,50);
  scene.add(light);
  let hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.1);
  hemiLight.color.setHSL(0.6, 1, 0.6);
  hemiLight.groundColor.setHSL(0.095, 1, 0.75);
  hemiLight.position.set(0, 0, 0);
  scene.add(hemiLight);
  scene.add(moon);

  createSphere(-100, 0, 0, 2);
  createSphere(0, 50, 0, 2);
  
  const line_1 = [];
  createPoint(line_1, -100, 0, 0);
  createPoint(line_1, -11, 0, 0);
  createLine(line_1, 0x000000, 0.4, false, true);
  
  const line_2 = [];
  createPoint(line_2, -100, 0, 0);
  createPoint(line_2, -3, 49, 0);
  createLine(line_2, 0x000000, 0.4, false, true);
  
  const line_3 = []; // vertical
  createPoint(line_3, 0, 0, 0);
  createPoint(line_3, 0, 50, 0);
  createLine(line_3, 0x000000, 0.4, false, false);
  
  const line_4 = [];
  createPoint(line_4, -100, 0, 0);
  createPoint(line_4, -1.5, 30, 0);
  createLine(line_4, 0x000000, 0.4, false, true);

  const labelRenderer = new CSS2DRenderer();
  labelRenderer.setSize(this.canvas_size, this.canvas_size);
  labelRenderer.domElement.style.position = 'absolute';
  let rect = renderer.domElement.getBoundingClientRect();
  labelRenderer.domElement.style.top = rect.top + 'px';
  labelRenderer.domElement.style.left = rect.left + 'px';
  labelRenderer.domElement.style.pointerEvents = 'none';
  document.body.appendChild(labelRenderer.domElement);

  let p = document.createElement('p');
  p.textContent = 'Observer';
  p.style.fontFamily = 'Times New Roman';
  p.style.color = 'black';
  let label = new CSS2DObject(p);
  label.position.set(-100, -2, 0);
  scene.add(label);

  p = document.createElement('p');
  p.textContent = 'γ';
  p.style.fontSize = '20pt';
  p.style.fontFamily = 'Times New Roman';
  p.style.color = 'black';
  label = new CSS2DObject(p);
  label.position.set(-50, 38, 0);
  scene.add(label);

  p = document.createElement('p');
  p.textContent = 'Target';
  p.style.fontFamily = 'Times New Roman';
  p.style.color = 'black';
  label = new CSS2DObject(p);
  label.position.set(0, 62, 0);
  scene.add(label);

  p = document.createElement('p');
  p.textContent = 'ρ';
  p.style.fontSize = '20pt';
  p.style.fontFamily = 'Times New Roman';
  p.style.color = 'black';
  label = new CSS2DObject(p);
  label.position.set(-40, 3, 0);
  scene.add(label);

  let angle1 = Math.atan(50/100);
  let angle = 0;
  let radius = 30;
  line = [];
  while (angle < angle1 - 0.05) {
    createPoint(line, -100 + radius*Math.cos(angle), radius*Math.sin(angle), 0);
    angle = angle + 0.01;
  }
  createLine(line, 0x000000, 0.4, false, true);

  p = document.createElement('p');
  p.textContent = 'θ';
  p.style.fontSize = '16pt';
  p.style.fontFamily = 'Times New Roman';
  p.style.color = 'black';
  label = new CSS2DObject(p);
  label.position.set(-68, 17, 0);
  scene.add(label);

  let angle2 = Math.atan(33/100);
  angle = 0;
  radius = 45;
  line = [];
  while (angle < angle2 - 0.05) {
    createPoint(line, -100 + radius*Math.cos(angle), radius*Math.sin(angle), 0);
    angle = angle + 0.01;
  }
  createLine(line, 0x000000, 0.4, false, true);

  p = document.createElement('p');
  p.textContent = 'φ';
  p.style.fontSize = '16pt';
  p.style.fontFamily = 'Times New Roman';
  p.style.color = 'black';
  label = new CSS2DObject(p);
  label.position.set(-52, 14, 0);
  scene.add(label);


  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
    //console.log(camera.position);
  }

  animate();
}

public save() {
  var rendererSVG = new SVGRenderer();
  rendererSVG.setSize(this.canvas_size, this.canvas_size);
  rendererSVG.render(this.scene, this.camera);
  this.ExportToSVG(rendererSVG, "test.svg");
}

ExportToSVG(rendererSVG, filename) {
  var XMLS = new XMLSerializer();
  var svgfile = XMLS.serializeToString(rendererSVG.domElement);
  var svgData = svgfile;
  var preface = '<?xml version="1.0" standalone="no"?>\r\n';
  var svgBlob = new Blob([preface, svgData], {
    type: "image/svg+xml;charset=utf-8"
  });
  var svgUrl = URL.createObjectURL(svgBlob);
  var downloadLink = document.createElement("a");
  
  downloadLink.href = svgUrl;
  downloadLink.download = filename;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}