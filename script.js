const PI = 3.14;
let radius = 6378e3;
let circumference = (2) * (PI) * radius;
let surfaceArea = (4) * (PI) * (radius)**2;
let volume = (4 / 3) * (PI) * (radius * radius * radius);

document.write ('The radius of the sphere is ' + radius + '<br>' );
document.write ('The circumference is ' + circumference + '<br>' );
document.write ('The surface area is '  + surfaceArea + '<br>' );
document.write ('The volume is ' + volume + '<br>' );
