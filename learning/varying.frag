#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

/*
gl_FragCoord is a "varying" which means that the value
is different for each threa; opposite of uniform.
gl_FragCoord.xy: represents pixel coordinates
so st is each coord/total size of billboard
*/

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;
	gl_FragColor = vec4(st,u_mouse);
}