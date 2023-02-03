// set up inlets/outlets/assist strings
inlets = 1;
outlets = 1;
setinletassist(0,"quaternion data (list)");
setoutletassist(0,"euler angles (list)");

var pi = 3.1415927, pi2 = 2*pi;
var c = 180 / pi;

var oe1 = 0, oe2 = 0, oe3 = 0;

function bang() {
  while (oe1 > pi) oe1 -= pi2;
  while (oe1 < -pi) oe1 += pi2;
  while (oe2 > pi) oe2 -= pi2;
  while (oe2 < -pi) oe2 += pi2;
  while (oe3 > pi) oe3 -= pi2;
  while (oe3 < -pi) oe3 += pi2;
}

function list() {
    var len;
    len = arguments.length;
    if (len < 4) return;

	var qw = arguments[0], sqw = qw*qw;
	var qx = arguments[1], sqx = qx*qx;
	var qy = arguments[2], sqy = qy*qy;
	var qz = arguments[3], sqz = qz*qz;

    var e1 = Math.atan2(2.0*(qx*qy+qz*qw),(sqx-sqy-sqz+sqw));
    var e2 = Math.asin(-2.0*(qx*qz-qy*qw)/(sqx+sqy+sqz+sqw));
    var e3 = Math.atan2(2.0*(qy*qz+qx*qw),(-sqx-sqy+sqz+sqw));
 
    while (e1 - oe1 > pi) e1 -= pi2; while (e1 - oe1 < -pi) e1 += pi2; 
    while (e2 - oe2 > pi) e2 -= pi2; while (e2 - oe2 < -pi) e2 += pi2; 
    while (e3 - oe3 > pi) e3 -= pi2; while (e3 - oe3 < -pi) e3 += pi2; 

    oe1 = e1; oe2 = e2; oe3 = e3;

    var euler = [e1*c,e2*c,e3*c];
    outlet(0,euler);
}