#ifdef GS_ES
precision mediump float;
#endif

uniform float u_time;

vec4 red(){
    return vec4(1.0,0.0,0.0,1.0);
}

void main();

void main(){
    // gl_FragColor = vec4(1.0, 0.6, 0.3, 1.0);
    vec4 color = red();
    gl_FragColor = red();
}

