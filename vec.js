// 2维或3维向量

/**
 * vec2: {x, y}
 * vec3: {x, y, z}
 */

/**
 * @param {Vec2} v
 * @return {number}
 */
function vec2_length(v){
    return (v.x ** 2 + v.y ** 2) ** 0.5;
  }
  
  /**
 * @param {Vec2} a
 * @param {Vec2} b
 * @return {Vec2}
 */
  function vec2_add(a, b){
    return {
      x: a.x + b.x,
      y: a.y + b.y,
    };
  }
  
  /**
 * @param {Vec2} a
 * @param {Vec2} b
 * @return {Vec2}
 */
  function vec2_sub(a, b){
    return {
      x: a.x - b.x,
      y: a.y - b.y,
    };
  }
  
 /**
 * @param {Vec2} v
 * @param {number} factor
 * @return {Vec2}
 */
  function vec2_mul(v, factor){
    return {
      x: v.x * factor,
      y: v.y * factor,
    };
  }
  
  /**
 * @param {Vec2} v
 * @param {number} factor
 * @return {Vec2}
 */
  function vec2_div(v, factor){
    return {
      x: v.x / factor,
      y: v.y / factor,
    };
  }
  
  /**
 * @param {Vec2} a
 * @param {Vec2} b
 * @return {number}
 */
  function vec2_dot(a, b){
    return a.x * b.x + a.y * b.y;
  }
  
  /**
 * @param {Vec2} v
 * @return
 */
  function vec2_normalize(v){
    let length = Math.sqrt( v.x ** 2 + v.y ** 2 );
    v.x /= length
    v.y /= length
  }

  // 三维向量方法
  /**
 * @param {Vec3} v
 * @return {number}
 */
function vec3_length(v){
    return ( v.x ** 2 + v.y ** 2 + v.z ** 2 ) ** 0.5;
  }
  
  /**
 * @param {Vec3} a
 * @param {Vec3} b
 * @return {Vec3}
 */
  function vec3_add(a, b){
    return {
      x: a.x + b.x,
      y: a.y + b.y,
      z: a.z + b.z,
    };
  }
  
  /**
 * @param {Vec3} a
 * @param {Vec3} b
 * @return {Vec3}
 */
  function vec3_sub(a, b){
    return {
      x: a.x - b.x,
      y: a.y - b.y,
      z: a.z - b.z,
    };
  }
  
  /**
 * @param {Vec3} v
 * @param {number} factor
 * @return {Vec3}
 */
  function vec3_mul(v, factor) {
    return {
      x: v.x * factor,
      y: v.y * factor,
      z: v.z * factor,
    };
  }
  
  /**
 * @param {Vec3} v
 * @param {number} factor
 * @return {Vec3}
 */
  function vec3_div(v, factor){
    return {
      x: v.x / factor,
      y: v.y / factor,
      z: v.z / factor,
    };
  }
  
  /**
 * @param {Vec3} a
 * @param {Vec3} b
 * @return {Vec3}
 */
  function vec3_cross( a, b ){
    return {
      x: a.y * b.z - a.z * b.y,
      y: a.z * b.x - a.x * b.z,
      z: a.x * b.y - a.y * b.x,
    };
  }
  
  /**
 * @param {Vec3} a
 * @param {Vec3} b
 * @return {number}
 */
  function vec3_dot(a, b){
    return a.x * b.x + a.y * b.y + a.z * b.z;
  }
  
  /**
 * @param {Vec3} v
 * @return
 */
  function vec3_normalize(v){
    let length = Math.sqrt( v.x ** 2 + v.y ** 2 + v.z ** 2 );
    v.x /= length
    v.y /= length
    v.z /= length
  }
  
  /**
 * @param {Vec3} v
 * @param {number} angle
 * @return {Vec3}
 */
  function vec3_rotate_x(v, angle){
    const cos = Math.cos(angle), sin = Math.sin(angle);
    return {
      x: v.x,
      y: v.y * cos - v.z * sin,
      z: v.y * sin + v.z * cos,
    };
  }
  
  /**
 * @param {Vec3} v
 * @param {number} angle
 * @return {Vec3}
 */
  function vec3_rotate_y(v, angle){
    const cos = Math.cos(angle), sin = Math.sin(angle);
    return {
      x: v.x * cos + v.z * sin,
      y: v.y,
      z: -v.x * sin + v.z * cos,
    };
  }
  
  /**
 * @param {Vec3} v
 * @param {number} angle
 * @return {Vec3}
 */
  function vec3_rotate_z(v, angle){
    const cos = Math.cos(angle), sin = Math.sin(angle);
    return {
      x: v.x * cos - v.y * sin,
      y: v.x * sin + v.y * cos,
      z: v.z,
    };
  }
  
  /**
 * @param {Vec3} v
 * @return {Vec4}
 */
  function vec4_from_vec3( v3 ){
    return {
      x: v3.x, y: v3.y, z: v3.z, w: 1.0,
    };
  }
  
  /**
 * @param {Vec4} v
 * @return {Vec3}
 */
  function vec3_from_vec4( v4 ){
    return {
      x: v4.x, y: v4.y, z: v4.z,
    };
  }
  
  /**
 * @param {Vec4} v
 * @return {Vec2}
 */
  function vec2_from_vec4( v4 ){
    return {
      x: v4.x, y: v4.y,
    };
  }