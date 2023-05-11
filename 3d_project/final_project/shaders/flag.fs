uniform vec3 color;
uniform sampler2D image;
 
varying vec2 v_uv;
varying float v_elevation;
 
void main()
{
    vec4 textureColor = texture2D(image, v_uv);
    textureColor.rgb *= v_elevation * 0.13 + 0.9;
    gl_FragColor = textureColor;
    // gl_FragColor = vec4(vUv, 1.0, 1.0);
}

