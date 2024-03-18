#ifdef GS_ES
precision mediump float;
#endif

highp vec4 red(){
    return vec4(1.0,0.0,0.7,1.0);
}

void main(){
    // gl_FragColor = vec4(1.0, 0.6, 0.3, 1.0);
    gl_FragColor = red() + vec4(1.0, 0.6, 0.3, 1.0);
}