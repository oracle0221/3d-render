// 加载并解析 obj 文件
function load_obj_file_data( filename, mesh ){
  mesh.vertices = mesh.vertices||[];
  mesh.faces = mesh.faces || [];

  let url = `/assets/${filename}`;

  return fetch(url).then(res=>res.text()).then(text=>{
    let lines = text.split(/[\r\n]+/g).map(s=>s.trim());

    let texcoords = [];

    for( let i = 0; i < lines.length; i ++ ){
        let line = lines[i];
        if( line.startsWith('v ') ){
          // 顶点
          let str = line.substring(2);
          let [x, y, z] = str.split(' ').map(s=>+s);
          let vertex={x, y, z};
          mesh.vertices.push(vertex);
        }else if( line.startsWith('vt ') ){
          // 纹理坐标
          let str = line.substring(3);
          let [u, v] = str.split(' ').map(s=>+s);
          let texcoord={u, v};
          texcoords.push(texcoord);
        }else if( line.startsWith('f ') ){
          let vertex_indices = [], texture_indices = [], normal_indices = [];
          let str = line.substring(2);
          let arr = str.split(' ');
          for( let i = 0; i < arr.length; i ++ ){
              let item = arr[i];
              let [v, t, n] = item.split('/').map(s=>+s);
              vertex_indices[i] = v
              texture_indices[i] = t
              normal_indices[i] = n
          } // for i

          mesh.faces.push({
            a: vertex_indices[0],
            b: vertex_indices[1],
            c: vertex_indices[2],
            a_uv: texcoords[texture_indices[0]-1],
            b_uv: texcoords[texture_indices[1]-1],
            c_uv: texcoords[texture_indices[2]-1],
            color: '#FFFFFF'
          });
        }

    } // for i

  });

}

// 加载材质图像
function load_png_texture_data( filename ){
  let url = `/assets/${filename}`;

  return new Promise((resolve, reject)=>{
    let img = new Image();
    img.onload = ()=>{
      // 通过canvas来取到图像数据
      const c1 = document.createElement('canvas');
      const gd = c1.getContext('2d')
      c1.width = img.width
      c1.height = img.height
      gd.drawImage(img, 0, 0);
      let {width, height, data} = gd.getImageData(0, 0, c1.width, c1.height);
      let texture = [];
      for( let i = 0; i < data.length; i += 4 ){
        texture.push(`rgba(${data[i]}, ${data[i+1]}, ${data[i+2]}, ${data[i+3]})`);
      }

      resolve( {width, height, data: texture} );
    };
    img.onerror=e=>{
      reject(e);
    };
    img.src = url;
  });
}
