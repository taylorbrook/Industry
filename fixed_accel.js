// set up inlets/outlets/assist strings
inlets = 1;
outlets = 1;
setinletassist(0,"sensor data (list)");
setoutletassist(0,"linear accel in a fixed frame (list)");

var qw = 1.0, qw0 = 1.0;
var qx = 0.0, qx0 = 0.0;
var qy = 0.0, qy0 = 0.0;
var qz = 0.0, qz0 = 0.0;

function loadbang() {	
    qw = 1.0, qw0 = 1.0;
    qx = 0.0, qx0 = 0.0;
    qy = 0.0, qy0 = 0.0;
    qz = 0.0, qz0 = 0.0;
}

function bang() {
    qw0 = qw;
    qx0 = qx;
    qy0 = qy;
    qz0 = qz;

    var q0 = qw0 * qw0 + qx0 * qx0 + qy0 * qy0 + qz0 * qz0;
    qw0 /= q0; qx0 /= q0; qx0 = -qx0; qy0 /= q0; qy0 = -qy0; qz0 /= q0; qz0 = -qz0;
}


function list() {
    var len;
    len = arguments.length;
    if (len < 22) return;
    
    var now = arguments[21];
    var ax = arguments[0];
    var ay = arguments[1];
    var az = arguments[2];

    qw = arguments[12];
    qx = arguments[13];
    qy = arguments[14];
    qz = arguments[15];

    var q = qw * qw + qx * qx + qy * qy + qz * qz;
    qw /= q; qx /= q; qy /= q; qz /= q;

    var qw1 = qw0 * qw - qx0 * qx - qy0 * qy - qz0 * qz;
    var qx1 = qw0 * qx + qx0 * qw + qy0 * qz - qz0 * qy;
    var qy1 = qw0 * qy - qx0 * qz + qy0 * qw + qz0 * qx;
    var qz1 = qw0 * qz + qx0 * qy - qy0 * qx + qz0 * qw;

    var q1 = qw1 * qw1 + qx1 * qx1 + qy1 * qy1 + qz1 * qz1; 
    qw1 /= q1; qx1 /= q1; qy1 /= q1; qz1 /= q1;

    var lax = (1.-2.*qy1*qy1-2.*qz1*qz1)*ax + 2.*(qx1*qy1+qw1*qy1)*ay + 2.*(qx1*qz1-qw1*qy1)*az; 
    var lay = 2.*(qx1*qy1-qw1*qy1)*ax + (1.-2.*qx1*qx1-2*qz1*qz1)*ay + 2.*(qy1*qz1+qw1*qx1)*az; 
    var laz = 2.*(qx1*qz1+qw1*qy1)*ax + 2.*(qy1*qz1-qw1*qx1)*ay + (1.-2.*qx1*qx1-2.*qy1*qy1)*az; 

    var la = [ lax, lay, laz ];
    outlet(0,la);          
}
