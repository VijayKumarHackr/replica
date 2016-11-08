/**
 * @author VijayKumarHackr http://nvijaykumar.me
 */

function Cylinder(radius, length, radiusSegments, lengthSegments, material) {

        // set the default values
        if(typeof(radius) == 'undefined') radius = 15;
        if(typeof(length) == 'undefined') length = 200;
        if(typeof(radiusSegments) == 'undefined') radiusSegments = 10;
        if(typeof(lengthSegments) == 'undefined') lengthSegments = 200;
        
        this.radius = radius;
        this.length = length;
        this.radiusSegments = radiusSegments;
        this.lengthSegments = lengthSegments;
        var eachSegmentLength = this.length/this.lengthSegments;

        // array to hold the 2D cylinder coordinates
        this.points = new Array();
        
        // push initial point - the center of base
        this.points.push(new THREE.Vector2(ZERO, ZERO));

        // push the points for straight line - the surface 
        for(var len = 0; len < this.length; len += eachSegmentLength) {
                this.points.push(new THREE.Vector2(this.radius, len));
        }
        
        // push the end point - the center of top
        this.points.push(new THREE.Vector2(ZERO, len - eachSegmentLength));

        // create the cylinder geometry
        this.geometry = new THREE.LatheGeometry(this.points, this.radiusSegments, 0, 2 * Math.PI);
        
        THREE.Mesh.call(this, this.geometry, material);
}

Cylinder.prototype = new THREE.Mesh();
