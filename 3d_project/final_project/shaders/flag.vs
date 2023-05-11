
uniform vec2 frequency;
uniform float time;
 
varying vec2 v_uv;
varying float v_elevation;
 varying vec3 v_normal;
void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    v_normal = normalMatrix * normal;
    float elevation = sin(modelPosition.x * frequency.x+ time) * 0.7;
    elevation += sin(modelPosition.y * frequency.y + time*2.) *0.2;
 
    modelPosition.z += elevation;
 
    vec4 viewPosition = viewMatrix * modelPosition;
    gl_Position = projectionMatrix * viewPosition;
 
    v_uv = uv;
    v_elevation = elevation;
}


